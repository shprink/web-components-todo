class TodoItem extends HTMLElement {
    constructor() {
        super();
        // Do not use shadow DOM to avoid problems when testing with selenium
        // this._root = this.attachShadow({ 'mode': 'open' });
        this._checked = false;
        this._text = '';
    }

    connectedCallback() {
        this.innerHTML = `
            <li class="item">
                <input type="checkbox">
                <label></label>
                <button class="destroy">x</button>
            </li>
        `
        this.$item = this.querySelector('.item');
        this.$removeButton = this.querySelector('.destroy');
        this.$text = this.querySelector('label');
        this.$checkbox = this.querySelector('input');
        this.$removeButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('onRemove', { detail: this.index }));
        });
        this.$checkbox.addEventListener('click', (e) => {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('onToggle', { detail: this.index }));
        });
        this._render();
    }

    disconnectedCallback() { }

    static get observedAttributes() {
        return ['text'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this._text = newValue;
    }

    set index(value) {
        this._index = value;
    }

    get index() {
        return this._index;
    }

    set checked(value) {
        this._checked = Boolean(value);
    }

    get checked() {
        return this.hasAttribute('checked');
    }

    _render() {
        if (!this.$item) return;
        this.$text.textContent = this._text;
        if (this._checked) {
            this.$item.classList.add('completed');
            this.$checkbox.setAttribute('checked', '');
        } else {
            this.$item.classList.remove('completed');
            this.$checkbox.removeAttribute('checked');
        }

    }
}

window.customElements.define('todo-item', TodoItem);