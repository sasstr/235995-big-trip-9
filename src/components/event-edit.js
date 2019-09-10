import {createElement} from './util';

export default class EventEdit {
  constructor({
    activityEvent,
    eventID,
    eventType,
    eventTime,
    eventPrice,
    eventCity,
    offerList,
    offerDescription,
    sightseeingPhoto,
    transferEvent,
  }) {
    this._activityEvent = activityEvent;
    this._element = null;
    this._eventID = eventID;
    this._eventType = eventType;
    this._eventTime = eventTime;
    this._eventPrice = eventPrice;
    this._eventCity = eventCity;
    this._offerList = offerList;
    this._offerDescription = offerDescription;
    this._sightseeingPhoto = sightseeingPhoto;
    this._transferEvent = transferEvent;
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
    return `<form class="event  event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-${this._eventID}">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="${this._eventType.icon}" alt="${this._eventType.title}">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${this._eventID}" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Transfer</legend>
            ${this._transferEvent.map((transferType) =>
    `<div class="event__type-item">
            <input id="event-type-${transferType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${transferType.toLowerCase()}">
            <label class="event__type-label  event__type-label--${transferType.toLowerCase()}" for="event-type-${transferType.toLowerCase()}-1">${transferType}</label>
          </div>`.trim()).join(``)}
          </fieldset>

          <fieldset class="event__type-group">
            <legend class="visually-hidden">Activity</legend>
            ${this._activityEvent.map((activityType) => `
            <div class="event__type-item">
              <input id="event-type-${activityType.toLowerCase()}-${this._eventID}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${activityType.toLowerCase()}">
              <label class="event__type-label  event__type-label--${activityType.toLowerCase()}" for="event-type-${activityType.toLowerCase()}-${this._eventID}">${activityType}</label>
            </div>`.trim()).join(``)}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-${this._eventID}">
          ${this._eventType.title}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-${this._eventID}" type="text" name="event-destination" value="${this._eventCity}" list="destination-list-1">
        <datalist id="destination-list-${this._eventID}">
          <option value="Amsterdam"></option>
          <option value="Geneva"></option>
          <option value="Chamonix"></option>
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-${this._eventID}">
          From
        </label>
        <input class="event__input  event__input--time" id="event-start-time-${this._eventID}" type="text" name="event-start-time" value="${new Date(this._eventTime.start).toLocaleString(`en-GB`, {year: `2-digit`, month: `numeric`, day: `numeric`, hour: `numeric`, minute: `numeric`})}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-${this._eventID}">
          To
        </label>
        <input class="event__input  event__input--time" id="event-end-time-${this._eventID}" type="text" name="event-end-time" value="${new Date(this._eventTime.end).toLocaleString(`en-GB`, {year: `2-digit`, month: `numeric`, day: `numeric`, hour: `numeric`, minute: `numeric`})}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-${this._eventID}">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-${this._eventID}" type="text" name="event-price" value="${this._eventPrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>

      <input id="event-favorite-${this._eventID}" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked>
      <label class="event__favorite-btn" for="event-favorite-${this._eventID}">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </label>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>

    <section class="event__details">

      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
        ${this._offerList.map((offer) => `<div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.info.id === undefined ? `` : offer.info.id}-${this._eventID}"
            type="checkbox" name="event-offer-${offer.info.id === undefined ? `` : offer.info.id}" ${offer.info.isActive ? `` : `checked`} >
            <label class="event__offer-label" for="event-offer-${offer.info.id === undefined ? `` : offer.info.id}-${this._eventID}">
              <span class="event__offer-title">${offer.info.title === undefined ? `` : `${offer.info.title} + € `}</span>
              <span class="event__offer-price">${offer.offerPrice}</span>
            </label>
          </div>`.trim()).join(``)}
        </div>
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">
          ${this._offerDescription}
        </p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${this._sightseeingPhoto.map((photoUrl) => `<img class="event__photo" src="${photoUrl}" alt="Event photo"></img>`.trim()).join(``)}
          </div>
        </div>
      </section>
    </section>
  </form>`.trim();
  }
}
