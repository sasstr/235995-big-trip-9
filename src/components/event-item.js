import {formatTime} from './util';
import AbstractComponent from './abstract-component';
import EventEdit from './event-edit';

export default class EventItem extends AbstractComponent {
  constructor(event, onEventChange) {
    super();

    this._event = event;
    this._activityEvent = event.activityEvent;
    this._eventType = event.eventType;
    this._eventTime = event.eventTime;
    this._eventPrice = event.eventPrice;
    this._eventCity = event.eventCity;
    this._offerList = event.offerList;

    this._onEventChange = onEventChange;
    this.init();
  }

  getTemplate() {
    return `<li class="trip-events__item">
    <div class="event">
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
  </div>
  </li>`.trim();
  }

  init() {
    const event = this;
    event.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        const eventEdit = new EventEdit(this._event);

        const onEscKeyDown = (evt) => {
          if (evt.key === `Escape` || evt.key === `Esc`) {
            eventEdit.getElement().parentNode.replaceChild(event.getElement(), eventEdit.getElement());
            document.removeEventListener(`keydown`, onEscKeyDown);
          }
        };

        event.getElement().parentNode.replaceChild(eventEdit.getElement(), event.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);

        eventEdit.getElement().querySelectorAll(`.event__input`)
          .forEach((item) => {
            item.addEventListener(`focus`, () => {
              document.removeEventListener(`keydown`, onEscKeyDown);
            });
          });

        eventEdit.getElement().querySelectorAll(`.event__input`)
          .forEach((item) => {
            item.addEventListener(`blur`, () => {
              document.addEventListener(`keydown`, onEscKeyDown);
            });
          });

        eventEdit.getElement()
          .querySelector(`.event__rollup-btn`)
          .addEventListener(`click`, () => {
            eventEdit.getElement().parentNode.replaceChild(event.getElement(), eventEdit.getElement());
            document.removeEventListener(`keydown`, onEscKeyDown);
          });

        eventEdit.getElement()
          .addEventListener(`submit`, (evt) => {
            evt.preventDefault();

            /* .event__save-btn
              event-destination +
              event-start-time  +
              event-end-time    +
              event-price       +
              event-offer-comfort
              event-favorite checked ?
            */
            const formData = new FormData(eventEdit.getElement());
            const updatedEvent = Object.assign({}, this._event, {
              eventCity: formData.get(`event-destination`),
              eventPrice: formData.get(`event-price`),
              [this._eventTime.start]: formData.get(`event-start-time`),
              [this._eventTime.end]: formData.get(`event-end-time`)
            });

            this._onEventChange(this._event, updatedEvent);

            const updatedEventItem = new EventItem(updatedEvent, this._onEventChange);
            eventEdit.getElement().parentNode.replaceChild(updatedEventItem.getElement(), eventEdit.getElement());
          });

        eventEdit.getElement()
          .addEventListener(`reset`, (evt) => {
            evt.preventDefault();
          });
      });

  }
}
