import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IArticles } from 'src/app/shared/entity/articles.model';

@Injectable({
    providedIn: 'root'
})
export class ShopService {
    item$ = new BehaviorSubject<IArticles[] | null>(null);

    constructor() { }
}
