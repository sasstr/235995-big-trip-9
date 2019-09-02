import {formatTime} from './util';

const timeOptions = {
  hour: `2-digit`,
  minute: `numeric`
};

const getEventItem = ({eventType, eventTime, eventPrice, offerList, eventCity, activityEvent}) => `<div class="event">
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="${eventType.icon}" alt="Event type icon">
  </div>
  <h3 class="event__title">${eventType.title} ${activityEvent.some((elem) => elem === eventType.id) ? `` : eventCity}</h3>

  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="${new Date(eventTime.start).toISOString().slice(0, 17)}">${new Date(eventTime.start).toLocaleString(`en-GB`, timeOptions)}</time>
      &mdash;
      <time class="event__end-time" datetime="${new Date(eventTime.start).toISOString().slice(0, 17)}">${new Date(eventTime.end).toLocaleString(`en-GB`, timeOptions)}</time>
    </p>
    <p class="event__duration">${formatTime(eventTime.duration)}</p>
  </div>

  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${eventPrice}</span>
  </p>

  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
      ${offerList.map((offer) =>
    `<li class="event__offer">
      <span class="event__offer-title">${offer.info.title === undefined ? `` : `${offer.info.title} + € `}</span>
      <span class="event__offer-price">
      ${offer.offerPrice === undefined ? `` : offer.offerPrice}</span>
      </li>`.trim()).join(``)}
  </ul>

  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</div>`;

export {getEventItem};
