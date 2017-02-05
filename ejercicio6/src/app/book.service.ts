import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Book } from './book.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BookService{

    BASE_URL: string = "http://localhost:8080/books/";

    constructor(private http:Http){}

    //get all
    getItems():Observable<Book[]> {
        return this.http.get(this.BASE_URL).map(
            response => response.json()
        );
    }

    //get one
    getItem(id:number):Observable<Book>{
        return this.http.get(this.BASE_URL+id).map(
            response => response.json()
        );
    }

    //post
    addItem(item:Item):Observable<Item>{
        return this.http.post(this.BASE_URL,item).map(
            response => {
              let item: Item = response.json();
              item.checked = item.checked === true || String(item.checked) === "true";
              return item;
            }
        );
    }

    //delete
    deleteBook(id:number):Observable<Book>{
        return this.http.delete(this.BASE_URL+id).map(
            response => response.json()
        );
    }

    //put
    modifyItem(item:Item){
        return this.http.put(this.BASE_URL+item.id, item).map(
            response => response.json()
        );
    }
}
