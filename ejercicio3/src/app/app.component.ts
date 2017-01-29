import { Component } from '@angular/core';
import { Item } from './item.model';
import { ItemComponent } from './item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: Item[] = [];
  inputContent: string;

  addContent(){
    this.list.push({check:false ,name:this.inputContent});
    console.log("Añadido el contenido "+this.inputContent);
    this.inputContent = "";
  }

  onDeleteItem(item:Item){
    this.list.splice(this.list.indexOf(item),1);
    console.log("Se borra el item");
  }
}
