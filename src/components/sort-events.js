import {createElement} from './util';
import TripDays from './trip-days';
import AbstractComponent from './abstract-component';

export default class SortEvents extends AbstractComponent {
  constructor(events) {
    super();

    this._events = events.slice();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
      const tripEventsList = this._element.querySelector(`.trip-events__list`);
      this._events.forEach((event) => {
        tripEventsList.appendChild(TripDays._makeEvent(event).getElement());
      });
    }
    return this._element;
  }

  getTemplate() {
    return `<li class="trip-days__item  day">
    <div class="day__info"></div>
    <ul class="trip-events__list">
    </ul>
    </li>`.trim();
  }
}
