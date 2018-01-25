import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `<h1>
      Hello world ! My name is {{name}} !
  </h1>
  <button (click)="onClick()">Hi !</button>`,
  styles: [`
    button {
      color: #3498db;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent {
  @Input() name;
  @Output() hi = new EventEmitter<string>();

  onClick() {
    this.hi.emit(`Hi, ${this.name} talking.`);
  }
}
