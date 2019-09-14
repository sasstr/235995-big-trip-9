import {getEventDayDate, render} from './components/util';
import TripDays from './components/trip-days';

export default class TripController {
  constructor(events, container) {
    this._container = container;
    this._events = events.slice();
  }

  // Получаем массив отсортированных дней с событиями.
  static getSortedDays(events) {
    events = events.slice();
    const sortedEventsData = events.sort((a, b) => a.eventTime.start - b.eventTime.start);
    const unsortedDays = sortedEventsData.reduce((acc, it) => {
      const dt = getEventDayDate(it.eventTime.start);
      if (!acc[dt]) {
        acc[dt] = [];
      }
      acc[dt].push(it);
      return acc;
    }, {});
    return Object.entries(unsortedDays)
    .sort((a, b) => {
      return a[0] - b[0];
    });
  }

  init() {
    const tripDaysElements = new TripDays(TripController.getSortedDays(this._events));
    const tripEvents = document.querySelector(`.trip-events`);
    render(tripEvents, tripDaysElements.getElement());
  }
}
