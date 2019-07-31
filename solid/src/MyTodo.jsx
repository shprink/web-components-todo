import { customElement } from 'solid-element';
import { createState } from 'solid-js';

import style from './MyTodo.css';
import './TodoInput';
import './TodoItem';

let uid = 1;
const MyTodo = () =>  {
  const [state, setState] = createState({ list: [
      { id: uid++, text: "my initial todo", checked: false },
      { id: uid++, text: "Learn about Web Components", checked: true }
    ] }),
    toggleChecked = ({ detail: checked }, id) => setState('list', state.list.findIndex(t => t.id === id), { checked }),
    removeTodo = (e, id) => setState('list', l => l.filter(t => t.id !== id));

  return <>
    <style>{ style }</style>
    <h1>Solid Todo</h1>
    <section>
      <todo-input onCreate={({ detail: text }) =>
        setState('list', l => [...l, { id: uid++, text, checked: false }])
      }/>
      <ul id="list-container">
        <For each={( state.list )}>{ item =>
          <todo-item
            model={ item.id }
            checked={( item.checked )}
            textContent={ item.text }
            onCheck={ toggleChecked }
            onRemove={ removeTodo }
          />
        }</For>
      </ul>
    </section>
  </>
}

customElement('my-todo', MyTodo);