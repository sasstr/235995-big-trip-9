import AbstractComponent from './abstract-component';

export default class Filters extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  _makeFiltersList(filters) {
    return filters.map((filter) => `<div class="trip-filters__filter">
    <input id="filter-${filter.id}" class="trip-filters__filter-input  visually-hidden"
    type="radio" name="trip-filter" value="${filter.id}" ${filter.isChecked ? ` checked` : ``}>
    <label class="trip-filters__filter-label" for="filter-${filter.id}">${filter.title}</label>
  </div>`.trim()).join(``);
  }

  getTemplate() {
    return `<form class="trip-filters" action="#" method="get">
    ${this._makeFiltersList(this._filters)}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`.trim();
  }
}
