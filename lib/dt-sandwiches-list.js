import AbstractElement from './dt-abstract-element.js';

class SandwichesList extends AbstractElement {

    connectedCallback() {
        super.connectedCallback();
        this.fetchAndShowSandwiches();
    };

    fetchAndShowSandwiches() {
        fetch('/api/sandwiches.json')
            .then(resp => resp.json())
            .then(sandwichesJson => this.showSandwiches(sandwichesJson));
    };

    showSandwiches(sandwichArray) {
        let ulElement = this.shadowRoot.querySelector('#sandwiches');

        sandwichArray.forEach(sandwich => {
            let liElement = document.createElement('li');
            liElement.innerHTML = sandwich.name;
            ulElement.appendChild(liElement);
        });
    };

    get template() {
        return `
            <ul id="sandwiches"></ul>
        `;
    };
};

window.customElements.define('dt-sandwiches-list', SandwichesList);