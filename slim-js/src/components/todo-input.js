import { tag, template, useShadow } from "slim-js/Decorators";
import { Slim } from "slim-js";

@tag('todo-input')
@template(/*html*/`
  <style>${require('./todo-input.css')}</style>
  <form submit="onSubmit">
    <input s:id="input" type="text" placeholder="What needs to be done?"/>
  </form>
`)
@useShadow(true)
export default class extends Slim {
  onSubmit (e) {
    const { input } = this
    input.value = input.value.trim()
    const { value: text } = input
    e.preventDefault()
    if (text) {
      this.callAttribute('on-new-item', text)
      input.value = null
    }
  }
}