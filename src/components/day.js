import AbstractComponent from './abstract-component';

export default class Day extends AbstractComponent {
  constructor(day, index) {
    super();

    this._day = day;
    this._index = index;
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
