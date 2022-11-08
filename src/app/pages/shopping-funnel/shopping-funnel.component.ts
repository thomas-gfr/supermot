import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IArticles } from 'src/app/shared/entity/articles.model';
import { ShopService } from 'src/app/shared/services/entity/shop/shop.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-shopping-funnel',
  templateUrl: './shopping-funnel.component.html',
  styleUrls: ['./shopping-funnel.component.scss'],
})
export class ShoppingFunnelComponent implements OnInit {
    public size = [{
            name: 'XS',
            value: 'XS'
        }, {
            name: 'S',
            value: 'S'
        }, {
            name: 'M',
            value: 'M'
        }, {
            name: 'L',
            value: 'L'
        }, {
            name: 'XL',
            value: 'XL'
        }]
    public selectedSize=''
    public totalPrice = 0
    public items: IArticles[] = []

    constructor(
        private shopService: ShopService,
        private router: Router,
        private localStorage: LocalStorageService,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.items =  JSON.parse(localStorage.getItem('items')!)
    }

    public quantityChange(quantity: number, item: IArticles): void {
        if(item.prix) {
            this.totalPrice = item?.prix * quantity;
        }
    }

    public onClick(): void {
        this.router.navigate(['shop/payment']);
    }

    public clearStorage(): void {
        this.localStorage.clearData();
        this.messageService.add({severity:'success', summary:'Success', detail:'Storage cleared'});
        this.router.navigate(['/']);
    }
}
