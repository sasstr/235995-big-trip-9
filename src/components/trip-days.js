import {createElement} from './util';
import EventItem from './event-item';
import EventEdit from './event-edit';
import Day from './day';
/* const tripContainer = document.querySelector(`.trip-events`); */
export default class TripDays {
  constructor(days) {
    this._days = days;
    this._element = null;
  }

  removeElement() {
    this._element = null;
  }

  _makeEvent(eventMock, tripContainer) {

    const event = new EventItem(eventMock);
    const eventEdit = new EventEdit(eventMock);

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
    return event;
  }

  _makeDay(dayInfo, index) {
    const day = new Day(dayInfo, index);
    const dayElement = day.getElement();
    const tripEventsList = createElement(`<ul class="trip-events__list">

    </ul>`);
    dayInfo[1].forEach((eventInfo) => tripEventsList.appendChild(this._makeEvent(eventInfo, tripEventsList).getElement()));
    dayElement.append(tripEventsList);
    return dayElement;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
      this._days.forEach((day, i) => {
        this._element.appendChild(this._makeDay(day, i));
      });
    }
    return this._element;
  }
  getTemplate() {
    return `<ul class="trip-days">

      </ul>`.trim();
  }
}

