import EventItem from '../components/event-item';

export default class EventController {
  constructor(event, onDataChange, onChangeView) {
    this._event = event;
    this._onDataChange = onDataChange;
    this._onChangeView = onChangeView;
  }

  create() {
    return new EventItem(this._event, this._onEventChange);
  }

}
