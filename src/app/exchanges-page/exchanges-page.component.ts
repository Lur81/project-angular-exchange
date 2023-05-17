import { ICurrencyList, IRate } from '../interface/interface-exchanges';
import { ExchangesService } from './../shared/services/exchanges.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchanges-page',
  templateUrl: './exchanges-page.component.html',
  styleUrls: ['./exchanges-page.component.scss']
})
export class ExchangesPageComponent implements OnInit{
  currency: string = "EUR";
  newCurrency: string = "USD";
  quantity:number = 1;
  rates:IRate ={};
  currencyList: ICurrencyList = {base: 'EUR', 
                                  quantity: 0, 
                                  rates: {}};
  constructor(private exchangesService: ExchangesService) { }
  
  getCurrency(newCurrency: any){
    this.currencyList.base = newCurrency;
    this.exchangesService.getExchanges(this.currencyList.base).subscribe((res:any) =>{
      this.currencyList = res;
      
    });
  };
  
  ngOnInit(): void {
    this.exchangesService.getExchanges(this.currencyList.base).subscribe((res:any) =>{
      console.log(this.currencyList.base)
      this.currencyList = res;
      
    });
  }
}
