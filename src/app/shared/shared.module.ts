import { NgModule } from '@angular/core';
import { CardComponent } from './component/card/card.component';
import { ListComponent } from './component/list/list.component';
import { SupermotDropdownComponent } from './form/supermot-dropdown/supermot-dropdown.component';
import { SupermotInputComponent } from './form/supermot-input/supermot-input.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { SupermotButtonComponent } from './component/supermot-button/supermot-button.component';


const PRIME_NG= [
    DropdownModule,
    InputTextModule,
    CardModule,
    ButtonModule
]

const COMPONENTS = [
    CardComponent,
    ListComponent,
    SupermotDropdownComponent,
    SupermotInputComponent
]
@NgModule({
  declarations: [
    ...COMPONENTS,
    SupermotButtonComponent,
  ],
  imports: [
    BrowserModule,
    ...PRIME_NG,

  ],
  providers: [],

  exports: [ ...PRIME_NG, ...COMPONENTS]
})
export class SharedModule { }
