import {randomBoolean,
  getRandomInteger,
  getOfferArray,
  shuffleElemetsOfArray,
  getRendomItemOfArray} from './util';

const PRICE_RANGE = {
  max: 5,
  min: 250,
};

const Unit = {
  week: 7,
  day: 24,
  hour: 60,
  minute: 60,
  second: 1000
};

const getEventOfferOption = () => [
  `Add luggage + € `,
  `Switch to comfort class  + € `,
  `Choose seats + € `,
  `Add meal + € `,
  `Rent a car + € `,
  `Add breakfast + € `,
  `Book tickets + € `,
  `Lunch in city + € `,
  `Order Uber + € `,
][Math.floor(Math.random() * 9)];

const eventList = [
  {
    title: `Bus to Geneva`,
    icon: `img/icons/bus.png`
  },
  {
    title: `Check into hotel`,
    icon: `img/icons/check-in.png`
  },
  {
    title: `Drive to Los Angeles`,
    icon: `img/icons/drive.png`
  },
  {
    title: `Flight to Moscow`,
    icon: `img/icons/flight.png`
  },
  {
    title: `Go to restaurant `,
    icon: `img/icons/restaurant.png`
  },
  {
    title: `Ship to London`,
    icon: `img/icons/ship.png`
  },
  {
    title: `Go sightseeing at `,
    icon: `img/icons/sightseeing.png`
  },
  {
    title: `Taxi to Airport`,
    icon: `img/icons/taxi.png`
  },
  {
    title: `Train to New York`,
    icon: `img/icons/train.png`
  },
  {
    title: `transport to Los Angeles`,
    icon: `img/icons/transport.png`
  },
  {
    title: `trip to Saint Peterburg`,
    icon: `img/icons/trip.png`
  },
];

const offerDescription = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis   at fermentum pharetra.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
  `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`
];

const eventType = getRendomItemOfArray(eventList);
const eventPrice = getRandomInteger(PRICE_RANGE.min, PRICE_RANGE.max);

const createEventData = () => ({
  eventTypeIcon: eventType.icon,
  eventTypeTitle: eventType.title,
  eventTime: {
    start: Date.now() + 1 + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second,
    end: Date.now() + 2 + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second,
    get duration() {
      return this.endTime - this.startTime;
    }
  },
  eventPrice,
  offerList: [{
    title: getEventOfferOption(),
    offerPrice: getRandomInteger(PRICE_RANGE.min, PRICE_RANGE.max),
    isActive: randomBoolean(),
  },
  {
    title: getEventOfferOption(),
    offerPrice: getRandomInteger(PRICE_RANGE.min, PRICE_RANGE.max),
    isActive: randomBoolean(),
  },
  ].slice(0, getRandomInteger(0, 3)),
  eventCity: [
    `Moscow`,
    `Delhi`,
    `London`,
    `Saint Peterburg`,
    `New York`,
    `Los Angeles`,
    `Genova`,
  ][Math.floor(Math.random() * 7)],
  offerDescription: getOfferArray(shuffleElemetsOfArray([...offerDescription])),
  isFavorite: randomBoolean(),
  sightseeing: [
    `Natural History Museum`,
    `Central aquarium`,
    `Red Fort`,
    `Tower Bridge`,
  ][Math.floor(Math.random() * 4)],
  sightseeingPhoto: [
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
  ].slice(0, getRandomInteger(1, 6)),
});
console.log(createEventData());
export {createEventData};
