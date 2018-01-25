import { Component, NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'hello-world',
  template: `
    Hello {{name || 'world'}}!
  `
})
export class HelloWorldComponent {
  @Input() name;
}

export const CEComponents = [HelloWorldComponent];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule
  ],
  declarations: CEComponents,
  entryComponents: CEComponents
})
export class CustomElementsModule {
  ngDoBootstrap() {}
}
