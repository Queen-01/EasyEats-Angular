import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];

  public constructor() {
    this.products = [
      new Product(1, 'La Ratatulie', 'For the best Italian Dishes'),
      new Product(2, 'Purple Hibiscus', 'Drinks Coldly Served'),
      new Product(3, 'Power Bank', 'Ask For chomas you got it'),
      new Product(4, 'Americana', 'burgers best served hot'),
    ];
  }
  public getProducts(): Observable<Product[]> {
    return of(this.products);
  }
  public getProduct(id: number): Observable<Product> {
    var Product = this.products.find((i) => i.productID == id);
    return of();
  }
}
