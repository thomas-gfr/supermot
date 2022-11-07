import { NgModule } from '@angular/core';
import { CardComponent } from './component/card/card.component';
import { ListComponent } from './component/list/list.component';
import { SupermotDropdownComponent } from './form/supermot-dropdown/supermot-dropdown.component';
import { SupermotInputComponent } from './form/supermot-input/supermot-input.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { BrowserModule } from '@angular/platform-browser';

const PRIME_NG= [
    DropdownModule,
    InputTextModule,
    CardModule
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
  ],
  imports: [
    BrowserModule,
    ...PRIME_NG,

  ],
  providers: [],

  exports: [ ...PRIME_NG, ...COMPONENTS]
})
export class SharedModule { }
