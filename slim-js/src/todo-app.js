import { Slim } from 'slim-js'
import { tag, template, useShadow } from 'slim-js/Decorators';
import './directives/bind-boolean.js'
import TodoItem from './components/todo-item';
import todoInput from './components/todo-input.js';

@tag('todo-app')
@template(/*html*/`
  <style>${require('./todo-app.css')}</style>
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