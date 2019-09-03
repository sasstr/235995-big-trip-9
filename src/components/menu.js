const makeMenuTemplate = (tripTabs) => `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${tripTabs.map((tab) => `<a class="trip-tabs__btn ${tab.isActive}" href="#">${tab.name}</a>`.trim()).join(``)}
  </nav>`.trim();

export {makeMenuTemplate};
