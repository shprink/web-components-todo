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
            <div class="group">
                <style>{style}</style>
                <input
                    type="checkbox"
                    change={() => {
                        this.dispatch("toggle");
                    }}
                    checked={this.props.checked}
                />
                <div class="text">{this.props.text}</div>
                <button
                    click={() => {
                        this.dispatch("remove");
                    }}
                >
                    x
                </button>
            </div>
        );
    }
}
