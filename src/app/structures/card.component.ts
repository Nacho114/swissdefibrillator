import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="container">
      <div class="image">
        <img [src]="'../assets/' + img" [alt]="alt" />
      </div>
      <div class="text-section">
        <h2>{{ title }}</h2>
        <p>
          <ng-content></ng-content>
        </p>
      </div>
    </div>
    <style>
      .container {
        width: 400px;
      }

      h2 {
        text-align: center;
      }

      img {
        border-radius: 8px;
        max-width: 400px;
        max-height: 300px;
        width: auto;
        height: auto;
      }
    </style>
  `,
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() title: string = '';
  @Input() img: string = '';
  @Input() alt: string = '';
  @Input() text: string = '';

  ngOnInit(): void {}
}
