import { JSDOM } from 'jsdom';

import data from './data.json' with { type: 'json' };

// --- Setup jsdom to simulate a browser ---
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.customElements = dom.window.customElements;

// Define component
const { HeroComponent } = await import('./hero.js');
customElements.define('hero-component', HeroComponent);

// Attach component and set data
const component = document.createElement('hero-component');
component.setAttribute('data', JSON.stringify(data));
component.setAttribute('config', JSON.stringify({}));
document.body.appendChild(component);
const output = component.innerHTML;

// --- Output the static HTML ---
// console.log(document.body.innerHTML);
console.log('----------------OUTPUT----------------');
console.log(output);
// console.log('----------------TRIMMED----------------');
// console.log(component.innerHTML.replace(/\s+/g, ' ').trim());
