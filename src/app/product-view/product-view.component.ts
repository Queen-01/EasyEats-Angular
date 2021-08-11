import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  template: `<h1>View Product</h1>`
})
export class ProductViewComponent implements OnInit {
  product!: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.productService.getProduct(id).subscribe(data => {
      this.product = data;
    })
  }

}
