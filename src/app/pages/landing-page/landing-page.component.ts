import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public listObject: any[] = [
    {
      header: 'Header 1',
      body: 'Body 1',
      footer: 'Footer 1'
    },
    {
      header: 'Header 1',
      body: 'Body 1',
      footer: 'Footer 1'
      
    },
    {
      header: 'Header 1',
      body: 'Body 1',
      footer: 'Footer 1'
      
    },
    {
      header: 'Header 1',
      body: 'Body 1',
      footer: 'Footer 1'
      
    },
    {
      header: 'Header 1',
      body: 'Body 1',
      footer: 'Footer 1'
      
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
