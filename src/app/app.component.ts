import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'App';
  injectedName = 'Angular ' + VERSION.major;
}
