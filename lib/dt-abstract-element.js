export default class AbstractElement extends HTMLElement {

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
        throw "template() not yet implemented";
    };
};