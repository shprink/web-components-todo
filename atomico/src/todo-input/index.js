import { h, Element } from "atomico";
import style from "./style.css";

export default class extends Element {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get props() {
        return ["placeholder"];
    }
    render() {
        return (
            <form
                submit={event => {
                    event.preventDefault();
                    this.dispatch("create", {
                        text: event.target.task.value
                    });
                    event.target.reset();
                }}
            >
                <style>{style}</style>
                <input
                    name="task"
                    type="text"
                    placeholder={this.props.placeholder}
                />
            </form>
        );
    }
}
