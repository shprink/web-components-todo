class MyTodo extends HTMLElement {
    constructor() {
        super();
        // Do not use shadow DOM to avoid problems when testing with selenium
        // this._root = this.attachShadow({ 'mode': 'open' });
        // initial state
        this._list = [
            { text: 'my initial todo', checked: false },
            { text: 'Learn about Web Components', checked: true }
        ];
    }

    connectedCallback() {
        this.innerHTML = `
            <section>
                <todo-input></todo-input>
                <ul id="list-container"></ul>
            </section>
        `;
        this.$input = this.querySelector('todo-input');
        this.$listContainer = this.querySelector('#list-container');
        this.$input.addEventListener('onSubmit', this.addItem.bind(this));
        this._render();
    }

    addItem(e) {
        this._list.push({ text: e.detail, checked: false, });
        this._render();
    }

    removeItem(e) {
        this._list.splice(e.detail, 1);
        this._render();
    }

    toggleItem(e) {
        const item = this._list[e.detail];
        this._list[e.detail] = {
            ...item,
            checked: !item.checked
        };
        this._render();
    }

    disconnectedCallback() { }

    _render() {
        if (!this.$listContainer) return;
        // empty the list
        this.$listContainer.innerHTML = '';
        this._list.forEach((item, index) => {
            let $item = document.createElement('todo-item');
            $item.setAttribute('text', item.text);
            $item.checked = item.checked;
            $item.index = index;
            $item.addEventListener('onRemove', this.removeItem.bind(this));
            $item.addEventListener('onToggle', this.toggleItem.bind(this));
            this.$listContainer.appendChild($item);
        });
    }
}

window.customElements.define('my-todo', MyTodo);