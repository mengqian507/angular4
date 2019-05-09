import { Component, OnInit } from '@angular/core';
import { StockService } from '../shared/stock.service';
import { AnotherStockService } from '../shared/another-stock.service';

@Component({
  selector: 'app-stock4',
  templateUrl: './stock4.component.html',
  styleUrls: ['./stock4.component.css'],
  providers: [{ provide: StockService, useClass: AnotherStockService }]
})
export class Stock4Component implements OnInit {
  private stock;
  constructor(public stockService: StockService) {}

  ngOnInit() {
    this.stock = this.stockService.getStock();
  }
}
