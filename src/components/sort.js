import AbstractComponent from './abstract-component';

export default class Sort extends AbstractComponent {
  constructor(sortData) {
    super();

    this._sortData = sortData;
  }

  _isSpan(item) {
    if (item.tag === `span`) {
      return `<span class="trip-sort__item  trip-sort__item--${item.name}">${item.label}</span>`.trim();
    }
    return `<div class="trip-sort__item  trip-sort__item--${item.name}">
    <input id="sort-${item.name}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item.name}"
    ${item.name === `event` ? `checked` : ``}>
    <label class="trip-sort__btn" for="sort-event" data-sort="${item.name}">${item.label}${item.svg}</label>
  </div>`.trim();
  }

  _makeSortList(sortItems) {
    return sortItems.map((sortItem) => `${this._isSpan(sortItem)}`);
  }

  getTemplate() {
    return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${this._makeSortList(this._sortData).join(``)}
    </form>`.trim();
  }
}
