import {
    Component,
    ViewEncapsulation,
} from '@angular/core';

interface TodoItem {
    text: string;
    checked: boolean;
}

@Component({
    selector: 'my-todo',
    template: `
        <h1>Todos Angular Elements</h1>
        <section>
            <todo-input (onTodoInputSubmit)="todoInputSubmiHandler($event)"></todo-input>
            <todo-item
                *ngFor="let item of list; let i = index"
                [checked]="item.checked"
                [text]="item.text"
                [index]="i"
                (onTodoItemChecked)="todoItemCheckedHandler($event, i)"
                (onTodoItemRemove)="todoItemRemoveHandler($event, i)"
            ></todo-item>
        </section>
    `,
    styles: [`
        h1 {
            font-size: 55px;
            font-weight: 100;
            text-align: center;
            color: rgba(175, 47, 47, 0.15);
        }

        section {
            background: #fff;
            margin: 130px 0 40px 0;
            position: relative;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
        }

        #list-container {
            margin: 0;
            padding: 0;
            list-style: none;
            border-top: 1px solid #e6e6e6;
        }
    `],
    encapsulation: ViewEncapsulation.Native
})
export class MyTodo {
    list: TodoItem[] = [
        { text: 'my initial todo', checked: false },
        { text: 'Learn about Web Components', checked: true }
    ];

    todoInputSubmiHandler(e) {
        this.list = [...this.list, { text: e, checked: false, }];
    }

    todoItemCheckedHandler(e, i) {
        console.log('eee onTodoItemChecked', e, i)
        const list = [...this.list];
        const item = list[e];
        list[e] = Object.assign({}, item, { checked: !item.checked });
        this.list = list;
    }

    todoItemRemoveHandler(e, i) {
        console.log('eee onTodoItemRemove', e, i)
        this.list = [...this.list.slice(0, e), ...this.list.slice(e + 1)];
    }
}
