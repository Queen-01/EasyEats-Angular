import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  template: `<h1>Add Product</h1>`,
})
export class ProductAddComponent implements OnInit {
  product! : Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
