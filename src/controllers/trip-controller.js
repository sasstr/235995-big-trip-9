import {render, getSortedDays} from '../components/util';
import TripDays from '../components/trip-days';
import SortEvents from '../components/sort-events';
import Sort from '../components/sort';
import PointController from "./point-controller";

export default class TripController {
  constructor(events, container) {
    this._container = container;
    this._events = events.slice();
    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
    this._subscriptions = [];
    this._sort = new Sort();
  }

  _renderEvent(event) {
    const pointController = new PointController(this._container, event, this._onDataChange, this._onChangeView);
    this._subscriptions.push(pointController.setDefaultView.bind(pointController));
  }

  _renderDays(tripEventsElement) {
    const tripDaysElements = new TripDays(getSortedDays(this._events));
    render(tripEventsElement, tripDaysElements.getElement());
  }

  _onDataChange(newData, oldData) {
    this._events[this._events.findIndex((it2) => it2 === oldData)] = newData;

    /* this._renderEvent(this._events); */
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
