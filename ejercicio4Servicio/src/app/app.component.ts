import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemComponent } from './item.component';
import { Http } from '@angular/http';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: Item[] = [];
  inputContent: string;

  constructor(private itemService:ItemService){  }

  //get
  ngOnInit(){
    this.itemService.getItems().subscribe(
      items => this.list = items
    );
  }

  //post
  addContent(){
    let itemAux = {description:this.inputContent, checked:false};

    this.itemService.addItem(itemAux).subscribe(
      item => {
        console.info(item);
        this.list.push(item);
      }, error => this.handleError(error)
    );

    this.inputContent = "";
  }

  //delete
  onDeleteItem(item:Item){
    this.itemService.deleteItem(item).subscribe(
      itemResponse => {
        this.list.splice(this.list.indexOf(item),1);
        console.log(item);
      },
      error => this.handleError(error)
    );
  }

  //put
  onToggleCheck(item:Item){
    this.itemService.modifyItem(item).subscribe(
      response => console.log(response),
      error => this.handleError(error)
    );
  }

  handleError(error: any){
    console.error(error);
  }
}
