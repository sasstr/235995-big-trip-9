const sortItems = [
  {
    tag: `span`,
    name: `day`,
    label: `Day`,
    svg: ``,
  },
  {
    tag: `div`,
    name: `event`,
    label: `Event`,
    svg: ``,
  },
  {
    tag: `div`,
    name: `time`,
    label: `Time`,
    svg: `<svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
      <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
    </svg>`,
  },
  {
    tag: `div`,
    name: `price`,
    label: `Price`,
    svg: `<svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
      <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
    </svg>`,
  },
  {
    tag: `span`,
    name: `offers`,
    label: `Offers`,
    svg: ``,
  },
];

const makeSortFormTemplate = () => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${sortItems.map((sortItem) => `${sortItem.tag === `span` ?
    `<span class="trip-sort__item  trip-sort__item--${sortItem.name}">${sortItem.label}</span>`.trim()
    :
    `<div class="trip-sort__item  trip-sort__item--${sortItem.name}">
    <input id="sort-${sortItem.name}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortItem.name}"
    ${sortItem.name === `event` ? `checked` : ``}>
    <label class="trip-sort__btn" for="sort-event">${sortItem.label}${sortItem.svg}</label>
  </div>`.trim() }`).join(``)}
  </form>`.trim();

export {makeSortFormTemplate};
