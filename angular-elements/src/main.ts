import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { registerAsCustomElements } from '@angular/elements';

import { TodoModule } from './todo.module';
import { MyTodo } from './my-todo';

registerAsCustomElements([
  MyTodo,
], () =>
    platformBrowserDynamic().bootstrapModule(TodoModule)
);
