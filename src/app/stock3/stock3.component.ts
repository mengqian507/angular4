import { Component, OnInit } from '@angular/core';
import { StockService } from '../shared/stock.service';

@Component({
  selector: 'app-stock3',
  templateUrl: './stock3.component.html',
  styleUrls: ['./stock3.component.css']
})
export class Stock3Component implements OnInit {
  private stock;
  constructor(public stockService: StockService) {}

  ngOnInit() {
    this.stock = this.stockService.getStock();
  }
}
