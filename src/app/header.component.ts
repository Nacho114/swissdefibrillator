import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="container">
      <div class="logo" routerLink="/">
        <img class="flag" src="../assets/logo-small.svg" alt="logo" />
      </div>
      <nav>
        <a
          routerLink="/"
          routerLinkActive="selected"
          [routerLinkActiveOptions]="{ exact: true }"
          >Home</a
        >
        <a routerLink="/products" routerLinkActive="selected">Products</a>
        <a routerLink="/training" routerLinkActive="selected">Training</a>
        <a routerLink="/service" routerLinkActive="selected">Service</a>
        <a routerLink="/contact" routerLinkActive="selected">Contact</a>
      </nav>
    </div>
    <style>
      .container {
        margin-left: 10%;
        margin-right: 10%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20%;
      }

      nav {
        display: flex;
        gap: 2em;
      }

      a {
        color: var(--global-color-gray);
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
      }

      a:visited {
        text-decoration: none;
      }

      .selected {
        color: var(--global-color-primary);
        text-decoration: underline;
      }

      .logo {
        cursor: pointer;
      }

      a:hover {
        color: var(--global-color-primary);
        text-decoration: underline;
        text-decoration-color: var(--global-color-primary);
      }
    </style>
  `,
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
