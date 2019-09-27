import EventItem from '../components/event-item';
import EventEdit from '../components/event-edit';

export default class PointController {
  constructor(container, onDataChange, onChangeView, data) {
    this._container = container;
    this._data = data;
    this._onDataChange = onDataChange;
    this._onChangeView = onChangeView;
  }

  _makeEvent(eventMock) {

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

        /* .event__save-btn
        event-destination
        event-start-time
        event-end-time
        event-price
        event-offer-comfort
        event-favorite checked ?
        */
        const formData = new FormData(eventEdit.getElement().querySelector(`.event--edit`));
        const entry = {
          eventCity: formData.get(`event-destination`),
          eventPrice: formData.get(`event-price`),
          [eventType.start]: formData.get(`event-start-time`),
          [eventType.end]: formData.get(`event-end-time`),
          
          transferEvent: [`Bus`, `Drive`, `Flight`, `Ship`, `Taxi`, `Train`, `Transport`],
          activityEvent: [`Check-in`, `Restaurant`, `Sightseeing`],
        };
      });

    return event;
  }

  /* setDefaultView() {
    if (this._container.getElement().contains(this._pointEdit.getElement())) {
      this._container.getElement().replaceChild(this._pointView.getElement(), this._pointEdit.getElement());
    }
  } */

  init() {
    /* код, который отвечает за смену точки маршрута на форму редактирования точки,
        должен переехать в метод init контроллера PointController. */
  }
}
