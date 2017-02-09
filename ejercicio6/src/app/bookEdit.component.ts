import {Component, OnInit} from '@angular/core';
import { Book } from './book.model';
import {BookService} from "./book.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bookEdit',
  template: `
    <h3>{{book?.title}}</h3>
   
    <div *ngIf="book">Id: {{book?.id}}</div>
    <span><label for="title">Title: </label><input id="title" type="text" [(ngModel)]="book.title"></span><br/>
    <span>
      <label for="description">Description: </label>
      <textarea name="message" rows="10" cols="30" id="description" [(ngModel)]="book.description"></textarea>
    </span><br/>
    
    <span>
        <button [routerLink]="['/books']">Cancel</button>
        <button (click)="editBook()">Save</button>
    </span>
  `
})
export class BookEditComponent implements OnInit{

  book: Book;

  constructor(private bookService:BookService, private router:Router, private activatedRoute:ActivatedRoute){}

  //da error al leer la propiedad id no definida, mirar a ver que coño pasa
  ngOnInit(): void {
    this.book = {title:"",description:""};

    if(this.router.url!=="/books/new"){
      let id = this.activatedRoute.snapshot.params['id'];
      this.bookService.getItem(id).subscribe(
        book => this.book = book
      );
    }
  }

  //En edit Book tambien tengo que mirar la ruta para saber si modificar o guardar el libro
  editBook(){
    if(this.router.url=="/books/new"){
      this.bookService.addItem(this.book).subscribe(
        book => {
          alert("El libro se ha creado con éxito");
          this.router.navigate(['/books']);
        },
        error => console.error(error)
      );
    }else{
      this.bookService.modifyItem(this.book).subscribe(
        book => {
          alert("El libro se ha modificado con éxito");
          this.router.navigate(['/books']);
        },
        error => console.error(error)
      );
    }
  }

}
