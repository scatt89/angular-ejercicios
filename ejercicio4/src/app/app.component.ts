import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemComponent } from './item.component';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: Item[] = [];
  inputContent: string;
  BASE_URL: string = "http://localhost:8080/items/";

  constructor(private http:Http){  }

  //get
  ngOnInit(){
    this.http.get(this.BASE_URL).subscribe(
      response => this.list = response.json(),
      error => console.error(error)
    );
  }

  //post
  addContent(){
    let itemAux = {description:this.inputContent, check:false};
    this.http.post(this.BASE_URL,itemAux).subscribe(
      response => {
        this.list.push(itemAux);
        this.inputContent = "";
        console.log(response);
      },
      error => console.log(error)
    );
    this.inputContent = "";
  }

  //delete
  onDeleteItem(item:Item){
    this.http.delete(this.BASE_URL+item.id).subscribe(
      response => {
        this.list.splice(this.list.indexOf(item),1);
        console.log(response.json());
      },
      error => console.error(error)
    );
  }

  //put
  onToggleCheck(item:Item){
    let itemAux = {description: item.description, checked:item.checked};
    this.http.put(this.BASE_URL+item.id, itemAux).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
}
