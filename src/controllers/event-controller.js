import EventItem from '../components/event-item';

export default class EventController {
  constructor(event, onEventChange, onChangeView) {
    this._event = event;
    this._onEventChange = onEventChange;
    this._onChangeView = onChangeView;
  }

  create() {
    return new EventItem(this._event, this._onEventChange);
  }

}
