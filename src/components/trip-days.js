import {getEditCard} from './edit-event';
import {getEventItem} from './event-item';
import {createElement} from './util';

export default class TripDays {
  constructor(days) {
    this._days = days;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<ul class="trip-days">
    ${this._days.map((day, index) => `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${index + 1}</span>
          <time class="day__date" datetime="${new Date(+day[0]).toISOString().slice(0, 10)}">
          ${new Date(+day[0]).toLocaleString(`en-GB`, {
    month: `short`,
    day: `2-digit`
  })}</time>
        </div>
        <ul class="trip-events__list">
          ${day[1].sort((a, b) => (+a.eventTime.start) - (+b.eventTime.start))
               .map((event) => (day[1][index] === event && index === 0) ? getEditCard(event) : getEventItem(event))}

        </ul>
        </li>`)}
      </ul>`.trim();
  }
}
