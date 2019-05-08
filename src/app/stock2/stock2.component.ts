import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock2',
  templateUrl: './stock2.component.html',
  styleUrls: ['./stock2.component.css']
})
export class Stock2Component implements OnInit {
  private stockId: number;
  constructor(private routeInfo: ActivatedRoute) {}

  ngOnInit() {
    // 接受从a标签里传递过来的参数
    this.stockId = this.routeInfo.snapshot.params.id;
  }
}
