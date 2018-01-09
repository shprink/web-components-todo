class MyTodo extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ 'mode': 'open' });
        // initial state
        this._list = [
            { text: 'my initial todo', checked: false },
            { text: 'Learn about Web Components', checked: true }
        ];
    }

    connectedCallback() {
        this._root.innerHTML = `
            <style>
                h1 {
                    font-size: 100px;
                    font-weight: 100;
                    text-align: center;
                    color: rgba(175, 47, 47, 0.15);
                }

                section {
                    background: #fff;
                    margin: 130px 0 40px 0;
                    position: relative;
                    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
                }

                #list-container {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    border-top: 1px solid #e6e6e6;
                }
            </style>
            <h1>Todos WC</h1>
            <section>
                <todo-input></todo-input>
                <ul id="list-container"></ul>
            </section>
        `;
        this.$input = this._root.querySelector('todo-input');
        this.$listContainer = this._root.querySelector('#list-container');
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