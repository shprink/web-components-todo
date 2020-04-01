import { customElement } from 'solid-element';
import { createState } from 'solid-js';

import style from './TodoInput.css';

const TodoInput = (props, { element }) => {
  const [state, setState] = createState({ value: '' }),
    handleSubmit = e => {
      e.preventDefault();
      if (!state.value) return;
      props.createTodo(state.value);
      setState({ value: '' });
    };

  return (<>
    <style>{ style }</style>
    <form onSubmit={ handleSubmit }>
      <input
        value={( state.value )}
        type="text"
        placeholder="What needs to be done?"
        onInput={({ target: { value } }) => setState({ value })}
      />
    </form>
  </>);
}

customElement('todo-input', { createTodo: null }, TodoInput);