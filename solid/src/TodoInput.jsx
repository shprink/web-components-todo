import { Component } from 'solid-components';
import { createState } from 'solid-js';
import { r } from 'solid-js/dom';

import style from './TodoInput.css';

const TodoInput = (props, { element }) => {
  const [state, setState] = createState({ value: '' }),
    handleSubmit = e => {
      e.preventDefault();
      if (!state.value) return;
      element.trigger('create', { detail: state.value });
      setState({ value: '' });
    };
  return <>
    <style>{ style }</style>
    <form onSubmit={ handleSubmit }>
      <input
        value={( state.value )}
        type="text"
        placeholder="What needs to be done?"
        onInput={({ target: { value } }) => setState({ value })}
      />
    </form>
  </>
}

Component('todo-input', TodoInput);