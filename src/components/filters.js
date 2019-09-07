import {createElement} from './util';

export default class Filters {
  constructor(filters) {
    this._filters = filters;
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
    return `<h2 class="visually-hidden">Filter events</h2>
  <form class="trip-filters" action="#" method="get">
    ${this._filters.map((filter) => `<div class="trip-filters__filter">
      <input id="filter-${filter.id}" class="trip-filters__filter-input  visually-hidden"
      type="radio" name="trip-filter" value="${filter.id}" ${filter.isChecked ? ` checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${filter.id}">${filter.title}</label>
    </div>`.trim()).join(``)}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`.trim();
  }
}
