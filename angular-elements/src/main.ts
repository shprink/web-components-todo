import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TodoModule } from './todo.module';
import { MyTodo } from './my-todo';

platformBrowserDynamic()
  .bootstrapModule(TodoModule)
  .then(_ => {})
  .catch(err => console.log(err));  