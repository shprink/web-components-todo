import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './todo-input.css';

class MyTodo extends Component {
  state = { value: '' };

  static propTypes = {
    onTodoInputSubmit: PropTypes.func.isRequired,
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (!this.state.value) return;
    this.props.onTodoInputSubmit(this.state.value);
    this.setState({ value: '' });
  }

  handleInputChange = (event) => this.setState({ value: event.target.value });

  render() {
    const { checked, text } = this.props;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          value={this.state.value}
          type="text"
          placeholder="What needs to be done?"
          onInput={this.handleInputChange}
        />
      </form>
    );
  }
}

export default MyTodo;


