import {makeMenuTemplate} from './components/menu';
import {createEventData} from './components/data';
import {makeFiltersTemplate} from './components/filters';
import {makeSortFormTemplate} from './components/sort';
import {makeEventTemplate} from './components/event-item';
import {makeRouteInformationTemplate} from './components/route-information';

const CARD_COUNT = 8;
const createEventsMockArray = (makeEventData, eventsNumberOnPage) => {
  const eventsArray = [];
  for (let i = 0; i < eventsNumberOnPage; i++) {
    eventsArray.push(makeEventData());
  }
  return eventsArray;
};

const eventsDataArray = createEventsMockArray(createEventData, CARD_COUNT);
console.log(eventsDataArray);

// функция возращает таймстэмп без часов минут и секунд с милисекундами
/* const getEventDayDate = (date) => Date.parse(date.toISOString()
                                                        .slice(0, 10)
                                                        .split(`-`)
                                                        .join(`, `));

const unsortedDays = eventsDataArray.reduce((acc, it) =>{
  const dt = getEventDayDate(it.eventTime.start);
  if (!acc[dt]) {
    acc[dt] = [];
  }
  acc[dt].push(it);
  return acc;
}, {});

const daysSorted = Object.entries(unsortedDays())
                          .sort((a, b) => {
                            return a[0] - b[0];
                          });
console.log(daysSorted); */

console.log(eventsDataArray.map((it) => it.eventPrice).reduce((sum, current) => sum + current, 0));
/**
 * Функция возращает разметку карточек.
 * @param {number} cardCount колличество карточек задач.
 * @return {string}
 */
const createEventsMock = (cardCount) => new Array(cardCount).fill().map(makeEventTemplate).join(``);

/**
 * Функция рендерит разметку.
 * @param {node} container элемент в который добавляется разметка из cb.
 * @param {string} markup функция которая возращает разметку, которая добавляется в container.
 * @param {string} place место куда вставлять разметку.`
 * @return {void}
 */
const renderTemplate = (container, markup, place = `beforeend`) => container.insertAdjacentHTML(place, markup);

const tripInfo = document.querySelector(`.trip-info`);
renderTemplate(tripInfo, makeRouteInformationTemplate(), `afterBegin`);

const tripControl = document.querySelector(`.trip-controls`);
renderTemplate(tripControl, makeMenuTemplate());
renderTemplate(tripControl, makeFiltersTemplate());

const tripEvents = document.querySelector(`.trip-events`);
renderTemplate(tripEvents, makeSortFormTemplate());
renderTemplate(tripEvents, createEventsMock(CARD_COUNT));
