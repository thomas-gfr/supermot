import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../services/entity/shop/shop.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input() list: any[] = [];
    
    constructor(
        private router: Router,
        private shopService: ShopService
    ) { }

    ngOnInit(): void {
    }

    public onClickButton(item: any): void {
        const items: any[] | null = []
        items.push(item);
        this.shopService.item$.next(items);
        this.router.navigate(['/shop/' + item.id]);
    }

}
