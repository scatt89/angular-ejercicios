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
    getItems():Observable<Item[]> {
        return this.http.get(this.BASE_URL).map(
            response => {
                let items: Item[] = [];
                for(let item of response.json()){
                  items.push({
                    id: item.id,
                    checked: item.checked === true || item.checked === "true",
                    description: item.description
                  });
                }
                return items;
            }
        )
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
    deleteItem(item:Item):Observable<Item>{
        return this.http.delete(this.BASE_URL+item.id).map(
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
