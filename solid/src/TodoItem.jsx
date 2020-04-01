import { customElement } from 'solid-element';

import style from './TodoItem.css'

const TodoItem = (props) => (
  <>
    <style>{style}</style>
    <li class={props.item.checked ? "completed" : ""}>
      <input
        type="checkbox"
        checked={props.item.checked}
        onInput={[props.check, props.item.id]}
      />
      <label>
        <slot />
      </label>
      <button onClick={[props.remove, props.item.id]}>x</button>
    </li>
  </>
);

customElement('todo-item', { item: null, check: null, remove: null }, TodoItem);
