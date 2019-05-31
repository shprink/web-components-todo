import { h, customElement } from "atomico";
import style from "./style.css";

/**
 * Input component, shows the input that collects the texts for the creation of a task
 * @param {object} props
 * @param {function} props.handlerChange
 * @param {string} props.placeholder
 * @return {object}
 */
export function Input(props) {
	return (
		<host shadowDom>
			<style>{style}</style>
			<form
				onSubmit={event => {
					event.preventDefault();
					if (props.handlerChange)
						props.handlerChange({
							text: event.target.input.value,
							id: Date.now()
						});
					event.target.reset();
				}}
			>
				<input name="input" type="text" placeholder={props.placeholder} />
			</form>
		</host>
	);
}

Input.observables = {
	handlerChange: Function,
	placeholder: String
};

export default customElement("atomico-todo-input", Input);
