import {
  Element as PolymerElement
}
from '../node_modules/@polymer/polymer/polymer-element.js';

import './my-todo-styles.js';

export class MyTodo extends PolymerElement {

  static get is() { return 'my-todo'; }

  static get template() {
    return `
      <style include="my-todo-style-element"></style>
      <h1>Todos Polymer 3</h1>
      <section>
        <todo-input></todo-input>
        <ul id="list-container">
          <template is="dom-repeat" items="[[list]]">
            <todo-item text="[[item.text]]" checked="[[item.checked]]" index="[[index]]" on-remove="removeItem" on-toggle="toggleItem"></todo-item>
          </template>
        </ul>
      </section>
    `
  }

  static get properties() {
    return {
      list: {
        type: Array,
        value: () => [
          { text: 'my initial todo', checked: false },
          { text: 'Learn about Web Components', checked: true }
        ]
      }
    }
  }

  ready() {
    super.ready();
    this.$input = this.shadowRoot.querySelector('todo-input');
    this.$input.addEventListener('onSubmit', this.addItem.bind(this));
  }

  addItem(e) {
    this.push('list', { text: e.detail, checked: false });
  }

  removeItem(e) {
    this.splice('list', e.detail, 1);
  }

  toggleItem(e) {
    this.set('list.'+e.detail, { ...this.list[e.detail], checked: !this.list[e.detail].checked });
  }
}

customElements.define(MyTodo.is, MyTodo);
