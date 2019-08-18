import {randomNumder} from './util';
import {randomOptionInteger} from './util';

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
  choosSeats: 3,
  addMeal: 2,
  rentCar: 50,
  addBreakfast: 10,
  bookTickets: 5,
  lunchInCity: 10,
  orderUber: 3,
};

const getEventMockData = () => ({
  eventType: [
    {
      eventTitle: `Bus to `,
      eventIcon: `/img/icons/bus.png`
    },
    {
      eventTitle: `Check into hotel`,
      eventIcon: `/img/icons/check-in.png`
    },
    {
      eventTitle: `Drive to `,
      eventIcon: `/img/icons/drive.png`
    },
    {
      eventTitle: `Flight to  `,
      eventIcon: `/img/icons/flight.png`
    },
    {
      eventTitle: `Go to restaurant `,
      eventIcon: `/img/icons/restaurant.png`
    },
    {
      eventTitle: `Ship to `,
      eventIcon: `/img/icons/ship.png`
    },
    {
      eventTitle: `Go sightseeing `,
      eventIcon: `/img/icons/sightseeing.png`
    },
    {
      eventTitle: `Taxi to `,
      eventIcon: `/img/icons/taxi.png`
    },
    {
      eventTitle: `Train to  `,
      eventIcon: `/img/icons/train.png`
    },
    {
      eventTitle: `transport  `,
      eventIcon: `/img/icons/transport.png`
    },
    {
      eventTitle: `trip  `,
      eventIcon: `/img/icons/trip.png`
    },
  ],
  eventTime: {
    startTime: Date.now() + 1 + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second,
    endTime: Date.now() + 2 + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second,
    get duration() {
      return this.endTime - this.startTime;
    },
  },
  eventOffer: [
    {
      offerTitle: `Add luggage + € `,
      offerPrice: randomOptionInteger(optionFactor.luggage),
      isActive: randomNumder(),
    },
    {
      offerTitle: `Switch to comfort class  + € `,
      offerPrice: randomOptionInteger(optionFactor.switchToComfort),
      isActive: randomNumder(),
    },
    {
      offerTitle: `Choose seats + € `,
      offerPrice: randomOptionInteger(optionFactor.choosSeats),
      isActive: randomNumder(),
    },
    {
      offerTitle: `Add meal €`,
      offerPrice: randomOptionInteger(optionFactor.addMeal),
      isActive: randomNumder(),
    },
    {
      offerTitle: `Rent a car + € `,
      offerPrice: randomOptionInteger(optionFactor.rentCar),
      isActive: randomNumder(),
    },
    {
      offerTitle: `Add breakfast + € `,
      offerPrice: randomOptionInteger(optionFactor.addBreakfast),
      isActive: randomNumder(),
    },
    {
      offerTitle: `Book tickets + € `,
      offerPrice: randomOptionInteger(optionFactor.bookTickets),
      isActive: randomNumder(),
    },
    {
      offerTitle: `Lunch in city + € `,
      offerPrice: randomOptionInteger(optionFactor.lunchInCity),
      isActive: randomNumder(),
    },
    {
      offerTitle: `Order Uber + € `,
      offerPrice: randomOptionInteger(optionFactor.orderUber),
      isActive: randomNumder(),
    }
  ],
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
  cityList: [
    `Moscow`,
    `Delhi`,
    `London`,
    `Saint Peterburg`,
    `New York`,
    `Los Angeles`,
    `Genova`,
  ],
  sightseeing: [
    `Natural History Museum`,
    `Central aquarium`,
    `Red Fort`,
    `Tower Bridge`,
  ],
});

export {getEventMockData};
