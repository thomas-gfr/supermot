import { NgModule } from '@angular/core';
import { CardComponent } from './component/card/card.component';
import { ListComponent } from './component/list/list.component';
import { SupermotDropdownComponent } from './form/supermot-dropdown/supermot-dropdown.component';
import { SupermotInputComponent } from './form/supermot-input/supermot-input.component';


@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    SupermotInputComponent,
    SupermotDropdownComponent
  ],
  imports: [
  ],
  providers: [],
})
export class SharedModule { }
