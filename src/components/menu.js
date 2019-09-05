import {createElement} from './util';

export default class Menu {
  constructor(tripTabs) {
    this._tripTabs = tripTabs;
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
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${this._tripTabs.map((tab) => `<a class="trip-tabs__btn ${tab.isActive}" href="#">${tab.name}</a>`.trim()).join(``)}
  </nav>`.trim();
  }
}
