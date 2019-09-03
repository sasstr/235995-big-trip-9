const makeFiltersTemplate = (filtres) => `<h2 class="visually-hidden">Filter events</h2>
  <form class="trip-filters" action="#" method="get">
    ${filtres.map((filter) => `<div class="trip-filters__filter">
      <input id="filter-${filter.id}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.id}" checked>
      <label class="trip-filters__filter-label" for="filter-${filter.id}">${filter.title}</label>
    </div>`).join(``)}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`.trim();

export {makeFiltersTemplate};
