import { h } from "@atomico/core";
import style from "./style.css";
/**
 * Component article, shows the task and allows you to mark how the
 * elimination(props.onRemove) of this has been done(props.onToggle) or eliminated
 * @param {object} props
 * @param {integer|string} props.key
 * @param {function} props.onToggle
 * @param {boolean} props.checked
 * @param {string} props.text
 * @param {function} props.onRemove
 * @return {object}
 */
export default function Item(props) {
	return (
		<div shadowDom key={props.key}>
			<style>{style}</style>
			<input
				type="checkbox"
				onChange={props.onToggle}
				checked={props.checked}
			/>
			<div class="text">{props.text}</div>
			<button onClick={props.onRemove}>x</button>
		</div>
	);
}
