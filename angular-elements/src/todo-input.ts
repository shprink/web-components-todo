import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'todo-input',
    template: `
        <form [formGroup]="inputForm" (ngSubmit)="handleOnSubmit($event)">
            <input
                type="text"
                placeholder="What needs to be done?"
                formControlName="text"
            />
        </form>
    `,
    styles: [`
        :host {
            display: block;
        }
        form {
            position: relative;
            font-size: 24px;
            border-bottom: 1px solid #ededed;
        }
        input {
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
    encapsulation: ViewEncapsulation.Native
})
export class TodoInput {
    @Output() onTodoInputSubmit = new EventEmitter<string>();
    inputForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
    ) {
        this.inputForm = this.formBuilder.group({
            'text': ['', Validators.required],
        });
    }

    handleOnSubmit(e) {
        if (!this.inputForm.value.text) return;
        this.onTodoInputSubmit.emit(this.inputForm.value.text);
        this.inputForm.reset();
    }
}
