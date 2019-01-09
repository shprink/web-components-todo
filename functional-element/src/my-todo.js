import { customElement, html } from 'functional-element';
import './todo-input.js';
import './todo-item.js';

customElement('my-todo', ({ constructing, props, update }) => {
    if (constructing) {
        return {
            list: [
                { text: 'my initial todo', checked: false },
                { text: 'Learn about Web Components', checked: true },
            ]
        };
    }

    return html`
        <style>
            h1 {
                font-size: 70px;
                line-height: 70px;
                font-weight: 100;
                text-align: center;
                color: rgba(175, 47, 47, 0.15);
            }

            section {
                background: #fff;
                margin: 30px 0 40px 0;
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

        <h1>Todos Functional Element</h1>

        <section>
            <todo-input @submit=${(e) => update(addItem(props.list, e.detail))}></todo-input>
            ${props.list.map((item, index) => html`
                <todo-item
                    .text=${item.text}
                    .checked=${item.checked}
                    .index=${index}
                    @remove=${(e) => update(removeItem(props.list, e.detail))}
                    @toggle=${(e) => update(toggleItem(props.list, e.detail))}
                ></todo-item>`)}
            <ul id="list-container"></ul>
        </section>
    `;
});

function addItem(list, text) {
    return {
        list: [...list, { text, checked: false, }]
    };
}

function removeItem(list, index) {
    return {
        list: [...list.slice(0, index), ...list.slice(index + 1)]
    };
}

function toggleItem(list, index) {
    const originalList = [...list];
    const item = originalList[index];
    originalList[index] = Object.assign({}, item, { checked: !item.checked });

    return {
        list: originalList
    };
}