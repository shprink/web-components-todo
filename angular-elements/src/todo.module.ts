import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { MyTodo } from './my-todo';
import { TodoInput } from './todo-input';
import { TodoItem } from './todo-item';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [MyTodo, TodoInput, TodoItem],
  entryComponents: [MyTodo],
})
export class TodoModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() { 
  	const todosEl = createCustomElement(MyTodo, {
       injector: this.injector,
    });

    customElements.define('my-todos', todosEl);
  }
}