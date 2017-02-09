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
    addItem(book:Book):Observable<Book>{
        return this.http.post(this.BASE_URL,book).map(
            response => response.json()
        );
    }

  /**
   * Dado un id o un objeto libro, borra dicho libro de la base de datos
   *
   * @param id
   * @returns {Observable<Book>}
   */
    deleteBook(id:number|Book):Observable<Book>{
        let url_id:number = (typeof id === "Book")?id.id:id;
        return this.http.delete(this.BASE_URL+url_id).map(
            response => response.json()
        );
    }

    //put
    modifyItem(book:Book):Observable<Book>{
        return this.http.put(this.BASE_URL+book.id, book).map(
            response => response.json()
        );
    }
}
