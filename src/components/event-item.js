import {getEditCard} from './edit-event';
import {createEventData} from '../components/data';

const getEventItem = ({eventTypeIcon, eventTypeTitle, eventTime, eventPrice, offerList, eventCity}) => `<div class="event">
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="${eventTypeIcon}" alt="Event type icon">
  </div>
  <h3 class="event__title">${eventTypeTitle}</h3>

  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="2019-03-18T10:30">${eventTime.start}</time>
      &mdash;
      <time class="event__end-time" datetime="2019-03-18T11:00">${eventTime.end}</time>
    </p>
    <p class="event__duration">1H 30M</p>
  </div>

  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${eventPrice}</span>
  </p>

  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
    <li class="event__offer">
      <span class="event__offer-title">
      ${offerList[0].title === undefined ? `` : offerList[0].title}</span>
      ${offerList.title === undefined ? `` : `&plus; &euro;&nbsp;`}<span class="event__offer-price">
      ${offerList[0].offerPrice === undefined ? `` : offerList[0].offerPrice}</span>
      </li>
  </ul>

  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</div>`;

const makeEventTemplate = (it, index) => `<li class="trip-days__item  day">
  <div class="day__info">
    <span class="day__counter">1</span>
    <time class="day__date" datetime="2019-03-18">MAR 18</time>
  </div>

  <ul class="trip-events__list">
    <li class="trip-events__item">
      ${getEventItem(createEventData())}
    </li>

    <li class="trip-events__item">
      ${index === 0 ? getEditCard() : getEventItem(createEventData())}
    </li>

    <li class="trip-events__item">
      ${getEventItem(createEventData())}
    </li>
  </ul>
</li>`.trim();

export {makeEventTemplate};
export {getEventItem};
