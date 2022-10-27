import { Component, OnInit } from '@angular/core';
import { PRODUCTS, PRODUCT_FOLDER_PATH } from '../business/product';

@Component({
  selector: 'app-products',
  template: `
    <div class="page-container">
      <h1 class="fancy-h1">Products</h1>
      <div class="product-grid">
        <div *ngFor="let p of products">
          <app-product
            class="product"
            routerLink="/contact"
            [product]="p"
          ></app-product>
        </div>
      </div>
    </div>
    <style>
      .product-grid {
        padding-top: 3em;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-self: center;
        gap: 2.5em;
      }
      .product {
        cursor: pointer;
      }
    </style>
  `,
})
export class ProductsComponent implements OnInit {
  constructor() {
    console.log(this.products);
  }

  products = PRODUCTS;
  folder_path = PRODUCT_FOLDER_PATH;

  ngOnInit(): void {}
}
