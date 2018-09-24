import React, { Component } from 'react';

import './my-todo.css';
import TodoInput from '../todo-input/todo-input';
import TodoItem from '../todo-item/todo-item';

class MyTodo extends Component {
  state = {
    list: [
      { text: 'my initial todo', checked: false },
      { text: 'Learn about Web Components', checked: true }
    ],
  }

  handleOnTodoInputSubmit = (text) => {
    this.setState({ list: [...this.state.list, { text, checked: false, }] });
  }

  handleOnTodoItemChecked = (index) => {
    const { list } = this.state;
    const newList = [...list];
    const item = newList[index];
    newList[index] = Object.assign({}, item, { checked: !item.checked });
    this.setState({ list: newList });
  }

  handleOnTodoItemRemove = (index) => {
    const { list } = this.state;
    this.setState({ list: [...list.slice(0, index), ...list.slice(index + 1)] });
  }

  render() {
    return (
      <div className="MyTodo">
        <h1>Todos React</h1>
        <section>
          <TodoInput onTodoInputSubmit={this.handleOnTodoInputSubmit} />
          <ul id="list-container">
            {this.state.list.map((item, index) => (
              <TodoItem
                key={index}
                checked={item.checked}
                text={item.text}
                index={index}
                onTodoItemRemove={this.handleOnTodoItemRemove}
                onTodoItemChecked={this.handleOnTodoItemChecked}
              />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default MyTodo;
