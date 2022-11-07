import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() header: string | undefined = '';
    @Input() body: string | undefined = '';
    @Input() footer: string | undefined = '';
    @Output() emitOnClick = new EventEmitter<Event>();

    constructor() { }

    ngOnInit(): void {
    }
    
    public onClickButton(event: Event): void {
        this.emitOnClick.emit(event);
    }

}
