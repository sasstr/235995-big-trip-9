import {render, getSortedDays} from '../components/util';
import TripDays from '../components/trip-days';
import SortEvents from '../components/sort-events';
import Sort from '../components/sort';

export default class TripController {
  constructor(events, container) {
    this._container = container;
    this._events = events.slice();
    this._sort = new Sort();
    this._subscriptions = [];
    this._onChangeView = this._onChangeView.bind(this);
  }

  _onChangeView() {
    this._subscriptions.forEach((it) => it());
  }

  _sortByTime() {
    return this._events.slice()
                .sort((a, b) => b.eventTime.duration - a.eventTime.duration);
  }

  _sortByPrice() {
    return this._events.slice()
                .sort((a, b) => b.eventPrice - a.eventPrice);
  }

  onEventChange(event, updatedEvent) {
    const index = this._events.findIndex((currentEvent) => currentEvent === event);

    this._events[index] = updatedEvent;
  }

  _renderDays(tripEventsElement) {
    const tripDaysElements = new TripDays(getSortedDays(this._events), this.onEventChange.bind(this));
    render(tripEventsElement, tripDaysElements.getElement());
  }

  // Функция слушатель события клик на элементах сортировки.
  _onSortLinkClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `LABEL`) {
      return;
    }
    evt.target.previousElementSibling.checked = true;

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
