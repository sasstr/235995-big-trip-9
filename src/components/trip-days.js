import AbstractComponent from './abstract-component';
import {createElement} from './util';
import Day from './day';
import EventController from '../controllers/event-controller';

export default class TripDays extends AbstractComponent {
  constructor(days, onEventChange) {
    super();

    this._days = days;
    this._onEventChange = onEventChange;
  }

  static _makeEvent(eventData, onEventChange) {
    const event = new EventController(eventData, onEventChange);
    return event.create();
  }

  _makeDay(dayInfo, index) {
    const day = new Day(dayInfo, index);
    const dayElement = day.getElement();
    const tripEventsList = createElement(`<ul class="trip-events__list">

    </ul>`);
    dayInfo[1].forEach((eventInfo) => tripEventsList.appendChild(TripDays._makeEvent(eventInfo, this._onEventChange).getElement()));
    dayElement.append(tripEventsList);

    return dayElement;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
      this._days.forEach((day, i) => {
        this._element.appendChild(this._makeDay(day, i));
      });
    }
    return this._element;
  }

  getTemplate() {
    return `<ul class="trip-days">

      </ul>`.trim();
  }
}

