import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IArticles } from 'src/app/shared/entity/articles.model';


@Injectable({
  providedIn: 'root'
})
export class ArticlesApiService {

    constructor(
        private request: HttpClient
    ) { }

    public getArticlesList(params?: object): Observable<IArticles[]> {

        environment.httpOptions.params = new HttpParams();
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== null && value !== undefined) environment.httpOptions.params = environment.httpOptions.params.append(key, value);
            }
        }

        return this.request.get<IArticles[]>(environment.BASE_API + '/articles', environment.httpOptions).pipe(retry({ count: 1, delay: 1000 }));
    }

    public getarticleById(id: number): Observable<IArticles> {
        environment.httpOptions.params = new HttpParams();
        return this.request.get<IArticles>(environment.BASE_API + '/articles/' + id, environment.httpOptions);
    }

    public createArticle(articles: IArticles): Observable<IArticles> {
        environment.httpOptions.params = new HttpParams();
        return this.request.post<IArticles>(environment.BASE_API + '/articles', articles, environment.httpOptions);
    }

    public updateArticle(articles: IArticles): Observable<IArticles> {
        environment.httpOptions.params = new HttpParams();
        return this.request.put<IArticles>(environment.BASE_API + '/articles/' + articles.id, articles, environment.httpOptions);
    }

    public deleteArticle(id: number): Observable<IArticles> {
        environment.httpOptions.params = new HttpParams();
        return this.request.delete<IArticles>(environment.BASE_API + '/articles/' + id, environment.httpOptions);
    }

}
