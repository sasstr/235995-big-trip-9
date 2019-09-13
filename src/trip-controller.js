import {getEventDayDate} from './components/util';
// Перенесите из main.js в метод init всю логику,
// по рендерингу точек маршрута,
// а так же навешиванию на них обработчиков.
export class TripController {
  constructor(events, container) {
    this._container = container;
    this._events = events.slice();
  }
  // Функция считает общую сумму оферов и ивентов.
  getTotalPrice() {
    const currentArray = [];
    this._events.map((event) => {
      if (event.offerList.length > 0) {
        event.offerList.forEach((offer) => currentArray.push(offer.offerPrice));
      }
    });
    const eventsPrice = this._events.map((it) => it.eventPrice).reduce((sum, current) => sum + current, 0);
    return currentArray.reduce((sum, curr) => sum + curr, 0) + eventsPrice;
  }
  // Получаем массив отсортированных дней с событиями.
  getSortedEvents() {
    const events = this._events.slice();
    const sortedEventsData = events.sort((a, b) => a.eventTime.start - b.eventTime.start);
    const unsortedDays = sortedEventsData.reduce((acc, it) => {
      const dt = getEventDayDate(it.eventTime.start);
      if (!acc[dt]) {
        acc[dt] = [];
      }
      acc[dt].push(it);
      return acc;
    }, {});
    return Object.entries(unsortedDays)
    .sort((a, b) => {
      return a[0] - b[0];
    });
  }


  init() {

  }
}
