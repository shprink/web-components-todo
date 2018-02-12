import { props, withComponent } from '../node_modules/skatejs';
import withLitHtml from '../node_modules/@skatejs/renderer-lit-html';
import { html } from '../node_modules/lit-html';

class MyTodo extends withComponent(withLitHtml()) {
    static get props() {
        return {
            name: props.string
        };
    }
    render({ name }) {
        return html`Hello, ${name}!`;
    }
}

customElements.define('my-todo', MyTodo);