import { register, compose } from 'component-register'
import { withEvents, withProps } from 'component-register-extensions'
import { withSolid } from 'solid-components'
import { r } from 'solid-js/dom'

import style from './TodoInput.css'

const TodoInput = ({ state, handleInput, handleSubmit }) =>
  <>
    <style>{ style }</style>
    <form onSubmit={ handleSubmit }>
      <input
        value={( state.value )}
        type="text"
        placeholder="What needs to be done?"
        onInput={ handleInput }
      />
    </form>
  </>

compose(
  register('todo-input'),
  withSolid({ value: '' }),
  withEvents,
  withProps(({ state, events }) => ({
    handleInput: ({ target: { value } }) => state.set({ value }),
    handleSubmit: e => {
      e.preventDefault();
      if (!state.value) return;
      events.trigger('submit', state.value);
      state.set({ value: '' });
    }
  }))
)(TodoInput)