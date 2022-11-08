import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supermot-carousel',
  templateUrl: './supermot-carousel.component.html',
  styleUrls: ['./supermot-carousel.component.scss']
})
export class SupermotCarouselComponent implements OnInit {
    
    @Input() items: any[] = [];

    public responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    constructor() { }

    ngOnInit(): void {
    }

}
