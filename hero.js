// hero.js
export class HeroComponent extends HTMLElement {

    connectedCallback() {
        this.data = JSON.parse(this.getAttribute('data') || '{}');

        this.innerHTML = `            
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.#getValue('color', 'red')}" />
            </svg>
        `;
    }

    #getValue(key, defaultAlternative) {
        return this.data[key] || defaultAlternative;
    }
}
