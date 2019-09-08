import {formatTime, createElement} from './util';

export default class EventItem {
  constructor({
    activityEvent,
    eventType,
    eventTime,
    eventPrice,
    eventCity,
    offerList,
  }) {
    this._activityEvent = activityEvent;
    this._eventType = eventType;
    this._eventTime = eventTime;
    this._eventPrice = eventPrice;
    this._eventCity = eventCity;
    this._offerList = offerList;
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
    return `<div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="${this._eventType.icon}" alt="Event type icon">
    </div>
    <h3 class="event__title">${this._eventType.title} ${this._activityEvent.some((elem) => elem === this._eventType.id) ? `` : this._eventCity}</h3>

    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${new Date(this._eventTime.start).toISOString().slice(0, 17)}">${new Date(this._eventTime.start).toISOString().slice(11, 16)}</time>
        &mdash;
        <time class="event__end-time" datetime="${new Date(this._eventTime.start).toISOString().slice(0, 17)}">${new Date(this._eventTime.end).toISOString().slice(11, 16)}</time>
      </p>
      <p class="event__duration">${formatTime(this._eventTime.duration)}</p>
    </div>

    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${this._eventPrice}</span>
    </p>

    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
        ${this._offerList.map((offer) =>
    `<li class="event__offer">
        <span class="event__offer-title">${offer.info.title === undefined ? `` : `${offer.info.title} + € `}</span>
        <span class="event__offer-price">
        ${offer.offerPrice === undefined ? `` : offer.offerPrice}</span>
        </li>`.trim()).join(``)}
    </ul>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>`.trim();
  }
}
