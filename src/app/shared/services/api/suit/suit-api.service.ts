import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ISuit } from 'src/app/shared/entity/suit.model';


@Injectable({
  providedIn: 'root'
})
export class SuitApiService {

    constructor(
        private request: HttpClient
    ) { }

    public getSuitList(params?: object): Observable<ISuit[]> {

        environment.httpOptions.params = new HttpParams();
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== null && value !== undefined) environment.httpOptions.params = environment.httpOptions.params.append(key, value);
            }
        }

        return this.request.get<ISuit[]>(environment.BASE_API + '/suit', environment.httpOptions).pipe(retry({ count: 1, delay: 1000 }));
    }

    public getSuitById(id: number): Observable<ISuit> {
        environment.httpOptions.params = new HttpParams();
        return this.request.get<ISuit>(environment.BASE_API + '/suit/' + id, environment.httpOptions);
    }

    public createSuit(suit: ISuit): Observable<ISuit> {
        environment.httpOptions.params = new HttpParams();
        return this.request.post<ISuit>(environment.BASE_API + '/suit', suit, environment.httpOptions);
    }

    public updateSuit(suit: ISuit): Observable<ISuit> {
        environment.httpOptions.params = new HttpParams();
        return this.request.put<ISuit>(environment.BASE_API + '/suit/' + suit.id, suit, environment.httpOptions);
    }

    public deleteSuit(id: number): Observable<ISuit> {
        environment.httpOptions.params = new HttpParams();
        return this.request.delete<ISuit>(environment.BASE_API + '/suit/' + id, environment.httpOptions);
    }

}
