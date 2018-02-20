// @jsx h

import { props } from "skatejs/dist/esnext";
import { h } from "preact";
import { Component } from "./util";

export default class App extends Component {
  state = {
    list: [
      { text: "my initial todo", checked: false },
      { text: "Learn about Web Components", checked: true }
    ]
  };

  handleCheck = e => {
    this.state.list[e.detail.index].checked = e.detail.value;
    this.state = this.state;
  };
  handleRemove = e => {
    this.state = {
      list: this.state.list.filter((item, index) => index !== e.detail.index)
    };
  };
  handleSubmit = e => {
    this.state = {
      list: [...this.state.list, { text: e.detail.value, checked: false }]
    };
  };

  render({ handleCheck, handleRemove, handleSubmit }) {
    return (
      <div>
        <style>{`
          :host {
            display: block;
          }

          h1 {
            font-size: 100px;
            font-weight: 100;
            text-align: center;
            color: rgba(175, 47, 47, 0.15);
          }

          section {
            background: #fff;
            margin: 130px 0 40px 0;
            position: relative;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
          }

          #list-container {
            margin: 0;
            padding: 0;
            list-style: none;
            border-top: 1px solid #e6e6e6;
          }
        `}</style>
        <h1>SkateJS</h1>
        <section>
          <todo-input onSubmit={handleSubmit} />
          <ul id="list-container">
            {this.state.list.map(({ checked, text }, index) => (
              <todo-item
                checked={checked}
                index={index}
                onCheck={handleCheck}
                onRemove={handleRemove}
              >
                {text}
              </todo-item>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
