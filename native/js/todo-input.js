class TodoInput extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ 'mode': 'open' });
    }

    connectedCallback() {
        console.log('TodoInput ADDED TO THE DOM');
        this._root.innerHTML = `
            <style>
                :host {
                    position: relative;
                    font-size: 24px;
                    border-bottom: 1px solid #ededed;
                }
                #new-todo {
                    padding: 16px 16px 16px 60px;
                    border: none;
                    background: rgba(0, 0, 0, 0.003);
                    position: relative;
                    margin: 0;
                    width: 100%;
                    font-size: 24px;
                    font-family: inherit;
                    font-weight: inherit;
                    line-height: 1.4em;
                    border: 0;
                    outline: none;
                    color: inherit;
                    padding: 6px;
                    border: 1px solid #CCC;
                    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
                    box-sizing: border-box;
                }
            </style>
            <form>
                <input id="new-todo" type="text" placeholder="What needs to be done?">
            </form>
        `
        this.$form = this._root.querySelector('form');
        this.$input = this._root.querySelector('input');
        this.$form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('onSubmit', { detail: this.$input.value }));
        });
        this.$input.value = '';
    }

    disconnectedCallback() {
        console.log('TodoInput REMOVED TO THE DOM');
    }
}

window.customElements.define('todo-input', TodoInput);