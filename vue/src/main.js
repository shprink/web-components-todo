import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';

Vue.config.productionTip = false

import MyTodo from './components/my-todo.vue';
import TodoInput from './components/todo-input.vue';
import TodoItem from './components/todo-item.vue';

window.customElements.define('vue-my-todo', wrap(Vue, MyTodo));
window.customElements.define('vue-todo-input', wrap(Vue, TodoInput));
window.customElements.define('vue-todo-item', wrap(Vue, TodoItem));