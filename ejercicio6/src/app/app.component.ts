import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputContent: string;
  header: string = "Library";

  constructor(private bookService:BookService){  }

  //get
  ngOnInit(){
    this.bookService.getItems().subscribe(
      items => this.list = items
    );
  }

  //post
  addContent(){
    let itemAux = {description:this.inputContent, checked:false};

    this.bookService.addItem(itemAux).subscribe(
      item => {
        console.info(item);
        this.list.push(item);
      }, error => this.handleError(error)
    );

    this.inputContent = "";
  }

  //delete
  onDeleteItem(item:Book){
    this.bookService.deleteItem(item).subscribe(
      itemResponse => {
        this.list.splice(this.list.indexOf(item),1);
        console.log(item);
      },
      error => this.handleError(error)
    );
  }

  //put
  onToggleCheck(item:Book){
    this.bookService.modifyItem(item).subscribe(
      response => console.log(response),
      error => this.handleError(error)
    );
  }

  handleError(error: any){
    console.error(error);
  }
}
