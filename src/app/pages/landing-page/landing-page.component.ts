import { Component, OnInit } from '@angular/core';
import { IArticles } from 'src/app/shared/entity/articles.model';
import { ArticlesApiService } from 'src/app/shared/services/api/articles/articles-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    public listObject: IArticles[] = []

    constructor(
        private articleApiService: ArticlesApiService,
    ) { }

    ngOnInit(): void {
        this.articleApiService.getArticlesList().subscribe((data: IArticles[]) => {
            this.listObject = data;
        })
    }

}
