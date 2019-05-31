import { h, customElement, useState } from "atomico";

import TodoInput from "./web-components/todo-input";
import TodoItem from "./web-components/todo-item";

import style from "./style.css";

function Todo({ task = [] }) {
	let [state, setState] = useState(task);
	return (
		<host shadowDom>
			<style>{style}</style>
			<TodoInput
				placeholder="What needs to be done?"
				handlerChange={task => {
					setState(state.concat(task));
				}}
			/>
			<div>
				{state.map(({ text, checked, id }, localIndex) => (
					<TodoItem
						key={id}
						text={text}
						checked={checked}
						handlerRemove={() => {
							setState(state.filter((data, index) => index !== localIndex));
						}}
						handlerToggle={() => {
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

Todo.observables = {
	task: Array
};

customElement("atomico-todo", Todo);
