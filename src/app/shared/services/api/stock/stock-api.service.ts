import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IStock } from 'src/app/shared/entity/stock.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockApiService {

    constructor(
        private request: HttpClient
    ) { }

    public getIStocksList(params?: object): Observable<IStock[]> {

        environment.httpOptions.params = new HttpParams();
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== null && value !== undefined) environment.httpOptions.params = environment.httpOptions.params.append(key, value);
            }
        }

        return this.request.get<IStock[]>(environment.BASE_API + '/stock', environment.httpOptions).pipe(retry({ count: 1, delay: 1000 }));
    }

    public getStockById(id: number): Observable<IStock> {
        environment.httpOptions.params = new HttpParams();
        return this.request.get<IStock>(environment.BASE_API + '/stock/' + id, environment.httpOptions);
    }

    public createStock(stock: IStock): Observable<IStock> {
        environment.httpOptions.params = new HttpParams();
        return this.request.post<IStock>(environment.BASE_API + '/stock', stock, environment.httpOptions);
    }

    public updateStock(stock: IStock): Observable<IStock> {
        environment.httpOptions.params = new HttpParams();
        return this.request.put<IStock>(environment.BASE_API + '/stock/' + stock.id, stock, environment.httpOptions);
    }

    public deleteStock(id: number): Observable<IStock> {
        environment.httpOptions.params = new HttpParams();
        return this.request.delete<IStock>(environment.BASE_API + '/stock/' + id, environment.httpOptions);
    }

}
