import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IArticles } from 'src/app/shared/entity/articles.model';
import { ArticlesApiService } from 'src/app/shared/services/api/articles/articles-api.service';
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
    public panier: IArticles[] = []
    public items: IArticles[] = []

    constructor(
        private shopService: ShopService,
        private api:ArticlesApiService,
        private router: Router,
        private localStorage: LocalStorageService,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.panier =  JSON.parse(localStorage.getItem('items')!)
        this.panier.forEach(element => this.totalPrice += element.prix!)

        this.api.getArticlesList().subscribe((data: IArticles[]) => {
            data.forEach( element => {
                if(element.groupe === 2){
                    this.items.push(element);
                }
            })
        })
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

    public onRemoveClick(item: number){
        let localStorageTemp = JSON.parse(this.localStorage.getData('items')!);
        localStorageTemp.splice(item, 1)

        this.localStorage.removeData('items');
        if (localStorageTemp.length > 0){
            this.localStorage.saveData('items', JSON.stringify(localStorageTemp))
            this.panier = JSON.parse(this.localStorage.getData('items')!)
            
            this.totalPrice = 0;
            this.panier.forEach(element => this.totalPrice += element.prix!)
        } else {
            this.totalPrice = 0
        }
    }
}
