import {render, getEventDayDate} from './components/util';
import {createEvent, getSortItems, getTripTabs, getFilters} from './components/data';
import Menu from './components/menu';
import TripDays from './components/trip-days';
import Filters from './components/filters';
import Sort from './components/sort';
/* import EventItem from './components/event-item';
import EditEvent from './components/edit-event'; */
import RouteInformation from './components/route-information';

const menu = new Menu(getTripTabs());
const filters = new Filters(getFilters());
const sort = new Sort(getSortItems());
const EVENT_COUNT = 3;
const createEventsMockArray = (makeEventData, eventsNumberOnPage) => {
  return new Array(eventsNumberOnPage).fill(``).map(makeEventData);
};
// eventsArray(eventsNumberOnPage).fill('').map(makeEventData)
const eventsDataArray = createEventsMockArray(createEvent, EVENT_COUNT);

// Получаем массив неотсортированных дней с событиями.
const unsortedDays = eventsDataArray.reduce((acc, it) =>{
  const dt = getEventDayDate(it.eventTime.start);
  if (!acc[dt]) {
    acc[dt] = [];
  }
  acc[dt].push(it);
  return acc;
}, {});
// Получаем массив отсортированных дней с событиями.
const daysSorted = Object.entries(unsortedDays)
                          .sort((a, b) => {
                            return a[0] - b[0];
                          });
console.log(daysSorted);
const tripDays = new TripDays(daysSorted);

// Оставляем в массиве городов только те что не повторились подряд.
const getRouteCities = (eventsArray) => {
  const cities = [];
  cities.push(eventsArray[0].eventCity);
  for (let i = 0; i < eventsArray.length; i++) {
    if (i > 0 && eventsArray[i - 1].eventCity !== eventsArray[i].eventCity) {
      cities.push(eventsArray[i].eventCity);
    }
  }
  return cities;
};
console.log(getFilters());
// Считаем общую стоимость поездки
const totalPrice = eventsDataArray.map((it) => it.eventPrice).reduce((sum, current) => sum + current, 0);
console.log(totalPrice);
const routeInformation = new RouteInformation(totalPrice, getRouteCities(eventsDataArray), daysSorted);

const tripInfo = document.querySelector(`.trip-info`);
render(tripInfo, routeInformation.getElement());

const tripControl = document.querySelector(`.trip-controls`);
render(tripControl, menu.getElement());
render(tripControl, filters.getElement());

const tripEvents = document.querySelector(`.trip-events`);

render(tripEvents, sort.getElement());
render(tripEvents, tripDays.getElement(daysSorted));
