import { props, withComponent } from 'skatejs';
import withPreact from '@skatejs/renderer-preact';
import { h } from 'preact';

class MyTodo extends withComponent(withPreact()) {
    static get props() {
        return {
            name: props.string
        };
    }
    render({ name }) {
        return <span>Hello, {name}!</span>;
    }
}

customElements.define('my-todo', MyTodo);