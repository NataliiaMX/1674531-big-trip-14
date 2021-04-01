import {createSiteMenuTemplate} from './view/site-menu.js';
import {createRouteInfoTemplate} from './view/route-info.js';
import {createEventTemplate } from './view/event.js';
import {createSortElement } from './view/sorting.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.trip-main__trip-controls');
const eventElement = document.querySelector('.trip-events');

render(siteHeaderElement, createSiteMenuTemplate(), 'beforeend');
render(siteHeaderElement, createRouteInfoTemplate(), 'beforeend');
render(eventElement, createEventTemplate(), 'beforeend');
render(siteHeaderElement, createSortElement(), 'beforeend');
