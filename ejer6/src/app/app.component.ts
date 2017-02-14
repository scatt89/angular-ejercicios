import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
		<span><md-icon>view_list</md-icon><h1 class="title">Library</h1></span>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
}