import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticles } from 'src/app/shared/entity/articles.model';
import { ShopService } from 'src/app/shared/services/entity/shop/shop.service';

@Component({
  selector: 'app-shopping-funnel',
  templateUrl: './shopping-funnel.component.html',
  styleUrls: ['./shopping-funnel.component.scss']
})
export class ShoppingFunnelComponent implements OnInit {

    items: IArticles[] = []

    constructor(
        private shopService: ShopService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.shopService.item$.subscribe((items: any) => {
            if(items) {
                this.items = items;
            } else {
                this.router.navigate(['/']);
            }
        })
    }

    public quantityChange(quantity: number, item: IArticles): void {
        if(item.prix) {
            // item.quantity = quantity;
            // item.total = item?.price * quantity;
        }
    }
}
