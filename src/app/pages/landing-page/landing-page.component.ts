import { Component, OnInit } from '@angular/core';
import { ISuit } from 'src/app/shared/entity/suit.model';
import { SuitApiService } from 'src/app/shared/services/api/suit/suit-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    public listObject: ISuit[] = []

    constructor(
        private suitApiService: SuitApiService
    ) { }

    ngOnInit(): void {
        this.suitApiService.getSuitList().subscribe((data: ISuit[]) => {
            this.listObject = data;
        })
    }

}
