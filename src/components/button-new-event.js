import {createElement} from './util';

export default class ButtonNewEvent {
  constructor(eventsAmount) {
    this._element = null;
    this._eventsAmount = eventsAmount;
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

  _isDisabled() {
    return this._eventsAmount > 0 ? `` : `disabled`;
  }

  getTemplate() {
    return `<button class="trip-main__event-add-btn  btn  btn--big
    btn--yellow" type="button" ${this._isDisabled()}>New event</button>`.trim();
  }
}


