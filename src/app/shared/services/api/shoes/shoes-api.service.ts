import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IShoes } from 'src/app/shared/entity/shoes.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoesApiService {

    constructor(
        private request: HttpClient
    ) { }

    public getShoesList(params?: object): Observable<IShoes[]> {

        environment.httpOptions.params = new HttpParams();
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== null && value !== undefined) environment.httpOptions.params = environment.httpOptions.params.append(key, value);
            }
        }

        return this.request.get<IShoes[]>(environment.BASE_API + '/shoe', environment.httpOptions).pipe(retry({ count: 1, delay: 1000 }));
    }

    public getShoeById(id: number): Observable<IShoes> {
        environment.httpOptions.params = new HttpParams();
        return this.request.get<IShoes>(environment.BASE_API + '/shoe/' + id, environment.httpOptions);
    }

    public createShoe(shoe: IShoes): Observable<IShoes> {
        environment.httpOptions.params = new HttpParams();
        return this.request.post<IShoes>(environment.BASE_API + '/shoe', shoe, environment.httpOptions);
    }

    public updateShoe(shoe: IShoes): Observable<IShoes> {
        environment.httpOptions.params = new HttpParams();
        return this.request.put<IShoes>(environment.BASE_API + '/shoe/' + shoe.id, shoe, environment.httpOptions);
    }

    public deleteShoe(id: number): Observable<IShoes> {
        environment.httpOptions.params = new HttpParams();
        return this.request.delete<IShoes>(environment.BASE_API + '/shoe/' + id, environment.httpOptions);
    }

}
