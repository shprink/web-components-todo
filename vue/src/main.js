// import Vue from 'vue'
// import App from './App.vue'

// new Vue({
//   render: h => h(App)
// }).$mount('#app')
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';

Vue.config.productionTip = false

import MyTodo from './components/my-todo.vue';
import TodoInput from './components/todo-input.vue';
import TodoItem from './components/todo-item.vue';

window.customElements.define('my-todo', wrap(Vue, MyTodo));
window.customElements.define('todo-input', wrap(Vue, TodoInput));
window.customElements.define('todo-item', wrap(Vue, TodoItem));