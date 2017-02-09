import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <header><h1>{{header}}</h1></header>
      
      <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: string = "Library";


}
