const makeSortFormTemplate = (sortData) => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${sortData.map((sortItem) => `${sortItem.tag === `span` ?
    `<span class="trip-sort__item  trip-sort__item--${sortItem.name}">${sortItem.label}</span>`.trim()
    :
    `<div class="trip-sort__item  trip-sort__item--${sortItem.name}">
    <input id="sort-${sortItem.name}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortItem.name}"
    ${sortItem.name === `event` ? `checked` : ``}>
    <label class="trip-sort__btn" for="sort-event">${sortItem.label}${sortItem.svg}</label>
  </div>`.trim() }`).join(``)}
  </form>`.trim();

export {makeSortFormTemplate};
