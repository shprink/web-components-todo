import { NgModule } from '@angular/core';
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
  ngDoBootstrap() { }
}
