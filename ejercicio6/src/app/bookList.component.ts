import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bookList',
  template: `
    <h2>Books</h2>

    <div *ngIf="!books">There are no books yet</div>

    <ul>
      <li *ngFor="let book of books">
          <a [routerLink]="['/books',book.id]">
              {{book.id}} - {{book.title}}
          </a>
      </li>
    </ul>

    <button (click)="newBook()" >New Book</button>
  `
})
export class BookListComponent implements OnInit{

    books : Book[] = [];

    constructor(private bookService: BookService, private router: Router){}

    //get
    ngOnInit(){
        this.bookService.getItems().subscribe(
          books => this.books = books
        );

    }

    newBook(){
        this.router.navigate(['/books/new']);
    }

}
