import {render, getSortedDays} from './components/util';
import {createEvent,
  getTripTabs,
  getFilters} from './components/data';
import TripController from './controllers/trip-controller';
import Menu from './components/menu';
import TotalPrice from './components/total-price';
import Filters from './components/filters';
import RouteInformation from './components/route-information';
import NoPoint from './components/no-point';
import ButtonNewEvent from './components/button-new-event';

const EVENT_COUNT = 5;
const menu = new Menu(getTripTabs());
const filters = new Filters(getFilters());
const createEventsMockArray = (makeEventData, eventsNumberOnPage) => {
  return new Array(eventsNumberOnPage)
                  .fill(``)
                  .map(makeEventData);
};

// Создаем массив с моковыми данными.
const eventsDataArray = createEventsMockArray(createEvent, EVENT_COUNT);
const buttonNewEvent = new ButtonNewEvent(eventsDataArray.length);

// Оставляем в массиве городов только те что не повторились подряд.
const getRouteCities = (eventsArray) => {
  if (!eventsArray || eventsArray.length === 0) {
    return ``;
  }
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

const routeInformation = new RouteInformation(getRouteCities(eventsDataArray), getSortedDays(eventsDataArray));

const tripInfo = document.querySelector(`.trip-info`);

render(tripInfo, routeInformation.getElement());
render(tripInfo, price.getElement());

const tripControl = document.querySelector(`.trip-controls`);
const tripMain = document.querySelector(`.trip-main`);

render(tripMain, buttonNewEvent.getElement());
render(tripControl, menu.getElement());
render(tripControl, filters.getElement());

const tripEvents = document.querySelector(`.trip-events`);

if (!eventsDataArray || eventsDataArray.length === 0) {
  const noPoint = new NoPoint();
  render(tripEvents, noPoint.getElement());
}

const tripController = new TripController(eventsDataArray, tripEvents);
tripController.init();
