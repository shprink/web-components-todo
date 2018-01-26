import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { registerAsCustomElements } from '@angular/elements';

import { TodoModule } from './todo.module';
import { MyTodo } from './my-todo';
// import { TodoInput } from './todo-input';
// import { TodoItem } from './todo-item';

registerAsCustomElements([
  MyTodo,
  // TodoInput,
  // TodoItem
], () =>
    platformBrowserDynamic().bootstrapModule(TodoModule)
);
