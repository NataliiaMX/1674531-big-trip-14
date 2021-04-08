import {createSiteMenuTemplate} from './view/site-menu.js';
import {createRouteInfoTemplate} from './view/route-info.js';
import {createTripCostTemplate} from './view/trip-cost.js';
import {createEventTemplate } from './view/event.js';
import {createFilterTemplate} from './view/filter.js';
import {createTripSortTemplate} from './view/sort.js';
import {createEventAddTamplat} from './view/create-event.js';

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.trip-main__trip-controls');
const eventElement = document.querySelector('.trip-events');
const tripMainElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');

for (let i = 0; i < 4; i++) {
  render(eventElement, createEventTemplate());
}


render(siteHeaderElement, createRouteInfoTemplate());
render(siteHeaderElement, createSiteMenuTemplate());
render(siteHeaderElement, createFilterTemplate());
render(tripMainElement, createTripCostTemplate());
render(tripEventsElement, createTripSortTemplate(), 'afterbegin');
render(siteHeaderElement, createEventAddTamplat(), 'afterbegin');

