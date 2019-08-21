import {randomBoolean,
  randomOptionInteger,
  getOfferArray,
  shuffleElemetsOfArray,
  getRendomItemOfArray} from './util';

const Unit = {
  week: 7,
  day: 24,
  hour: 60,
  minute: 60,
  second: 1000
};

const optionFactor = {
  luggage: 10,
  switchToComfort: 15,
  chooseSeats: 3,
  addMeal: 2,
  rentCar: 50,
  addBreakfast: 10,
  bookTickets: 5,
  lunchInCity: 10,
  orderUber: 3,
};

const createEventMockData = () => ({
  eventType: new Set([
    {
      name: `bus`,
      title: `Bus to Geneva`,
      icon: `bus.png`
    },
    {
      name: `checkIn`,
      title: `Check into hotel`,
      icon: `check-in.png`
    },
    {
      name: `drive`,
      title: `Drive to Los Angeles`,
      icon: `drive.png`
    },
    {
      name: `flight`,
      title: `Flight to Moscow`,
      icon: `flight.png`
    },
    {
      name: `restaurant`,
      title: `Go to restaurant `,
      icon: `restaurant.png`
    },
    {
      name: `ship`,
      title: `Ship to London`,
      icon: `ship.png`
    },
    {
      name: `sightseeing`,
      title: `Go sightseeing at `,
      icon: `sightseeing.png`
    },
    {
      name: `taxi`,
      title: `Taxi to Airport`,
      icon: `taxi.png`
    },
    {
      name: `train`,
      title: `Train to New York`,
      icon: `train.png`
    },
    {
      name: `transport`,
      title: `transport to Los Angeles`,
      icon: `transport.png`
    },
    {
      name: `trip`,
      title: `trip to Saint Peterburg`,
      icon: `trip.png`
    },
  ]),
  eventTime: {
    start: Date.now() + 1 + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second,
    end: Date.now() + 2 + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second,
    get duration() {
      return this.endTime - this.startTime;
    },
  },
  eventPrice: randomOptionInteger(optionFactor.luggage),
  eventOffer: [
    {
      title: `Add luggage + € `,
      price: randomOptionInteger(optionFactor.luggage),
      isActive: randomBoolean(),
    },
    {
      title: `Switch to comfort class  + € `,
      price: randomOptionInteger(optionFactor.switchToComfort),
      isActive: randomBoolean(),
    },
    {
      title: `Choose seats + € `,
      price: randomOptionInteger(optionFactor.chooseSeats),
      isActive: randomBoolean(),
    },
    {
      title: `Add meal €`,
      price: randomOptionInteger(optionFactor.addMeal),
      isActive: randomBoolean(),
    },
    {
      title: `Rent a car + € `,
      price: randomOptionInteger(optionFactor.rentCar),
      isActive: randomBoolean(),
    },
    {
      title: `Add breakfast + € `,
      price: randomOptionInteger(optionFactor.addBreakfast),
      isActive: randomBoolean(),
    },
    {
      title: `Book tickets + € `,
      price: randomOptionInteger(optionFactor.bookTickets),
      isActive: randomBoolean(),
    },
    {
      title: `Lunch in city + € `,
      price: randomOptionInteger(optionFactor.lunchInCity),
      isActive: randomBoolean(),
    },
    {
      title: `Order Uber + € `,
      price: randomOptionInteger(optionFactor.orderUber),
      isActive: randomBoolean(),
    }
  ],
  get offerList() {
    return getOfferArray(shuffleElemetsOfArray([...this.eventOffer]));
  },
  offerDescription: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis
  at fermentum pharetra.`,
  `Aliquam erat volutpat. Nunc fermentum tortor
  ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  `Aliquam id orci ut lectus varius viverra. Nullam nunc ex,
  convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum
  sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus,
  purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue
  convallis suscipit in sed felis.`],
  get offerDescriptionList() {
    return getOfferArray(shuffleElemetsOfArray([...this.offerDescription]));
  },
  cityList: [
    `Moscow`,
    `Delhi`,
    `London`,
    `Saint Peterburg`,
    `New York`,
    `Los Angeles`,
    `Genova`,
  ],
  get city() {
    return getRendomItemOfArray(this.cityList);
  },
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
  ],
  isFavorite: randomBoolean(),
});

export {createEventMockData};
