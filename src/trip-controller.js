import {render, getSortedDays} from './components/util';
import TripDays from './components/trip-days';
import SortEvents from './components/sort-events';
import {getSortItems} from './components/data';
import Sort from './components/sort';

export default class TripController {
  constructor(events, container) {
    this._container = container;
    this._events = events.slice();
    this._sort = new Sort(getSortItems());
  }

  _sortByTime() {
    return this._events.slice()
                .sort((a, b) => a.eventTime.duration - b.eventTime.duration);
  }

  _sortByPrice() {
    return this._events.slice()
                .sort((a, b) => a.eventPrice - b.eventPrice);
  }

  _renderDays(tripEventsElement) {
    const tripDaysElements = new TripDays(getSortedDays(this._events));
    render(tripEventsElement, tripDaysElements.getElement());
  }

  // Функция слушатель события клик на элементах сортировки.
  _onSortLinkClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `LABEL`) {
      return;
    }

    const tripDays = document.querySelector(`.trip-days`);
    tripDays.innerHTML = ``;

    switch (evt.target.dataset.sort) {
      case `time`:
        const sortedByTimeEvents = new SortEvents(this._sortByTime(this._events));
        render(tripDays, sortedByTimeEvents.getElement());
        break;
      case `price`:
        const sortedByPriceEvents = new SortEvents(this._sortByPrice(this._events));
        render(tripDays, sortedByPriceEvents.getElement());
        break;
      case `event`:
        const tripEvents = document.querySelector(`.trip-events`);
        tripEvents.removeChild(tripDays);
        this._renderDays(tripEvents);
        break;
    }
  }

  init() {
    const tripEvents = document.querySelector(`.trip-events`);
    if (this._events && this._events.length > 0) {
      render(tripEvents, this._sort.getElement());
    }
    const tripEventsSort = document.querySelector(`.trip-events__trip-sort`);
    tripEventsSort.addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
    this._renderDays(tripEvents);
  }
}
