import { Component } from 'solid-components'
import { r } from 'solid-js/dom'

import style from './TodoItem.css'

const TodoItem = (props, { element }) =>
  <>
    <style>{ style }</style>
    <li class={( props.checked ? 'completed' : '' )}>
      <input
        type="checkbox" checked={ props.checked }
        onInput={() => element.trigger('check', { detail: !props.checked })}
      />
      <label>
        <slot />
      </label>
      <button onClick={() => element.trigger('remove')}>x</button>
    </li>
  </>

Component('todo-item', { checked: false }, TodoItem);
