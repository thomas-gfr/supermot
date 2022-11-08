import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticles } from 'src/app/shared/entity/articles.model';
import { ShopService } from 'src/app/shared/services/entity/shop/shop.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-shopping-funnel',
  templateUrl: './shopping-funnel.component.html',
  styleUrls: ['./shopping-funnel.component.scss']
})
export class ShoppingFunnelComponent implements OnInit {

    items: IArticles[] = []

    constructor(
        private shopService: ShopService,
        private router: Router,
        private localStorage: LocalStorageService
    ) { }

    ngOnInit(): void {
        this.items =  JSON.parse(localStorage.getItem('items')!)
    }

    public quantityChange(quantity: number, item: IArticles): void {
        if(item.prix) {
            // item.quantity = quantity;
            // item.total = item?.price * quantity;
        }
    }

    public onClick(): void {
        this.router.navigate(['shop/payment']);
    }

    public clearStorage(): void {
        this.localStorage.clearData();
    }
}
