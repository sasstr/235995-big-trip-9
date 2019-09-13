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

  getTemplate() {
    return `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${this._price}</span>
    </p>`.trim();
  }
}
