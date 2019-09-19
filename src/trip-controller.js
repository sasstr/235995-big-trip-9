import {render, getSortedDays} from './components/util';
import TripDays from './components/trip-days';

export default class TripController {
  constructor(events, container) {
    this._container = container;
    this._events = events.slice();
  }

  init() {
    const tripDaysElements = new TripDays(getSortedDays(this._events));
    const tripEvents = document.querySelector(`.trip-events`);
    render(tripEvents, tripDaysElements.getElement());
  }
}
