import { register, compose } from 'component-register'
import { withEvents } from 'component-register-extensions'
import { withSolid } from 'solid-components'
import { r } from 'solid-js/dom'

import style from './TodoItem.css'

const TodoItem = ({ state, events }) =>
  <>
    <style>{(( style ))}</style>
    <li class={state.checked ? "completed" : ""}>
      <input type="checkbox" checked={ state.checked } onChange={e => events.trigger('check', !state.checked)} />
      <label>
        <slot />
      </label>
      <button onClick={e => events.trigger('remove') }>x</button>
    </li>
  </>

compose(
  register('todo-item', { checked: false }),
  withSolid(), withEvents
)(TodoItem);
