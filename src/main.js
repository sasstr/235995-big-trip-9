import {getMenu} from './components/menu';
import {getFilters} from './components/filters';
import {getSortForm} from './components/filters';
import {getCard} from './components/card';
import {getEditCard} from './components/card-edit';
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
 * @param {string} place место куда вставлять разметку.
 * @param {node} container элемент в который добавляется разметка из cb.
 * @param {string} markup функция которая возращает разметку, которая добавляется в container.
 * @return {void}
 */
const renderComponent = (place, container, markup) => container.insertAdjacentHTML(place, markup);

const tripInfo = document.querySelector(`.trip-info`);
const tripControl = tripInfo.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

/* renderComponent(mainControl, getMenu());
renderComponent(pageMain, getSearch());
renderComponent(pageMain, getMainFilter());
renderComponent(pageMain, getBoardContainer()); */
