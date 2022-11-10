import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IArticles } from '../../entity/articles.model';
import { ArticlesApiService } from '../../services/api/articles/articles-api.service';

@Component({
  selector: 'app-supermot-carousel',
  templateUrl: './supermot-carousel.component.html',
  styleUrls: ['./supermot-carousel.component.scss']
})
export class SupermotCarouselComponent implements OnInit {
    public items: IArticles[] = [];
    
    @Input() set data( value: IArticles[]) {
        this.items = value
    }


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
    localStorage: any;


    constructor() { }

    ngOnInit(): void {
    }

    public onClickButton(item: any): void {
        const items: IArticles[] | null = []
        if (this.localStorage.getData('items')) {
            items.push(...JSON.parse(this.localStorage.getData('items')!), item)
        } else {
            items.push(item);
        }
        this.localStorage.saveData('items', JSON.stringify(items));
    }

}
