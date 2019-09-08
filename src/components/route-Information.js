import {createElement} from './util';

export default class RouteInformation {
  constructor(citiesArray, days) {
    this._citiesArray = citiesArray;
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

  _isRoute(citiesAmount) {
    return citiesAmount < 3 ?
      `${this._citiesArray[0]} &nbsp;&mdash;&nbsp; ${this._citiesArray[citiesAmount - 1]}` :
      `${this._citiesArray[0]}&mdash; ... &mdash;${this._citiesArray[citiesAmount - 1]}`;
  }

  getTemplate() {
    return `<div class="trip-info__main">
    <h1 class="trip-info__title">${this._isRoute(this._citiesArray.length)}</h1>

    <p class="trip-info__dates">${new Date(+this._days[0][0]).toLocaleString(`en-GB`, {
    month: `short`,
    day: `2-digit`
  })}&nbsp;&mdash;&nbsp;${new Date(+this._days[this._days.length - 1][0]).toLocaleString(`en-GB`, {
  day: `2-digit`
})}</p>
    </div>`.trim();
  }
}
