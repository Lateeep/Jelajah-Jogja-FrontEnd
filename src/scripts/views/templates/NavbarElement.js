class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =`
        
        `;
    }
}

customElements.define("navbar-element", Navbar);