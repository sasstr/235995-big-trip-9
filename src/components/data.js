import {randomBoolean,
  getRandomInteger,
  getOfferArray,
  shuffleElemetsOfArray} from './util';

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
const getStartTime = () => getStartHoursAndMinutes(getRandomInteger(500990, 7000000));
const getEndTime = () =>getStartHoursAndMinutes(getRandomInteger(500000, 400000000));
const addFirstZero = (value) => (value < 10 ? `0` : ``) + value;
// const getDate = (date) => `${date.getHours()}${`:`}${(addFirstZero(date.getMinutes()))}`;
console.log(randomTime);

const getMockTime = () => {
  const start = getStartTime();
  const end = getEndTime();
  const duration = () => {
    const diff = Math.abs(end - start);
    let day = Math.floor(diff / Unit.second / Unit.hour / Unit.minute) / Unit.day;
    let hour = Math.floor(diff / Unit.second / Unit.hour / Unit.minute) % Unit.day;
    let minute = Math.floor(diff / Unit.second / Unit.hour) % Unit.minute;
    day = day >= 1 ? `${addFirstZero(day)}D` : ``;
    hour = hour >= 1 ? `${hour}H` : ``;
    minute = minute ? `${addFirstZero(minute)}M` : ``;
    return `${day} ${hour} ${minute}`;
  };
  return {
    start,
    end,
    duration: duration(),
  };
};

const getEventOfferOption = () => [
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
][Math.floor(Math.random() * 9)];

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

const createEventData = () => ({
  eventType: [
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
  ][Math.floor(Math.random() * 11)],
  eventTime: {
    start: Date.parse(getStartTime()),
    end: Date.parse(getEndTime()),
    get duration() {
      const diff = Math.abs(this.end - this.start);
      let day = Math.floor(diff / Unit.second / Unit.hour / Unit.minute) / Unit.day;
      let hour = Math.floor(diff / Unit.second / Unit.hour / Unit.minute) % Unit.day;
      let minute = Math.floor(diff / Unit.second / Unit.hour) % Unit.minute;
      day = day >= 1 ? `${addFirstZero(Math.floor(day))}D` : ``;
      hour = hour >= 1 ? `${addFirstZero(hour)}H` : ``;
      minute = minute ? `${addFirstZero(minute)}M` : ``;
      return `${day} ${hour} ${minute}`;
    }
  },
  eventPrice: getRandomInteger(PRICE_RANGE.min, PRICE_RANGE.max),
  offerList: [{
    info: getEventOfferOption(),
    offerPrice: getRandomInteger(PRICE_RANGE.min, PRICE_RANGE.max),
    isActive: randomBoolean(),
  },
  {
    info: getEventOfferOption(),
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
  offerDescription: getOfferArray(shuffleElemetsOfArray([...offerDescriptions])),
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
  transferEvent: [`Bus`, `Drive`, `Flight`, `Ship`, `Taxi`, `Train`, `Transport`],
  activityEvent: [`Check-in`, `Restaurant`, `Sightseeing`],
});

export {createEventData};
