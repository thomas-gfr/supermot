import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ITie } from 'src/app/shared/entity/tie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TieApiService {

    constructor(
        private request: HttpClient
    ) { }

    public getTiesList(params?: object): Observable<ITie[]> {

        environment.httpOptions.params = new HttpParams();
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== null && value !== undefined) environment.httpOptions.params = environment.httpOptions.params.append(key, value);
            }
        }

        return this.request.get<ITie[]>(environment.BASE_API + '/tie', environment.httpOptions).pipe(retry({ count: 1, delay: 1000 }));
    }

    public getTieById(id: number): Observable<ITie> {
        environment.httpOptions.params = new HttpParams();
        return this.request.get<ITie>(environment.BASE_API + '/tie/' + id, environment.httpOptions);
    }

    public createTie(tie: ITie): Observable<ITie> {
        environment.httpOptions.params = new HttpParams();
        return this.request.post<ITie>(environment.BASE_API + '/tie', tie, environment.httpOptions);
    }

    public updateTie(tie: ITie): Observable<ITie> {
        environment.httpOptions.params = new HttpParams();
        return this.request.put<ITie>(environment.BASE_API + '/tie/' + tie.id, tie, environment.httpOptions);
    }

    public deleteTie(id: number): Observable<ITie> {
        environment.httpOptions.params = new HttpParams();
        return this.request.delete<ITie>(environment.BASE_API + '/tie/' + id, environment.httpOptions);
    }

}
