import { h } from "@atomico/core";
import style from "./style.css";

let incrementId = 0;
/**
 * Input component, shows the input that collects the texts for the creation of a task
 * @param {object} props
 * @param {function} props.onChange
 * @param {string} props.placeholder
 * @return {object}
 */
export default function Input(props) {
	return (
		<div shadowDom>
			<style>{style}</style>
			<form
				onSubmit={event => {
					event.preventDefault();
					if (props.onChange)
						props.onChange({
							text: event.target.input.value,
							id: incrementId++
						});
					event.target.reset();
				}}
			>
				<input name="input" type="text" placeholder={props.placeholder} />
			</form>
		</div>
	);
}
