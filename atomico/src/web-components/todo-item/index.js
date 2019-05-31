import { h, customElement, useEffect } from "atomico";
import style from "./style.css";
/**
 * Component article, shows the task and allows you to mark how the
 * elimination(props.handlerRemove) of this has been done(props.handlerToggle) or eliminated
 * @param {object} props
 * @param {integer|string} props.key
 * @param {function} props.handlerToggle
 * @param {boolean} props.checked
 * @param {string} props.text
 * @param {function} props.handlerRemove
 * @return {object}
 */
export function Item(props) {
	return (
		<host shadowDom key={props.key}>
			<style>{style}</style>
			<input
				type="checkbox"
				onChange={props.handlerToggle}
				checked={props.checked}
			/>
			<div class="text">{props.text}</div>
			<button onClick={props.handlerRemove}>x</button>
		</host>
	);
}

Item.observables = {
	handlerToggle: Function,
	handlerRemove: Function,
	checked: Boolean,
	text: String
};

export default customElement("atomico-todo-item", Item);
