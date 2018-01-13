import { Component, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'todo-input',
  styleUrl: 'todo-input.scss',
  shadow: true,
})
export class TodoInput {
  @Event() onTodoInputSubmit: EventEmitter;
  @State() value: string;

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (!this.value) return;
    this.onTodoInputSubmit.emit(this.value);
    this.value = '';
  }

  handleInputChange = (event) => this.value = event.target.value;

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          value={this.value}
          type="text"
          placeholder="What needs to be done?"
          onInput={this.handleInputChange}
        />
      </form>
    );
  }
}
