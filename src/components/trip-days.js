import AbstractComponent from './abstract-component';
import {createElement} from './util';
import EventItem from './event-item';
import EventEdit from './event-edit';
import Day from './day';
export default class TripDays extends AbstractComponent {
  constructor(days) {
    super();

    this._days = days;
  }

  static _makeEvent(eventMock) {

    const event = new EventItem(eventMock);

    event.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        const eventEdit = new EventEdit(eventMock);

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
        .querySelector(`.event__save-btn`)
        .addEventListener(`submit`, () => {
          eventEdit.getElement().parentNode.replaceChild(event.getElement(), eventEdit.getElement());
          document.addEventListener(`keydown`, onEscKeyDown);
        });
      });

    return event;
  }

  _makeDay(dayInfo, index) {
    const day = new Day(dayInfo, index);
    const dayElement = day.getElement();
    const tripEventsList = createElement(`<ul class="trip-events__list">

    </ul>`);
    dayInfo[1].forEach((eventInfo) => tripEventsList.appendChild(TripDays._makeEvent(eventInfo, tripEventsList).getElement()));
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

