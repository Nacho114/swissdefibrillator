import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="page-container">
      <div class="first-section">
        <div class="text">
          <h1>First Aid made Easy</h1>
          <p>Defibrillators.</p>
          <p>First Aid courses.</p>
          <p>Maintenance.</p>
          <h2>
            All in
            <span
              style="text-decoration: underline; text-decoration-color: var(--global-color-primary)"
              >One</span
            >
            Place
          </h2>
        </div>
        <img class="flag" src="../assets/home/doctors.svg" alt="Help" />
      </div>
      <div class="second-section">
        <h1>
          First Aid the Way It
          <span
            style="text-decoration: underline; text-decoration-color: var(--global-color-primary)"
            >Should</span
          >
          Should Be
        </h1>
        <p>Affordable, accessible and easy.</p>
        <div class="card-grid">
          <app-card
            title="Defibrillators"
            img="/home/defibrillator.jpg"
            alt="Defibrillators"
          >
            AED Defibrillators: Phillips and Zoll, Accessories: Electrodes,
            Batteries, Wall Cabinets, and more.
          </app-card>
          <app-card
            title="First Aid Courses"
            img="/home/courses.jpg"
            alt="First Aid Courses"
          >
            BLS-AED-SRC including First Aid, with a BFSA certified Instructor.
            First Aid Course for the Driving License authorized by FEDRO.
            Trainings in English, German and French.
          </app-card>
          <app-card
            title="Maintenance"
            img="/home/maintenance.jpg"
            alt="Maintenance and service"
          >
            Annual verification, Regular replacement and repair of electrodes
            and battery, Free 24/7 Customer service.
          </app-card>
        </div>
        <div class="button">
          <button routerLink="/products">Shop now</button>
        </div>
      </div>
    </div>
    <style>
      .first-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3em;
      }

      .first-section h1 {
        font-weight: 900;
        font-size: 3em;
        text-decoration: underline;
        text-decoration-color: var(--global-color-primary);
      }

      .first-section p {
        font-weight: 700;
        margin: 0;
        font-size: 2em;
      }

      .first-section h2 {
        font-weight: 800;
        font-size: 2em;
      }

      .first-section .text {
        text-align: center;
      }

      .second-section {
        margin-top: 8%;
        padding-top: 2%;
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
      }
    </style>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
