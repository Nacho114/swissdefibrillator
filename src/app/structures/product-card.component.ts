import { Component, Input, OnInit } from '@angular/core';
import { Product, PRODUCT_FOLDER_PATH } from '../business/product';

@Component({
  selector: 'app-product',
  template: `<div class="container">
      <img
        class="flag"
        [src]="folder_path + product.path"
        [alt]="product.title"
      />
      <div class="info">
        <div class="title">{{ product.title }}</div>
        <div class="Summary">
          {{ product.summary }}
        </div>
        <!-- <div class="price">Price chf {{ product.price }}</div> -->
      </div>
    </div>
    <style>
      .info {
        margin-top: 0.3em;
        display: grid;
        gap: 0.3em;
        width: 400px;
      }

      .title {
        font-size: x-large;
        font-weight: bold;
      }

      .price {
        font-size: medium;
        font-weight: bold;
      }

      img {
        border-radius: 4px;
        width: 350px;
        height: 350px;
      }
    </style> `,
})
export class ProductComponent implements OnInit {
  constructor() {}
  @Input()
  product!: Product;
  folder_path = PRODUCT_FOLDER_PATH;

  ngOnInit(): void {}
}
