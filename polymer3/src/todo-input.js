import {
    Element as PolymerElement
}
from '../node_modules/@polymer/polymer/polymer-element.js';

import '../node_modules/@polymer/iron-form/iron-form.js';
import '../node_modules/@polymer/iron-input/iron-input.js';

import './todo-input-styles.js';

export class TodoInput extends PolymerElement {

    static get is() {
        return 'todo-input';
    }

    static get template() {
        return `
        <style include="todo-input-style-element"></style>
        <iron-form>
            <form id="new-todo-form">
                <iron-input bind-value="{{text}}">
                    <input is="iron-input" id="new-todo" type="text" placeholder="What needs to be done?">
                </iron-input>
            </form>
        </iron-form>
      `
    }

    static get properties() {
        return {
            text: {
                type: String,
                value: ''
            }
        }
    }

    ready() {
        super.ready();
        this.$form = this.shadowRoot.querySelector('iron-form');
        this.$form.addEventListener('iron-form-submit', (e) => {
            if (!this.text) return;
            this.dispatchEvent(new CustomEvent('onSubmit', { detail: this.text }));
            this.text = '';
        });
    }
}

customElements.define(TodoInput.is, TodoInput);