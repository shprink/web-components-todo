import './polyfills';

import { registerAsCustomElements } from './@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CustomElementsModule, CEComponents } from './app/app.module';


registerAsCustomElements(CEComponents, () => {
  return platformBrowserDynamic().bootstrapModule(CustomElementsModule);
}).then(_ => {
  setTimeout(_ => {
    let helloWorld = document.querySelector('hello-world');
    helloWorld['name'] = 'Pascal';
  }, 2000);
});

