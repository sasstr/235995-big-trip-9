export const days = [
  {
    eventTime: new Date(2019, 8, 3, 2, 45, 33),
    comment: `3 сентября 2019`,
  },
  {
    eventTime: new Date(2019, 7, 30, 7, 9, 33),
    comment: `30 августа 2019`,
  },
  {
    eventTime: new Date(2019, 7, 31, 11, 23, 33),
    comment: `31 августа 2019`,
  },
  {
    eventTime: new Date(2019, 8, 1, 9, 17, 33),
    comment: `1 сентября 2019`,
  },
  {
    eventTime: new Date(2019, 8, 3, 13, 35, 33),
    comment: `3 сентября 2019`,
  }
];

export let someDate = new Date(2019, 8, 3, 3, 55, 63);
someDate = Date.parse(someDate.toISOString().slice(0, 10).split(`-`).join(`, `));

// функция возращает таймстэмп без часов минут и секунд с милисекундами
export const getEventDayDate = (date) => Date.parse(date.toISOString().slice(0, 10).split(`-`).join(`, `));

// функция сортирует массив объектов по дате в поле eventTime по возрастанию.
export const sortTripDays = (daysArray) => {
  daysArray.sort((time1, time2) => time1.eventTime - time2.eventTime);
};

export const makeTripDaysArray = (daysInfo) => {
  daysInfo.map((day) => {
    const tripDays = [];
    tripDays.push(getEventDayDate(day.eventTime));
  });
};
