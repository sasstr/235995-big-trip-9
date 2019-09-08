import {createElement} from './util';

export default class TotalPrice {
  constructor(price) {
    this._price = price;
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
    return `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${this._price}</span>
    </p>`.trim();
  }
}
