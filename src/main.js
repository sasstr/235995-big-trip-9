import {makeMenuTemplate} from './components/menu';
import {createEvent, getSortItems, getTripTabs, getFilters} from './components/data';
import {makeDaysTemplate} from './components/trip-days';
import {makeFiltersTemplate} from './components/filters';
import {makeSortFormTemplate} from './components/sort';
import {makeRouteInformationTemplate} from './components/route-information';

const CARD_COUNT = 8;
const createEventsMockArray = (makeEventData, eventsNumberOnPage) => {
  return new Array(eventsNumberOnPage).fill(``).map(makeEventData);
};
// eventsArray(eventsNumberOnPage).fill('').map(makeEventData)
const eventsDataArray = createEventsMockArray(createEvent, CARD_COUNT);

// функция возращает таймстэмп без часов минут и секунд с милисекундами
const getEventDayDate = (date) => {
  return Date.parse(new Date(date).toISOString()
                                  .slice(0, 10)
                                  .split(`-`)
                                  .join(`, `));
};
// Получаем массив неотсортированных дней с событиями.
const unsortedDays = eventsDataArray.reduce((acc, it) =>{
  const dt = getEventDayDate(it.eventTime.start);
  if (!acc[dt]) {
    acc[dt] = [];
  }
  acc[dt].push(it);
  return acc;
}, {});

const daysSorted = Object.entries(unsortedDays)
                          .sort((a, b) => {
                            return a[0] - b[0];
                          });

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
const cities = getRouteCities(eventsDataArray);
// Считаем общую стоимость поездки
const totalPrice = eventsDataArray.map((it) => it.eventPrice).reduce((sum, current) => sum + current, 0);

/**
 * Функция рендерит разметку.
 * @param {node} container элемент в который добавляется разметка из cb.
 * @param {string} markup функция которая возращает разметку, которая добавляется в container.
 * @param {string} place место куда вставлять разметку.`
 * @return {void}
 */
const renderTemplate = (container, markup, place = `beforeend`) => container.insertAdjacentHTML(place, markup);

const tripInfo = document.querySelector(`.trip-info`);
renderTemplate(tripInfo, makeRouteInformationTemplate(totalPrice, cities, daysSorted), `afterBegin`);

const tripControl = document.querySelector(`.trip-controls`);
renderTemplate(tripControl, makeMenuTemplate(getTripTabs()));
renderTemplate(tripControl, makeFiltersTemplate(getFilters()));

const tripEvents = document.querySelector(`.trip-events`);
renderTemplate(tripEvents, makeSortFormTemplate(getSortItems()));
renderTemplate(tripEvents, makeDaysTemplate(daysSorted));
