const makeRouteInformationTemplate = (totalPrice, citiesArray, days) => `<div class="trip-info__main">
  <h1 class="trip-info__title">${citiesArray.length < 3 ?
    `${citiesArray[0]} --- ${citiesArray[citiesArray.length - 1]}` :
    `${citiesArray[0]}&mdash; ... &mdash;${citiesArray[citiesArray.length - 1]}`}</h1>

  <p class="trip-info__dates">${new Date(+days[0][0]).toLocaleString(`en-GB`, {
    month: `short`,
    day: `2-digit`
  })}&nbsp;&mdash;&nbsp;${new Date(+days[days.length - 1][0]).toLocaleString(`en-GB`, {
  day: `2-digit`
})}</p>
  </div>
  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
  </p>`.trim();

export {makeRouteInformationTemplate};
