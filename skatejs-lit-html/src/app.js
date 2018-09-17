import { props } from "skatejs/dist/esnext";
import { html } from "lit-html/lib/lit-extended";
import { Component } from "./util";

export default class extends Component {
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
    return html`
      <style>
        :host {
          display: block;
        }

        h1 {
          font-size: 60px;
          font-weight: 100;
          text-align: center;
          color: rgba(175, 47, 47, 0.15);
        }

        section {
          background: #fff;
          margin: 30px 0 40px 0;
          position: relative;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
        }

        #list-container {
          margin: 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid #e6e6e6;
        }
      </style>
      <h1>SkateJS & lit-html</h1>
      <section>
        <todo-input on-submit="${handleSubmit}"></todo-input>
        <ul id="list-container">
          ${this.state.list.map(
            ({ checked, text }, index) => html`
              <todo-item
                checked="${checked}"
                index="${index}"
                on-check="${handleCheck}"
                on-remove="${handleRemove}"
              >${text}</todo-item>
            `
          )}
        </ul>
      </section>
    `;
  }
}
