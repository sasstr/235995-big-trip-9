const makeDaysTemplate = (daysSorted) => `<ul class="trip-days">
${daysSorted.map((day, index) => `<li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${index + 1}</span>
      <time class="day__date" datetime="2019-03-18">${new Date(day[index]).toLocaleString(`en-GB`, {
    month: `short`,
    day: `2-digit`
  })} MAR 18</time>
    </div>
    <ul class="trip-events__list">

    </ul>
  </li>`.trim()
};
