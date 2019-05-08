import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { Stock2Component } from './stock2/stock2.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';

// 注意：路由和组件是没有直接关系的，就是一个组件可以放在主路由里，同时也可以放在某个主路由里作为子路由
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // 重定向路由
  { path: 'home', component: HomeComponent },
  { path: 'consult', component: ConsultComponent, outlet: 'aux' },
  {
    path: 'stock',
    component: StockComponent,
    data: [{ isPro: true }],
    children: [
      { path: '', component: BuyerListComponent },
      { path: 'seller/:id', component: SellerListComponent }
    ]
  },
  { path: 'stock2/:id', component: Stock2Component },
  { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
