import { register, compose } from 'component-register';
import { withSolid } from 'solid-components';
import { useState, each } from 'solid-js';
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
      >{
        each(item =>
          <todo-item
            model={ item.id }
            checked={( item.checked )}
            textContent={ item.text }
          />
        )(() => state.list)
      }</ul>
    </section>
  </>
}

compose(register('my-todo'), withSolid)(MyTodo);