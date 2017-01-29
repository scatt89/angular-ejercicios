import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Item } from './item.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ItemService{

    BASE_URL: string = "http://localhost:8080/items/";

    constructor(private http:Http){}

    //get
    getItems():Observable<Item> {
        return this.http.get(this.BASE_URL).map(
            response => {
                let items: Item[] = [];
                for(let item of response.json()){
                    item.
                }
                return response.json();
            },
            error => error
        );
    }

    //post
    addItem(item:Item){
        return this.http.post(this.BASE_URL,item).map(
            response => response.json()
        );
    }

    //delete
    deleleItem(item:Item){
        return this.http.delete(this.BASE_URL+item.id).map(
            response => response.json()
        );
    }

    //put
    modifyItem(item:Item){
        return this.http.put().map(

        );
    }
}