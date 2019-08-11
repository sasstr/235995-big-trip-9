import {getMenu} from './components/menu';
import {getFilters} from './components/filters';
import {getSortForm} from './components/filters';
import {getCard} from './components/card';
import {getEditCard} from './components/edit-event';
import {getRouteInformation} from './components/route-information';

const CARD_COUNT = 3;
/**
 * Функция возращает разметку карточек.
 * @param {number} cardCount колличество карточек задач.
 * @return {string}
 */
const getCardTasks = (cardCount) => new Array(cardCount).fill().map(getCard).join(``);

/**
 * Функция рендерит разметку.
 * @param {node} container элемент в который добавляется разметка из cb.
 * @param {string} markup функция которая возращает разметку, которая добавляется в container.
 * @param {string} place место куда вставлять разметку.
 * @return {void}
 */
const renderComponent = (container, markup, place = `beforeend`) => container.insertAdjacentHTML(place, markup);

const tripInfo = document.querySelector(`.trip-info`);
renderComponent(tripInfo, getRouteInformation(), `afterBegin`);

const tripControl = document.querySelector(`.trip-controls`);
renderComponent(tripControl, getMenu());
renderComponent(tripControl, getFilters());

const tripEvents = document.querySelector(`.trip-events`);
renderComponent(tripEvents, getSortForm());
renderComponent(tripEvents, getEditCard());
renderComponent(tripEvents, getCardTasks(CARD_COUNT));
