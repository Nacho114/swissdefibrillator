import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  template: `
    <div class="page-container">
      <h1 class="fancy-h1">Service and Maintenance</h1>
      <div class="first-section">
        <div class="image">
          <img
            class="flag"
            src="../assets/service/repair.svg"
            alt="Multilingual flags"
          />
        </div>
        <div class="text">
          <ul>
            <li>Annual verification.</li>

            <li>Regular replacement of electrodes and battery.</li>
            <li>Repair and/or replacement of the defibrillator(s).</li>
            <li>Emergency delivery of a replacement defibrillator.</li>
            <li>Emergency response costs are included.</li>
            <li>Reading of the electrocardiogram.</li>
            <li>Free 24/7 Customer service.</li>
          </ul>
        </div>
      </div>
      <div class="button">
        <button routerLink="/contact">More info</button>
      </div>
    </div>
    <style>
      .page-container {
        margin-bottom: 10%;
      }
      .first-section {
        margin-top: 4em;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .text {
        align-self: center;
        font-size: large;
        font-weight: 600;
        line-height: 2;
      }
      .button {
        padding-top: 5em;
        text-align: center;
      }
    </style>
  `,
})
export class ServiceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
