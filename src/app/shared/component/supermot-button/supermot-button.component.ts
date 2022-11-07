import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-supermot-button',
    templateUrl: './supermot-button.component.html',
    styleUrls: ['./supermot-button.component.scss']
})
export class SupermotButtonComponent implements OnInit {
    @Output() emitOnClick = new EventEmitter<Event>();

    constructor() { }

    ngOnInit(): void {
    }

    onClick(event: Event): void{
        this.emitOnClick.emit(event);
    }

}
