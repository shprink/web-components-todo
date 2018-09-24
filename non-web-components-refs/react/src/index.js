import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MyTodo from './components/my-todo/my-todo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyTodo />, document.getElementById('root'));
registerServiceWorker();
