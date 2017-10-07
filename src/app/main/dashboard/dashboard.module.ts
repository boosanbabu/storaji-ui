import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { OrdersService } from '../../core/services/orders.service';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  providers: [OrdersService]
})
export class DashboardModule { }
