import { tag, template, useShadow } from "slim-js/Decorators";
import { Slim } from "slim-js";

@tag('todo-item')
@template(/*html*/`
<style>
  ${require('./todo-item.css')}
</style>
  <li bind:class="getClass(data.checked)">
    <input s:id="checkbox"
      bind.boolean:checked="data.checked"
      type="checkbox" change="onChecked" />
    <label>{{data.text}}</label>
    <button click="onRemove">x</button>
  </li>
`)
@useShadow(true)
export default class TodoItem extends Slim {

  onChecked () {
    this.checked = this.data.checked = this.checkbox.checked
    this.commit()
  }

  getClass (checked) {
    return checked ? 'completed' : ''
  }

  onRemove (e) {
    this.callAttribute('on-remove', this.data)
  }

}