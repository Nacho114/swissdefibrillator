import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  template: `
    <div class="container">
      <fa-icon
        (click)="onActivate()"
        class="icon"
        [icon]="arrow"
        size="2x"
      ></fa-icon>
    </div>
    <style>
      .container {
        padding: 5em;
        display: flex;
        justify-content: center;
      }

      .icon:hover {
        cursor: pointer;
        color: var(--global-color-primary);
      }
    </style>
  `,
})
export class FooterComponent implements OnInit {
  arrow = faArrowUp;

  constructor() {}

  ngOnInit(): void {}

  onActivate() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 0);
  }
}
