import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IShirt } from 'src/app/shared/entity/shirt.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShirtApiService {

    constructor(
        private request: HttpClient
    ) { }

    public getShirtsList(params?: object): Observable<IShirt[]> {

        environment.httpOptions.params = new HttpParams();
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== null && value !== undefined) environment.httpOptions.params = environment.httpOptions.params.append(key, value);
            }
        }

        return this.request.get<IShirt[]>(environment.BASE_API + '/shirt', environment.httpOptions).pipe(retry({ count: 1, delay: 1000 }));
    }

    public getShirtById(id: number): Observable<IShirt> {
        environment.httpOptions.params = new HttpParams();
        return this.request.get<IShirt>(environment.BASE_API + '/shirt/' + id, environment.httpOptions);
    }

    public createShirt(shirt: IShirt): Observable<IShirt> {
        environment.httpOptions.params = new HttpParams();
        return this.request.post<IShirt>(environment.BASE_API + '/shirt', shirt, environment.httpOptions);
    }

    public updateShirt(shirt: IShirt): Observable<IShirt> {
        environment.httpOptions.params = new HttpParams();
        return this.request.put<IShirt>(environment.BASE_API + '/shirt/' + shirt.id, shirt, environment.httpOptions);
    }

    public deleteShirt(id: number): Observable<IShirt> {
        environment.httpOptions.params = new HttpParams();
        return this.request.delete<IShirt>(environment.BASE_API + '/shirt/' + id, environment.httpOptions);
    }

}
