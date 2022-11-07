import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBelt } from 'src/app/shared/entity/belt.model';


@Injectable({
  providedIn: 'root'
})
export class BeltApiService {

    constructor(
        private request: HttpClient
    ) { }

    public getBeltList(params?: object): Observable<IBelt[]> {

        environment.httpOptions.params = new HttpParams();
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== null && value !== undefined) environment.httpOptions.params = environment.httpOptions.params.append(key, value);
            }
        }

        return this.request.get<IBelt[]>(environment.BASE_API + '/belt', environment.httpOptions).pipe(retry({ count: 1, delay: 1000 }));
    }

    public getBeltById(id: number): Observable<IBelt> {
        environment.httpOptions.params = new HttpParams();
        return this.request.get<IBelt>(environment.BASE_API + '/belt/' + id, environment.httpOptions);
    }

    public createBelt(belt: IBelt): Observable<IBelt> {
        environment.httpOptions.params = new HttpParams();
        return this.request.post<IBelt>(environment.BASE_API + '/belt', belt, environment.httpOptions);
    }

    public updateBelt(belt: IBelt): Observable<IBelt> {
        environment.httpOptions.params = new HttpParams();
        return this.request.put<IBelt>(environment.BASE_API + '/belt/' + belt.id, belt, environment.httpOptions);
    }

    public deleteBelt(id: number): Observable<IBelt> {
        environment.httpOptions.params = new HttpParams();
        return this.request.delete<IBelt>(environment.BASE_API + '/belt/' + id, environment.httpOptions);
    }

}
