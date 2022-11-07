import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShopService {
    item$ = new BehaviorSubject<any[] | null>(null);

    constructor() { }
}
