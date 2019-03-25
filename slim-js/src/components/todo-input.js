import { tag, template, useShadow } from "slim-js/Decorators";
import { Slim } from "slim-js";

@tag('todo-input')
@template(/*html*/`
<style>
:host, :host * {
  font-family: inherit;
  font-weight: inherit;
  font-size: 24px;
}
form {
  border-bottom: 1px solid #ededed;
}

input {
  position: relative;
  margin: 0 0 2px 0;
  width: 100%;
  line-height: 1.4em;
  outline: none;
  padding: 6px;
  border: 1px solid #CCC;
  box-shadow: 0 0px 1px 0px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}
</style>
<form submit="onSubmit">
  <input s:id="input" type="text" placeholder="What needs to be done?"/>
</form>
`)
@useShadow(true)
export default class extends Slim {
  onSubmit(e) {
    e.preventDefault()
    const text = this.input.value.trim()
    if (text) {
      this.callAttribute('on-new-item', text)
      this.input.value = null
    }
  }
}