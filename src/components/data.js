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

const randomTime = Date.now() + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second;
const getStartHoursAndMinutes = (diff = 0) => new Date(randomTime + diff);
const getStartTime = () => getStartHoursAndMinutes();
const getEndTime = () => getStartHoursAndMinutes(getRandomInteger(5000777, 10345444));

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
    id: `bus`,
    title: `Bus to `,
    icon: `img/icons/bus.png`
  },
  {
    id: `check-in`,
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
    id: `restaurant`,
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
    title: `Go sightseeing at `,
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
    id: `transport`,
    title: `transport to `,
    icon: `img/icons/transport.png`
  },
  {
    id: `trip`,
    title: `trip to `,
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
  eventTypeId: eventType.id,
  eventTypeTitle: eventType.title,
  eventTime: {
    start: getStartTime(),
    end: getEndTime(),
    get duration() {
      const diff = Math.abs(this.end - this.start);
      let day = Math.floor(diff / Unit.second / Unit.hour / Unit.minute) / Unit.day;
      let hour = Math.floor(diff / Unit.second / Unit.hour / Unit.minute) % Unit.day;
      let minute = Math.floor(diff / Unit.second / Unit.hour) % Unit.minute;
      day = day >= 1 ? `${day}D` : ``;
      hour = hour >= 1 ? `${hour}H` : ``;
      minute = minute ? `${minute}M` : ``;
      return `${day} ${hour} ${minute}`;
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
export {createEventData};
