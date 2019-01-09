import { Component } from 'solid-components';
import { useState } from 'solid-js';
import { r } from 'solid-js/dom';

import style from './MyTodo.css';
import './TodoInput';
import './TodoItem';

let uid = 1;
const MyTodo = () =>  {
  const [state, setState] = useState({ list: [
      { id: uid++, text: "my initial todo", checked: false },
      { id: uid++, text: "Learn about Web Components", checked: true }
    ] });
  return <>
    <style>{ style }</style>
    <h1>Solid Todo</h1>
    <section>
      <todo-input onSubmit={({ detail: text }) =>
        setState('list', l => [...l, { id: uid++, text, checked: false }])
      }/>
      <ul id="list-container"
        onCheck={({ detail: checked }, id) => setState('list', state.list.findIndex(t => t.id === id), { checked })}
        onRemove={(e, id) => setState('list', l => l.filter(t => t.id !== id))}
      >
        <$ each={ state.list }>{ item =>
          <todo-item
            model={ item.id }
            checked={( item.checked )}
            textContent={ item.text }
          />
        }</$>
      </ul>
    </section>
  </>
}

Component('my-todo', MyTodo);