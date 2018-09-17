import { h, Element } from "atomico";
import style from "./style.css";
export default class extends Element {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get props() {
        return ["text", "checked"];
    }
    render() {
        return (
            <li class={this.props.checked ? 'completed' : ''}>
                <style>{style}</style>
                <input
                    type="checkbox"
                    change={() => {
                        this.dispatch("toggle");
                    }}
                    checked={this.props.checked}
                />
                <label>{this.props.text}</label>
                <button
                    click={() => {
                        this.dispatch("remove");
                    }}
                >
                    x
                </button>
            </li>
        );
    }
}
