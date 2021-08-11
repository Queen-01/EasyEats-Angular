import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  template:  `<h1>Edit Product</h1>`
})
export class ProductEditComponent implements OnInit {
  product!: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.productService.getProduct(id).subscribe(data =>{
      this.product = data;
    })
  }

}
