import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly BASE_URL = 'https://easyeatsodero.herokuapp.com';

  constructor(private http: HttpClient) { }


  apiCallShops() {
    return this.http.get(this.BASE_URL +'/api/v1/shops');
  }

  apiCallOrderTypes() {
    return this.http.get(this.BASE_URL +'/api/v1/order_types');
  }

  apiCallTables() {
    return this.http.get(this.BASE_URL +'/api/v1/tables');
  }

  apiCallWaiters() {
    return this.http.get(this.BASE_URL +'/api/v1/waiters');
  }

  apiCallMenuForShop(id:number) {
    return this.http.get(this.BASE_URL +'/api/v1/shops/'+id+'/menus ');
  }

  apiCallCusisnesForMenu(id:number) {
    return this.http.get(this.BASE_URL +'/api/v1/menus/'+id+'/cuisines ');
  }


  apiCallMenus() {
    return this.http.get(this.BASE_URL +'/api/v1/menus');
  }

  apiCallCusines() {
    return this.http.get(this.BASE_URL +'/api/v1/cuisines');
  }




}
