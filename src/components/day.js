import {createElement} from './util';

export default class Day {
  constructor(day, index) {
    this._day = day;
    this._index = index;
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
    return `<li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${this._index + 1}</span>
      <time class="day__date" datetime="${new Date(+this._day[0]).toISOString().slice(0, 10)}">
      ${new Date(+this._day[0]).toLocaleString(`en-GB`, {
    month: `short`,
    day: `2-digit`})}
          </time>
          </div>

    </li>`.trim();
  }
}
