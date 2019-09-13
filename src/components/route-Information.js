import AbstractComponent from './abstract-component';

export default class RouteInformation extends AbstractComponent {
  constructor(citiesArray = [], days = []) {
    super();

    this._citiesArray = citiesArray;
    this._days = days;
    this._element = null;
  }

  _isStartDate(routeDays) {
    if (!routeDays || routeDays === 0) {
      return ``;
    }
    return new Date(+routeDays[0][0]).toLocaleString(`en-GB`, {
      month: `short`,
      day: `2-digit`
    });
  }

  _isStartDate(routeDays) {
    if (!routeDays || routeDays === 0) {
      return ``;
    }
    return new Date(+routeDays[0][0]).toLocaleString(`en-GB`, {
      month: `short`,
      day: `2-digit`
    });
  }

  _isEndDate(routeDays) {
    if (!routeDays || routeDays.length === 0) {
      return ``;
    }
    return new Date(+routeDays[this._days.length - 1][0]).toLocaleString(`en-GB`, {
      day: `2-digit`
    });
  }

  _isRoute(citiesAmount = 0) {
    if (citiesAmount === 0) {
      return ``;
    }
    return citiesAmount < 3 ? `${this._citiesArray[0]} &nbsp;&mdash;&nbsp; ${this._citiesArray[citiesAmount - 1]}` :
      `${this._citiesArray[0]}&mdash; ... &mdash;${this._citiesArray[citiesAmount - 1]}`;
  }

  getTemplate() {
    return `<div class="trip-info__main">
    <h1 class="trip-info__title">${this._isRoute(this._citiesArray.length)}</h1>

    <p class="trip-info__dates">${this._isStartDate(this._days)}&nbsp;—&nbsp;${this._isEndDate(this._days)}</p>
    </div>`.trim();
  }
}
