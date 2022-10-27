import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  template: `
    <div class="page-container">
      <h1 class="fancy-h1">Training</h1>
      <div class="second-section">
     / <div class="card-grid">
          <app-card
            title="BLS First Aid"
            img="/training/courses.jpg"
            alt="BLS First Aid Course"
          >
            BLS-AED-SRC including First Aid, with a BFSA certified Instructor.
          </app-card>
          <app-card
            title="Certification"
            img="/training/diploma.jpg"
            alt="BLS First Aid Diploma"
          >
            First Aid Course for the Driving License authorized by FEDRO.
          </app-card>
          <app-card
            title="Multilingual training"
            img="/training/flags.jpg"
            alt="Multilingual first Aid Course"
          >
            Our courses are offered in English, German and French.
          </app-card>
        </div>
        <div class="button">
          <button routerLink="/contact">Book now</button>
        </div>
      </div>
    </div>
    <style>
      .second-section {
        margin-top: 2em;
        padding-top: 2em;
        background-color: var(--global-color-light);
        padding-bottom: 5%;
      }

      .second-section p {
        text-align: center;
        font-size: large;
        font-weight: light;
      }

      .second-section .button {
        padding-top: 2.3em;
        text-align: center;
      }

      .card-grid {
        margin-top: 3em;
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 4em;
    </style>
  `,
})
export class TrainingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
