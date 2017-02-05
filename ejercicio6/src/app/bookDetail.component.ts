import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bookDetail',
  templateUrl: `
    <h3>{{book?.title}}</h3>
    <p>{{book?.description?}}</p>
    <span>
        <button (click)="removeBook()">Remove</button>
        <button (click)="editBook()">Edit</button>
    </span>
    <button (click)="backToList()">back</button>
  `
})
export class BookDetailComponent implements OnInit{
    book: Book;

    constructor(private bookService: BookService, 
                private activatedRoute: ActivatedRoute,
                private router: Router){}

    ngOnInit(){
        let id = this.activatedRoute.snapshot.params['id'];
        this.bookService.getItem(id).subscribe(
            book => this.book = book
        );
    }

    removeBook(){
        this.bookService.deleteBook(this.book.id).subscribe(
            book => this.backToList()
        );
    }

    backToList(){
        this.router.navigate(['books']);
    }
}