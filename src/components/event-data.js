import {randomNumder,
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
  eventType: {
    bus: {
      title: `Bus to Geneva`,
      icon: `bus.png`
    },
    checkIn: {
      title: `Check into hotel`,
      icon: `check-in.png`
    },
    driveTo: {
      title: `Drive to Los Angeles`,
      icon: `drive.png`
    },
    flightTo: {
      title: `Flight to Moscow`,
      icon: `flight.png`
    },
    restaurant: {
      title: `Go to restaurant `,
      icon: `restaurant.png`
    },
    ship: {
      title: `Ship to London`,
      icon: `ship.png`
    },
    sightseeing: {
      title: `Go sightseeing at `,
      icon: `sightseeing.png`
    },
    taxi: {
      title: `Taxi to Delhi`,
      icon: `taxi.png`
    },
    train: {
      title: `Train to New York`,
      icon: `train.png`
    },
    transport: {
      title: `transport to Los Angeles`,
      icon: `transport.png`
    },
    trip: {
      title: `trip to Saint Peterburg`,
      icon: `trip.png`
    },
  },
  eventTime: {
    startTime: Date.now() + 1 + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second,
    endTime: Date.now() + 2 + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second,
    get duration() {
      return this.endTime - this.startTime;
    },
  },
  eventPrice: randomOptionInteger(optionFactor.luggage),
  eventOffer: [
    {
      title: `Add luggage + € `,
      price: randomOptionInteger(optionFactor.luggage),
      isActive: randomNumder(),
    },
    {
      title: `Switch to comfort class  + € `,
      price: randomOptionInteger(optionFactor.switchToComfort),
      isActive: randomNumder(),
    },
    {
      title: `Choose seats + € `,
      price: randomOptionInteger(optionFactor.chooseSeats),
      isActive: randomNumder(),
    },
    {
      title: `Add meal €`,
      price: randomOptionInteger(optionFactor.addMeal),
      isActive: randomNumder(),
    },
    {
      title: `Rent a car + € `,
      price: randomOptionInteger(optionFactor.rentCar),
      isActive: randomNumder(),
    },
    {
      title: `Add breakfast + € `,
      price: randomOptionInteger(optionFactor.addBreakfast),
      isActive: randomNumder(),
    },
    {
      title: `Book tickets + € `,
      price: randomOptionInteger(optionFactor.bookTickets),
      isActive: randomNumder(),
    },
    {
      title: `Lunch in city + € `,
      price: randomOptionInteger(optionFactor.lunchInCity),
      isActive: randomNumder(),
    },
    {
      title: `Order Uber + € `,
      price: randomOptionInteger(optionFactor.orderUber),
      isActive: randomNumder(),
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
  isFavorite: randomNumder(),
});

export {createEventMockData};
