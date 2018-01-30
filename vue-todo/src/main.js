// main.js
const Vue = require("vue")

Vue.component("my-todo", require("./my-todo.vue"));
Vue.component("todo-input", require("./todo-input.vue"));
Vue.component("todo-item", require("./todo-item.vue"));

new Vue({ el: "#mount", render: r => r("my-todo") })