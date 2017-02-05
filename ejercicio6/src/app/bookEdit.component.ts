import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'bookEdit',
  templateUrl: `
    <h3>{{book.title}}</h3>
    
    <input type="text" [(ngModel)]="book.title"></div></br>
    <input type="textArea" [(ngModel)]="book.description"></div></br>
    <span>
        <button>Cancel</button>
        <button>Save</button>
    </span>
  `
})
export class BookEditComponent{
    book: Book;
}