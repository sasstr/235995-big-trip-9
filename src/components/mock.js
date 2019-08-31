const days = [
  {
    eventTime: new Date(2019, 8, 3, 3, 5, 33),
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
    eventTime: new Date(2019, 8, 3, 15, 36, 35),
    comment: `3 сентября 2019`,
  }
];

export let someDate = new Date(2019, 8, 3, 3, 55, 63);
someDate = Date.parse(someDate.toISOString().slice(0, 10).split(`-`).join(`, `));

// функция возращает таймстэмп без часов минут и секунд с милисекундами
export const getEventDayDate = (date) => Date.parse(date.toISOString()
                                                        .slice(0, 10)
                                                        .split(`-`)
                                                        .join(`, `));

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
sortTripDays(days);

const daysEvt = new Set(days.slice()
                          .map((day) => getEventDayDate(day.eventTime)))
                          .entries();

/* const unsortedDays = eventsDataArray.reduce((acc, it) =>{
  const dt = getEventDayDate(it.eventTime);
  if (!acc[dt]) {
    acc[dt] = [];
  }
  acc[dt].push(it);
  return acc;
}, {});

const daysSorted = Object.entries(unsortedDays)
                          .sort((a, b) => {
                            return a[0] - b[0];
                          }); */
/* daysEvt = Object.assign({}, daysEvt); */
/* Days [{day1: [day1-evt1, day1-evt2, day1-evt3]},
          {day2: [day2-evt1, day2-evt2, day2-evt3]}
 ]
 .sort((a, b) => a - b); */

export {daysEvt};
