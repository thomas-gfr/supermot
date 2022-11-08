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
import {InputNumberModule} from 'primeng/inputnumber';
import { SupermotInputNumberComponent } from './form/supermot-input-number/supermot-input-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {SelectButtonModule} from 'primeng/selectbutton';


const PRIME_NG= [
    DropdownModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    InputNumberModule,
    ToastModule,
    SelectButtonModule
]

const COMPONENTS = [
    CardComponent,
    ListComponent,
    SupermotDropdownComponent,
    SupermotInputComponent,
    SupermotInputNumberComponent,
    SupermotButtonComponent
]
@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ...PRIME_NG,

  ],
  providers: [],

  exports: [ ...PRIME_NG, ...COMPONENTS]
})
export class SharedModule { }
