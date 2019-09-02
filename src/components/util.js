const MIN_OFFER_AMOUNT = 1;
const MAX_OFFER_AMOUNT = 4;

const Unit = {
  week: 7,
  day: 24,
  hour: 60,
  minute: 60,
  second: 1000
};

const RANDOM_TIME = {
  begin: 10000,
  finish: 100000000,
};

/** Функция возращает случайный элемент массива
 *
 * @param {array} array массив
 * @return {mix} случайный элемент массива
 */
const getRendomItemOfArray = (array) => {
  return array[getRandomInteger(0, array.length)];
};

/** Функция возращает случайное логическое значение true или false.
 *  @return {boolean} логическое значение true или false.
 */
const randomBoolean = () => Boolean(Math.round(Math.random()));

/** Функция возращает случайное целое число между min и max - включительно
 *  @param {number} min минимальное значение целое число.
 *  @param {number} max максимальное значение целое число.
 *  @return {number} возращает случайное целое число между min и max - включительно
 */
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/** Функция возращает случайное целое число кратное коэфциенту множителя
 * @param {number} factor коэфциент
 * @return {number} возращает случайное целое число
 */
const randomOptionInteger = (factor) => Math.round(Math.random() * factor);
/** Функция возращает массив тегов длины от 0 до 2 исходного массива.
 *  @param {array} array
 *  @return {array} возращает массив тегов длины от 0 до 2
 */
const getOfferArray = (array) => {
  const description = array.slice(MIN_OFFER_AMOUNT, getRandomInteger(MIN_OFFER_AMOUNT, MAX_OFFER_AMOUNT));
  return description.toString();
};

/** Функция перемешивает элементы массива
 *  @param {array} array
 *  @return {array} возращает массив с перемешаными элементами исходного массива.
 */
const shuffleElemetsOfArray = (array) => {
  let cloneArray = array.slice();
  let j;
  let temp;
  for (let i = 0; i < cloneArray.length; i++) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cloneArray[j];
    cloneArray[j] = cloneArray[i];
    cloneArray[i] = temp;
  }
  return cloneArray;
};

// Функция форматирует дату добавляя ноль в начале
const addFirstZero = (value) => (value < 10 ? `0` : ``) + value;

// Функция возращает случайную дату в переделах недели
const getRandomTime = () => Date.now() + getRandomInteger(RANDOM_TIME.begin, RANDOM_TIME.finish) + Math.floor(Math.random() * Unit.week) * Unit.day * Unit.hour * Unit.minute * Unit.second;

// Функция  и выводит в нужном формате.
const formatTime = (dateInfo) => {
  dateInfo = Math.abs(dateInfo);
  let day = Math.floor((dateInfo / Unit.second / Unit.hour / Unit.minute) / Unit.day);
  let hour = Math.floor(dateInfo / Unit.second / Unit.hour / Unit.minute) % Unit.day;
  let minute = Math.floor(dateInfo / Unit.second / Unit.hour) % Unit.minute;
  day = day >= 1 ? `${addFirstZero(day)}D` : ``;
  hour = hour >= 1 || day >= 1 ? `${hour}H` : ``;
  minute = minute ? `${addFirstZero(minute)}M` : ``;
  return `${day} ${hour} ${minute}`;
};

// Функция возращает объект с данными начала,  конца и продолжительности собития.
const getEventTime = () => {
  const start = getRandomTime();
  const end = start + getRandomInteger(RANDOM_TIME.begin, RANDOM_TIME.finish);
  const duration = end - start;

  return {
    start,
    end,
    duration
  };
};

export {getOfferArray,
  shuffleElemetsOfArray,
  randomBoolean,
  randomOptionInteger,
  getRendomItemOfArray,
  getRandomInteger,
  formatTime,
  getRandomTime,
  getEventTime
};

