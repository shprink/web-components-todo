// main.js
const Vue = require("vue")
const VCE = require("vue-custom-element")

Vue.use(VCE)

Vue.customElement("todo-item", require("./todo-item.vue"))
Vue.customElement("todo-input", require("./todo-input.vue"))
Vue.customElement("my-todo", require("./my-todo.vue"))

// new Vue({ el: "#mount", render: r => r("my-todo") })