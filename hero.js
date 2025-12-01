// hero.js
export class HeroComponent extends HTMLElement {

    connectedCallback() {
        this.data = JSON.parse(this.getAttribute('data') || '{}');
        this.config = JSON.parse(this.getAttribute('config', || '{}');

        this.innerHTML = `            
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.#getConfig('color', 'red')}" />
                <g text="Hello ${this.#getValue('address_fullName', 'John')}" />
            </svg>
        `;
    }

    #getConfig(key, defaultAlternative) {
        return this.data[key] || defaultAlternative;
    }

    #getValue(key, defaultAlternative) {
        return this.data[key] || defaultAlternative;
    }
}
