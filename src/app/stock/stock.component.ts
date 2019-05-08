import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private stockId: number;
  private isPro: boolean;
  constructor(private routeInfo: ActivatedRoute) {}

  ngOnInit() {
    // 接受从a标签里传递过来的参数  （参数快照）
    this.stockId = this.routeInfo.snapshot.queryParams.id;
    // 当点击两个按钮都跳转到同一个组件，但是传参不一样时，需要这样获取参数  （参数订阅）
    this.routeInfo.params.subscribe(
      (params: Params) => (this.stockId = params.id)
    );

    this.isPro = this.routeInfo.snapshot.data[0].isPro;
  }
}
