import {getEditCard} from './edit-event';
import {getEventItem} from './event-item';

const makeDaysTemplate = (days) => `<ul class="trip-days">
${ days.map((day, index) => `<li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${index + 1}</span>
      <time class="day__date" datetime="${new Date(+day[0]).toISOString().slice(0, 10)}">
      ${new Date(+day[0]).toLocaleString(`en-GB`, {
    month: `short`,
    day: `2-digit`
  })}</time>
    </div>
    <ul class="trip-events__list">
      ${day[index] === days[0][0] ? getEditCard(day[1][index]) : ``}
      ${day[1].map((event) => getEventItem(event))}
    </ul>
    </li>`)}
  </ul>`.trim();

export {makeDaysTemplate};
