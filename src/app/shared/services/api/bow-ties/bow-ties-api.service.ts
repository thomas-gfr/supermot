import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IBowTies } from 'src/app/shared/entity/bow-ties.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BowTiesApiService {
    constructor(
        private request: HttpClient
    ) { }

    public getBowTiesList(params?: object): Observable<IBowTies[]> {

        environment.httpOptions.params = new HttpParams();
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== null && value !== undefined) environment.httpOptions.params = environment.httpOptions.params.append(key, value);
            }
        }

        return this.request.get<IBowTies[]>(environment.BASE_API + '/bow-tie', environment.httpOptions).pipe(retry({ count: 1, delay: 1000 }));
    }

    public getBowTieById(id: number): Observable<IBowTies> {
        environment.httpOptions.params = new HttpParams();
        return this.request.get<IBowTies>(environment.BASE_API + '/bow-tie/' + id, environment.httpOptions);
    }

    public createBowTie(bowTie: IBowTies): Observable<IBowTies> {
        environment.httpOptions.params = new HttpParams();
        return this.request.post<IBowTies>(environment.BASE_API + '/bow-tie', bowTie, environment.httpOptions);
    }

    public updateBowTie(bowTie: IBowTies): Observable<IBowTies> {
        environment.httpOptions.params = new HttpParams();
        return this.request.put<IBowTies>(environment.BASE_API + '/bow-tie/' + bowTie.id, bowTie, environment.httpOptions);
    }

    public deleteBowTie(id: number): Observable<IBowTies> {
        environment.httpOptions.params = new HttpParams();
        return this.request.delete<IBowTies>(environment.BASE_API + '/bow-tie/' + id, environment.httpOptions);
    }

}
