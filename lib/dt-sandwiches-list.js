class SandwichesList extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        this.initShadowDom();
        this.fetchAndShowSandwiches();
    };

    fetchAndShowSandwiches() {
        fetch('/api/sandwiches.json')
            .then(resp => resp.json())
            .then(sandwichesAsJson => this.showSandwiches(sandwichesAsJson));
    }

    showSandwiches(sandwichArray) {
        let ulEl = this.shadowRoot.querySelector('#sandwiches');
        sandwichArray.forEach(sandwich => {
            let liEl = document.createElement('li');
            liEl.innerHTML = sandwich.name;
            ulEl.appendChild(liEl);
        });
    }

    initShadowDom() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = this.template;
    };

    get template() {
        return `
            <ul id="sandwiches"></ul>
        `;
    };
};

window.customElements.define('dt-sandwiches-list', SandwichesList);