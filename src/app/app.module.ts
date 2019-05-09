import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { Stock2Component } from './stock2/stock2.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';
import { PermissionGuard } from './guard/permission.guard';
import { Stock3Component } from './stock3/stock3.component';
import { Stock4Component } from './stock4/stock4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    Code404Component,
    Stock2Component,
    BuyerListComponent,
    SellerListComponent,
    ConsultComponent,
    Stock3Component,
    Stock4Component
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PermissionGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
