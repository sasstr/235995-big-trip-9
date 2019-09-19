import AbstractComponent from './abstract-component';

export default class Menu extends AbstractComponent {
  constructor(tripTabs) {
    super();

    this._tripTabs = tripTabs;
  }

  getTemplate() {
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${this._tripTabs.map((tab) => `<a class="trip-tabs__btn ${tab.isActive}" href="#">${tab.name}</a>`.trim()).join(``)}
  </nav>`.trim();
  }
}
