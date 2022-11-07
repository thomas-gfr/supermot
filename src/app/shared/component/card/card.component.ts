import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() header: string = '';
    @Input() body: string = '';
    @Input() footer: string = '';
    @Output() emitOnClick = new EventEmitter<Event>();

    constructor() { }

    ngOnInit(): void {
    }
    
    public onClickButton(event: Event): void {
        this.emitOnClick.emit(event);
    }

}
