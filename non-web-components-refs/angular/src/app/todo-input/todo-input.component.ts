import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  styles: [`
    form {
        position: relative;
        font-size: 24px;
        border-bottom: 1px solid #ededed;
    }

    input[type=text] {
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        padding: 6px;
        border: 1px solid #CCC;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
    }
  `],
  template: `
    <form (submit)="onSubmit($event)">
      <input type="text" placeholder="What needs to be done?" [(ngModel)]="text" name="text" />
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoInputComponent {
  text: string;
  @Output() newTodo: EventEmitter<string> = new EventEmitter<string>();

  onSubmit(e) {
    this.newTodo.emit(this.text);
    this.text = '';
  }

}

