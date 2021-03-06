import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/components/error.component';
import { AboutComponent } from './shared/components/about.component';
import { AuthGuard } from './core/services/auth.guard';
import { ProductsComponent } from './main/products/products.component';
import { CustomersComponent } from './main/customers/customers.component';
import { OrdersComponent } from './main/orders/orders.component';
import { ReportComponent } from './main/orders/report/report.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component:OrdersComponent },
      { path: '404', component: ErrorComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', component: ErrorComponent, pathMatch: 'full' }
    ], { useHash: true })
  ],
  declarations: [
    ErrorComponent,
    AboutComponent
  ],
  providers: [AuthGuard],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
