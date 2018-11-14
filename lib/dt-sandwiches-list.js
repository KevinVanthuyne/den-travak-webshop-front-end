class SandwichesList extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        this.initShadowDom();
    };

    initShadowDom() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = this.template;
    };

    get template() {
        return `
            <ul>
                <li>De lijst</li>
            </ul>
        `;
    };
};

window.customElements.define('dt-sandwiches-list', SandwichesList);