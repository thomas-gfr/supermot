import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ICufflinks } from 'src/app/shared/entity/cufflinks.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CufflinksApiService {

    constructor(
        private request: HttpClient
    ) { }

    public getCufflinksList(params?: object): Observable<ICufflinks[]> {

        environment.httpOptions.params = new HttpParams();
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== null && value !== undefined) environment.httpOptions.params = environment.httpOptions.params.append(key, value);
            }
        }

        return this.request.get<ICufflinks[]>(environment.BASE_API + '/cufflink', environment.httpOptions).pipe(retry({ count: 1, delay: 1000 }));
    }

    public getCufflinkById(id: number): Observable<ICufflinks> {
        environment.httpOptions.params = new HttpParams();
        return this.request.get<ICufflinks>(environment.BASE_API + '/cufflink/' + id, environment.httpOptions);
    }

    public createCufflink(cufflink: ICufflinks): Observable<ICufflinks> {
        environment.httpOptions.params = new HttpParams();
        return this.request.post<ICufflinks>(environment.BASE_API + '/cufflink', cufflink, environment.httpOptions);
    }

    public updateCufflink(cufflink: ICufflinks): Observable<ICufflinks> {
        environment.httpOptions.params = new HttpParams();
        return this.request.put<ICufflinks>(environment.BASE_API + '/cufflink/' + cufflink.id, cufflink, environment.httpOptions);
    }

    public deleteCufflink(id: number): Observable<ICufflinks> {
        environment.httpOptions.params = new HttpParams();
        return this.request.delete<ICufflinks>(environment.BASE_API + '/cufflink/' + id, environment.httpOptions);
    }

}
