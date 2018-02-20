import { props } from "skatejs/dist/esnext";
import { html } from "lit-html/lib/lit-extended";
import { Component } from "./util";

export default class extends Component {
  static events = ["submit"];
  state = {
    value: ""
  };

  handleInput = e => {
    this.state = { value: e.target.value };
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value) return;
    this.onSubmit({ value: this.state.value });
    this.state = { value: "" };
  };

  render({ handleInput, handleSubmit }) {
    return html`
      <style>
        :host {
          display: block;
        }

        form {
          position: relative;
          font-size: 24px;
          border-bottom: 1px solid #ededed;
        }

        input {
          padding: 16px 16px 16px 60px;
          border: none;
          background: rgba(0, 0, 0, 0.003);
          position: relative;
          margin: 0;
          width: 100%;
          font-size: 24px;
          font-family: inherit;
          font-weight: inherit;
          line-height: 1.4em;
          border: 0;
          outline: none;
          color: inherit;
          padding: 6px;
          border: 1px solid #CCC;
          box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
        }
      </style>
      <form on-submit="${handleSubmit}">
        <input
          value="${this.state.value}"
          type="text"
          placeholder="What needs to be done?"
          on-input="${handleInput}"
        />
      </form>
    `;
  }
}
