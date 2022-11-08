import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFinalShopComponent } from './pages/form-final-shop/form-final-shop.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ShoppingFunnelComponent } from './pages/shopping-funnel/shopping-funnel.component';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'shop/funnel',
        component: ShoppingFunnelComponent
    },
    {
        path: 'shop/payment',
        component: FormFinalShopComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
