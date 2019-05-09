import { Injectable } from '@angular/core';
import { StockService, Stock } from './stock.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherStockService implements StockService {
  getStock(): import ('./stock.service').Stock {
    return new Stock(2, '微软');
  }

  constructor(public logger: LoggerService) {}
}
