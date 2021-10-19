import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal :number = 0;
  public orders:any;
  public tables:any;
  public waiters:any;

  constructor(
    private cartService:CartService,
    private apiService:ApiService
    ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

    this.apiService.apiCallOrderTypes().subscribe((response: any) => {
      this.orders = response;
    });

    this.apiService.apiCallTables().subscribe((response: any) => {
      this.tables = response;
    });

    this.apiService.apiCallWaiters().subscribe((response: any) => {
      this.waiters = response;
      console.log(this.waiters + "waiters")
    });


  }

  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }

  

  emptyCart(){
    this.cartService.removeAllCart();
  }

}
