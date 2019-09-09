import {render, getEventDayDate} from './components/util';
import {createEvent,
  getSortItems,
  getTripTabs,
  getFilters} from './components/data';
import Menu from './components/menu';
import TotalPrice from './components/total-price';
import TripDays from './components/trip-days';
import Filters from './components/filters';
import Sort from './components/sort';
import RouteInformation from './components/route-information';

const menu = new Menu(getTripTabs());
const filters = new Filters(getFilters());
const sort = new Sort(getSortItems());
const EVENT_COUNT = 9;
const createEventsMockArray = (makeEventData, eventsNumberOnPage) => {
  return new Array(eventsNumberOnPage)
                  .fill(``)
                  .map(makeEventData);
};
// Создаем массив с моковыми данными.
const eventsDataArray = createEventsMockArray(createEvent, EVENT_COUNT);
/* console.log(eventsDataArray); */
// сортировать ивенты до сортировки по дням.
const sortedEventsData = eventsDataArray.sort((a, b) => a.eventTime.start - b.eventTime.start);

// Получаем массив неотсортированных дней с событиями.
const unsortedDays = sortedEventsData.reduce((acc, it) =>{
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
// Функция считает общую сумму оферов и ивентов.
const getTotalPrice = (eventsData) => {
  const currentArray = [];
  eventsData.map((event) => {
    if (event.offerList.length > 0) {
      event.offerList.forEach((offer) => currentArray.push(offer.offerPrice));
    }
  });
  const eventsPrice = eventsData.map((it) => it.eventPrice).reduce((sum, current) => sum + current, 0);
  return currentArray.reduce((sum, curr) => sum + curr, 0) + eventsPrice;
};

// Считаем общую стоимость поездки
const totalPrice = getTotalPrice(eventsDataArray);
const price = new TotalPrice(totalPrice);

const routeInformation = new RouteInformation(getRouteCities(eventsDataArray), daysSorted);

const tripInfo = document.querySelector(`.trip-info`);

render(tripInfo, routeInformation.getElement());
render(tripInfo, price.getElement());

const tripControl = document.querySelector(`.trip-controls`);

render(tripControl, menu.getElement());
render(tripControl, filters.getElement());

const tripEvents = document.querySelector(`.trip-events`);

render(tripEvents, sort.getElement());
render(tripEvents, tripDays.getElement());
