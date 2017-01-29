import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';

@Component({
    selector: 'item',
    templateUrl: './item.component.html'
})
export class ItemComponent{
    @Input() item: Item;
    @Output() delete = new EventEmitter<Item>();

    clickDelete(){
        console.log("Se emite el evento para borrar el item "+"{"+this.item.name+","+this.item.check+"}");
        this.delete.emit(this.item);
    }
}