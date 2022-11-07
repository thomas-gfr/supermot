import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-supermot-input-number',
  templateUrl: './supermot-input-number.component.html',
  styleUrls: ['./supermot-input-number.component.scss']
})
export class SupermotInputNumberComponent implements OnInit {

    @Output() emitOnChange = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    public emitChange(event: number){
       this.emitOnChange.next(event)
    }
}
