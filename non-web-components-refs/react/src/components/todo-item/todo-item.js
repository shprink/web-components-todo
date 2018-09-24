import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './todo-item.css';

class MyTodo extends Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onTodoItemRemove: PropTypes.func.isRequired,
    onTodoItemChecked: PropTypes.func.isRequired,
  };

  handleOnRemove = () => this.props.onTodoItemRemove(this.props.index);
  handleOnChecked = () => this.props.onTodoItemChecked(this.props.index);

  render() {
    const { checked, text } = this.props;
    return (
      <li className={checked ? 'completed' : ''}>
        <input type="checkbox" checked={checked} onChange={this.handleOnChecked} />
        <label>{text}</label>
        <button onClick={this.handleOnRemove}>x</button>
      </li>
    );
  }
}

export default MyTodo;

