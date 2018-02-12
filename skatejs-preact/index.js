import './style';
import { Component } from 'preact';
import './components/my-todo';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<my-todo name="test"></my-todo>
			</div>
		);
	}
}
