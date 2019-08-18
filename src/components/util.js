const MIN_TAGS_AMOUNT = 0;
const MAX_TAGS_AMOUNT = 2;

/** Функция возращает случайное логическое значение true или false.
 *  @return {boolean} логическое значение true или false.
 */
const randomNumder = () => Boolean(Math.round(Math.random()));

/** Функция возращает случайное целое число между min и max - включительно
 *  @param {number} min минимальное значение целое число.
 *  @param {number} max максимальное значение целое число.
 *  @return {number} возращает случайное целое число между min и max - включительно
 */
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/** Функция возращает случайное целое число кратное коэфциенту множителя
 * @param {number} factor коэфциент
 * @return {number} возращает случайное целое число
 */
const randomOptionInteger = (factor) => Math.round(Math.random * factor);

/** Функция возращает массив тегов длины от 0 до 2 исходного массива.
 *  @param {array} array
 *  @return {array} возращает массив тегов длины от 0 до 2
 */
const getTagsArray = (array) => {
  return array.slice(MIN_TAGS_AMOUNT, getRandomInteger(MIN_TAGS_AMOUNT, MAX_TAGS_AMOUNT));
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

export {getTagsArray};
export {shuffleElemetsOfArray};
export {randomNumder};
export {randomOptionInteger};
