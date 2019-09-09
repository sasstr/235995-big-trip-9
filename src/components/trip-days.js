import {createElement, render} from './util';
import EventItem from './event-item';
import EventEdit from './event-edit';
const tripContainer = document.querySelector(`.trip-events`);
const makeEventTemplate = (eventData) => {
  const event = new EventItem(eventData);
  const eventEdit = new EventEdit(eventData);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      tripContainer.replaceChild(event.getElement(), eventEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  event.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      tripContainer.replaceChild(eventEdit.getElement(), event.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

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
      tripContainer.replaceChild(event.getElement(), eventEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  eventEdit.getElement()
  .querySelector(`.event__save-btn`)
  .addEventListener(`submit`, () => {
    tripContainer.replaceChild(event.getElement(), eventEdit.getElement());
    document.addEventListener(`keydown`, onEscKeyDown);
  });
  render(tripContainer, event.getElement());
  /* return event.getTemplate(); */
};

export default class TripDays {
  constructor(days) {
    this._days = days;
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
    return `<ul class="trip-days">
    ${this._days.map((day, index) => `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${index + 1}</span>
          <time class="day__date" datetime="${new Date(+day[0]).toISOString().slice(0, 10)}">
          ${new Date(+day[0]).toLocaleString(`en-GB`, {
    month: `short`,
    day: `2-digit`})}
        </time>
        </div>
        <ul class="trip-events__list">
          ${day[1].map((dayEvent) => makeEventTemplate(dayEvent)).join(``)}
        </ul>
        </li>`.trim()).join(``)}
      </ul>`.trim();
  }
}
