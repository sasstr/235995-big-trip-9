import {randomBoolean,
  getRendomItemOfArray,
  getRandomInteger,
  getOfferArray,
  shuffleElemetsOfArray,
  getRandomTime} from './util';

const PRICE_RANGE = {
  max: 5,
  min: 250,
};

const RANDOM_TIME = {
  beginStart: 500990,
  finishStart: 700000000,
  beginEnd: 500990,
  finishEnd: 700000000,
};

const randomTime = getRandomTime();
const getStartHoursAndMinutes = (diff = 0) => new Date(randomTime + diff);
const getStartTime = () => getStartHoursAndMinutes(getRandomInteger(RANDOM_TIME.beginStart, RANDOM_TIME.finishStart));
const getEndTime = () => getStartHoursAndMinutes(getRandomInteger(RANDOM_TIME.beginEnd, RANDOM_TIME.finishEnd));

const OfferOptionList = [
  {
    title: `Add luggage`,
    id: `luggage`,
  },
  {
    title: `Switch to comfort class`,
    id: `comfort`,
  },
  {
    title: `Choose seats`,
    id: `seats`,
  },
  {
    title: `Add meal`,
    id: `meal`,
  },
  {
    title: `Rent a car`,
    id: `car`,
  },
  {
    title: `Add breakfast`,
    id: `breakfast`,
  },
  {
    title: `Book tickets`,
    id: `tickets`,
  },
  {
    title: `Lunch in city`,
    id: `lunch`,
  },
  {
    title: `Order Uber`,
    id: `taxi`,
  },
];

const offerDescriptions = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis   at fermentum pharetra.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
  `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`
];

const eventsTypes = [
  {
    id: `bus`,
    title: `Bus to `,
    icon: `img/icons/bus.png`
  },
  {
    id: `Check-in`,
    title: `Check into hotel`,
    icon: `img/icons/check-in.png`
  },
  {
    id: `drive`,
    title: `Drive to `,
    icon: `img/icons/drive.png`
  },
  {
    id: `flight`,
    title: `Flight to `,
    icon: `img/icons/flight.png`
  },
  {
    id: `Restaurant`,
    title: `Go to restaurant `,
    icon: `img/icons/restaurant.png`
  },
  {
    id: `ship`,
    title: `Ship to `,
    icon: `img/icons/ship.png`
  },
  {
    id: `sightseeing`,
    title: `Sightseeing at `,
    icon: `img/icons/sightseeing.png`
  },
  {
    id: `taxi`,
    title: `Taxi to Airport`,
    icon: `img/icons/taxi.png`
  },
  {
    id: `train`,
    title: `Train to `,
    icon: `img/icons/train.png`
  },
  {
    id: `Transport`,
    title: `Transport to `,
    icon: `img/icons/transport.png`
  },
  {
    id: `Trip`,
    title: `Trip to `,
    icon: `img/icons/trip.png`
  },
];

const eventCities = [
  `Moscow`,
  `Delhi`,
  `London`,
  `Saint Peterburg`,
  `New York`,
  `Los Angeles`,
  `Genova`,
];

const typesSightseeing = [
  `Natural History Museum`,
  `Central aquarium`,
  `Red Fort`,
  `Tower Bridge`,
];

const getTripTabs = () => [
  {
    name: `Table`,
    isActive: `trip-tabs__btn--active`,
  },
  {
    name: `Stats`,
    isActive: ``,
  }
];

// Передает данные для шаблона сортировки
const getSortItems = () => [
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

// Генерирует моковые данные для собития event
const createEvent = () => ({
  eventType: getRendomItemOfArray(eventsTypes),
  eventTime: {
    start: Date.parse(getStartTime()),
    end: Date.parse(getEndTime()),
    get duration() {
      return this.end - this.start;
    }
  },
  eventPrice: getRandomInteger(PRICE_RANGE.min, PRICE_RANGE.max),
  offerList: [{
    info: getRendomItemOfArray(OfferOptionList),
    offerPrice: getRandomInteger(PRICE_RANGE.min, PRICE_RANGE.max),
    isActive: randomBoolean(),
  },
  {
    info: getRendomItemOfArray(OfferOptionList),
    offerPrice: getRandomInteger(PRICE_RANGE.min, PRICE_RANGE.max),
    isActive: randomBoolean(),
  },
  ].slice(0, getRandomInteger(0, 3)),
  eventCity: getRendomItemOfArray(eventCities),
  offerDescription: getOfferArray(shuffleElemetsOfArray([...offerDescriptions])),
  isFavorite: randomBoolean(),
  sightseeing: getRendomItemOfArray(typesSightseeing),
  sightseeingPhoto: [
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
  ].slice(0, getRandomInteger(1, 6)),
  transferEvent: [`Bus`, `Drive`, `Flight`, `Ship`, `Taxi`, `Train`, `Transport`],
  activityEvent: [`Check-in`, `Restaurant`, `Sightseeing`],
});

export {createEvent, getSortItems, getTripTabs};
