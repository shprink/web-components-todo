import { Slim } from 'slim-js'
import 'slim-js/directives/repeat';
import { tag, template, useShadow } from 'slim-js/Decorators';
import './components/todo-item';
import './components/todo-input.js';

@tag('todo-app')
@template(/*html*/`
<style>
:host {
  display: block;
}

h1 {
  font-size: 100px;
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
  <div>
    <h1>Todos slim-js</h1>
    <section>
      <todo-input on-new-item="onNewItem"></todo-input>
      <ul id="list-container">
        <todo-item
          s:repeat="list"
          on-remove="onRemoveItem"></todo-item>
      </ul>
    </section>
  </div>
`)
@useShadow(true)
export default class TodoApp extends Slim {

  constructor () {
    super()
    this.list = [
      { text: 'my initial todo', checked: false },
      { text: 'Learn about Web Components', checked: true }
    ]
  }

  onNewItem (text) {
    this.list = [...this.list, {
      text,
      checked: false
    }]
  }

  onRemoveItem (item) {
    this.list = this.list.filter(existingItem => existingItem !== item)
  }

}