import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="is-black hero-foot">
      <div class="container content has-text-centered">
        <p>This site is made for educational purposes, I take no credit for any images used within this website</p>
      </div>
    </footer>
  `,
  styles: [`

    footer {
      color: #fff;
      background-color: #000;
      padding: 40px;
    }

  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
