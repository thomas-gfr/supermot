import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticles } from '../../entity/articles.model';
import { ShopService } from '../../services/entity/shop/shop.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input() list: IArticles[] = [];
    
    constructor(
        private router: Router,
        private shopService: ShopService,
        private localStorage: LocalStorageService
    ) { }

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
        this.router.navigate(['/shop/funnel']);
    }

}
