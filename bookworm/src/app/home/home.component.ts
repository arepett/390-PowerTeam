import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">

        <h1 class="title">
          WELCOME BOOKWORM!
        </h1>
        <button class="button is-light ">
          <a routerLink="/novels">Start Browsing</a>
        </button>

      </div>
    </div>
  </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/imgs/pexels-leah-kelley-373465.jpg') !important;
      min-height: 90vh;
      background-size: cover;
      background-position: center center;
      opacity: 60%;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
