import { register, compose } from 'component-register'
import { withProps } from 'component-register-extensions'
import { withSolid } from 'solid-components'
import { each } from 'solid-js'
import { r } from 'solid-js/dom'

import style from './MyTodo.css'
import './TodoInput'
import './TodoItem'

const MyTodo = ({ state, handleCheck, handleRemove, handleSubmit }) =>
  <>
    <style>{(( style ))}</style>
    <h1>Solid Todo</h1>
    <section>
      <todo-input onSubmit={ handleSubmit } />
      <ul id="list-container"
        onCheck={ handleCheck }
        onRemove={ handleRemove }
      >
        {each(item =>
          <todo-item
            model={(( item.id ))}
            checked={ item.checked }
            textContent={(( item.text ))}
          />
        )(() => state.list)}
      </ul>
    </section>
  </>

let uid = 1;
compose(
  register('my-todo'),
  withSolid({ list: [
    { id: uid++, text: "my initial todo", checked: false },
    { id: uid++, text: "Learn about Web Components", checked: true }
  ] }),
  withProps(({ state }) => ({
    handleCheck: ({ detail: checked }, id) =>
      state.set('list', state.list.findIndex(t => t.id === id), { checked }),
    handleRemove: (e, id) =>
      state.set({list: state.list.filter(t => t.id !== id)}),
    handleSubmit: ({ detail: text }) =>
      state.set({ list: [...state.list, { id: uid++, text, checked: false }] })
  }))
)(MyTodo)