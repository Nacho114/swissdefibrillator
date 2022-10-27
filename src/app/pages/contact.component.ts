import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="page-container">
      <h1>Contact Us!</h1>
      <p>
        If you would like to book a First Aid lesson, buy a defibrillator, or
        any other question, please reach out to us:
      </p>
      <div class="body">
        <div class="image">
          <img
            class="flag"
            src="../assets/contact/question.svg"
            alt="Question?"
          />
        </div>
        <div class="text">
          <h4>Contact details:</h4>
          <div>
            Email:
            <a
              href="mailto:monica.aleman@swissdefibrillator.com?subject=Inquiry"
            >
              monica.aleman@swissdefibrillator.com
            </a>
          </div>
          <div>
            Mobile:
            <a class="phone" href="tel:+41794412406">+41 79 441 2406</a>
          </div>
        </div>
      </div>
    </div>
    <style>
      .page-container {
        margin-bottom: 20%;
      }
      h1 {
        text-align: center;
        text-decoration: underline;
        text-decoration-color: var(--global-color-primary);
      }
      p {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
      }
      .body {
        margin-top: 2em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 4em;
        font-size: 18px;
      }
      .text {
        display: flex;
        flex-direction: column;
        align-self: center;
        gap: 2em;
      }
      .phone {
        text-decoration: none;
        color: black;
      }
    </style>
  `,
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
