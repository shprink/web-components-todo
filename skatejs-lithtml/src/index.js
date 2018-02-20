import App from "./app";
import Input from "./input";
import Item from "./item";

[App, Input, Item].forEach(c =>
  customElements.define(`todo-${c.name.toLowerCase()}`, c)
);
