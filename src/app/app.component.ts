import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<div class="container">
      <app-header></app-header>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
    <app-footer></app-footer>
    <style>
      .container {
        padding-top: 4em;
      }
      .content {
        margin-top: 2em;
      }
    </style>`,
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {
        name: 'description',
        content: 'Home page for a defibrillator web shop',
      },
      {
        name: 'author',
        content: 'Swiss Defibrillator',
      },
      {
        name: 'keywords',
        content:
          'Defibrillators, défibrillateur, First Aid Training, premiers secours, Ausbildung, Formation AED, Erste Hilfe, BLS-AED, CPR, Maintenance for defibrillators, Electrodes for defibrillators, Batteries for defibrillators, Swiss, Switzerland, Suisse',
      },
    ]);
    this.title.setTitle('Swiss Defibrillator Home Page');
  }
  ngOnInit(): void {}
}
