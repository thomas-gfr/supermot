import { Component, OnInit } from '@angular/core';
import { IArticles } from 'src/app/shared/entity/articles.model';
import { ArticlesApiService } from 'src/app/shared/services/api/articles/articles-api.service';
import { filter } from 'rxjs/operators';
import { UrlHandlingStrategy } from '@angular/router';


export interface TemoignageClient {
    clientID: number,
    commentID: number,
    comment: string
} 
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})    
    
export class LandingPageComponent implements OnInit {

    public listObject: IArticles[] = []
    public listTemoignage: Array<TemoignageClient> = [
        { clientID: 1, commentID: 1, comment: "La qualité du tissu est exceptionnel ! J'ai acheté un costume et je ne suis pas déçus, il est confortable, classe et élégant tous mes collègues ont voulu savoir où je l'ai acheté. C'est devenu ma marque préféré pour mes habits de travail et cravate." },
    ]

    constructor(
        private articleApiService: ArticlesApiService,
    ) { }

    ngOnInit(): void {
        this.articleApiService.getArticlesList().subscribe((data: IArticles[]) => {
            this.listObject = data.filter(element => element.groupe == 1);
        })
    }

}
