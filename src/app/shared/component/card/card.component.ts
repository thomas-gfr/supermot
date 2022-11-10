import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articles, IArticles } from '../../entity/articles.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() header: string | undefined = '';
    @Input() body: number | undefined = 10;
    @Input() footer: string | undefined = '';
    @Input() inStock: boolean | undefined = false;
    @Input() addedToStock: boolean | undefined = false;
    @Output() emitOnClick = new EventEmitter<Event>();
    @Output() emitOnRemoveClick = new EventEmitter<Event>();

    public showDescription: boolean = false;
    public buttonLabel: string = 'add to cart';
    public removeButtonLabel: string = 'remove to cart';
    public quantity: number = 0;
    private lastQuantity: number = 0;
    

    constructor() { }

    ngOnInit(): void {
    }
    
    public onClickButton(event: Event): void {
        this.addedToStock = true;
        this.quantity++;
        this.emitOnClick.emit(event);
    }

    public onClickRemoveButton(event: Event): void {
        this.emitOnRemoveClick.emit(event);
    }
    public onClickCard(): void{
      this.showDescription = !this.showDescription;
    }

    public quantityChange(quantity: number): void {
      this.quantity = quantity;
      if(quantity > this.lastQuantity) {
        this.emitOnClick.emit(event);
      } else if(quantity < this.lastQuantity) {
        this.emitOnRemoveClick.emit(event);
      }
  }

}
