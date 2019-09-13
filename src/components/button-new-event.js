import AbstractComponent from './abstract-component';

export default class ButtonNewEvent extends AbstractComponent {
  constructor(eventsAmount) {
    super();

    this._eventsAmount = eventsAmount;
  }

  _isDisabled() {
    return this._eventsAmount > 0 ? `` : `disabled`;
  }

  getTemplate() {
    return `<button class="trip-main__event-add-btn  btn  btn--big
    btn--yellow" type="button" ${this._isDisabled()}>New event</button>`.trim();
  }
}


