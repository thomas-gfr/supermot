import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISuit } from 'src/app/shared/entity/suit.model';
import { ShopService } from 'src/app/shared/services/entity/shop/shop.service';

@Component({
  selector: 'app-shopping-funnel',
  templateUrl: './shopping-funnel.component.html',
  styleUrls: ['./shopping-funnel.component.scss']
})
export class ShoppingFunnelComponent implements OnInit {

    items: ISuit[] = []

    constructor(
        private shopService: ShopService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.shopService.item$.subscribe((item: any) => {
            if(item) {
                this.items = item;
            } else {
                this.router.navigate(['/']);
            }
        })
    }

    public quantityChange(quantity: number, item: ISuit): void {
        if(item.price && item.quantity) {
            item.quantity = quantity;
            item.total = item?.price * quantity;
        }
    }
}
