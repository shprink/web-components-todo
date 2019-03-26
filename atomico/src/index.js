import { h, useState } from "@atomico/core";
import { Element } from "@atomico/element";
import Input from "./components/Input";
import Item from "./components/Item";
import style from "./style.css";

export default class TagTodo extends Element {
	render() {
		let [state, setState] = useState(() => [
			{ text: "my initial todo", checked: false, id: -1 >>> 0 },
			{ text: "Learn about Web Components", checked: true, id: -2 >>> 0 }
		]);
		return (
			<host shadowDom>
				<style>{style}</style>
				<Input
					placeholder="What needs to be done?"
					onChange={task => {
						setState(state.concat(task));
					}}
				/>
				<div>
					{state.map(({ text, checked, id }, localIndex) => (
						<Item
							key={id}
							text={text}
							checked={checked}
							onRemove={() => {
								setState(state.filter((data, index) => index !== localIndex));
							}}
							onToggle={() => {
								setState(
									state.map((data, index) =>
										index === localIndex
											? {
													...data,
													checked: !data.checked
											  }
											: data
									)
								);
							}}
						/>
					))}
				</div>
			</host>
		);
	}
}

customElements.define("atomico-todo", TagTodo);
