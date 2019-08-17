const Unit = {
  week: 7,
  day: 24,
  hour: 60,
  minute: 60,
  second: 1000
};

const getEventMockData = () => ({
  eventType: [
    {eventTitle: `Taxi to airport`,
      eventIcon: `/img/icons/taxi.png`},
  ],
  eventIcon:[`bus`,
    `check-in`,
    `drive`,
    `flight`,
    `restaurant`,
    `ship`,
    `sightseeing`,
    `taxi`,
    `train`,
    `transport`,
    `trip`
  ],
  eventTitle: [
    `Bus to`,
    `Check into hotel`,
    `Drive to `,
    `Flight to `,
    `Go to restaurant`,
    `Ship to`,
    `Go sightseeing`,
    `Taxi to airport`,
    `Train to`,
    `transport`,
    `trip`
  ],
  eventTime: {
    startTime: Date.now() + 1 + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second,
    endTime: Date.now() + 2 + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second,
    get duration() {
      return this.endTime - this.startTime;
    },
  },
  eventOffer: [{
    offerTitle: `Add luggage + € `,
    offerPrice: Math.round(Math.random * 10),
    isActive: Boolean(Math.round(Math.random())),
  },
  {
    offerTitle: `Switch to comfort + € `,
    offerPrice: Math.round(Math.random * 10),
    isActive: Boolean(Math.round(Math.random())),
  },
  {
    offerTitle: `Rent a car + € `,
    offerPrice: Math.round(Math.random * 50),
    isActive: Boolean(Math.round(Math.random())),
  },
  {
    offerTitle: `Add breakfast + € `,
    offerPrice: Math.round(Math.random * 10),
    isActive: Boolean(Math.round(Math.random())),
  },
  {
    offerTitle: `Book tickets + € `,
    offerPrice: Math.round(Math.random * 5),
    isActive: Boolean(Math.round(Math.random())),
  },
  {
    offerTitle: `Lunch in city + € `,
    offerPrice: Math.round(Math.random * 10),
    isActive: Boolean(Math.round(Math.random())),
  },
  {
    offerTitle: `Order Uber + € `,
    offerPrice: Math.round(Math.random * 3),
    isActive: Boolean(Math.round(Math.random())),
  }
  ],
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
