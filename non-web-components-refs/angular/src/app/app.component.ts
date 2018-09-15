import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h1>Todos Angular</h1>
  <section>
      <app-todo-input (newTodo)="addItem($event)"></app-todo-input>
      <app-todo-item
        *ngFor="let item of list; let i = index"
        [text]="item.text"
        [checked]="item.checked"
        (remove)="removeItem(i)"
        (toggle)="toggleItem(i)"
      ></app-todo-item>
      <ul id="list-container"></ul>
  </section>
  `,
  styles: [`
    h1 {
        font-size: 70px;
        line-height: 70px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
    }

    section {
        background: #fff;
        margin: 30px 0 40px 0;
        position: relative;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }

    #list-container {
        margin: 0;
        padding: 0;
        list-style: none;
        border-top: 1px solid #e6e6e6;
    }
  `  ]
})
export class AppComponent {
  list = [
    { text: 'my initial todo', checked: false },
    { text: 'Learn about Web Components', checked: true },
  ]

  addItem(text) {
    this.list = [...this.list, { text, checked: false, }];
  }

  removeItem(index) {
    this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
  }

  toggleItem(index) {
    const list = [...this.list];
    const item = list[index];
    list[index] = Object.assign({}, item, { checked: !item.checked });
    this.list = list;
  }
}
