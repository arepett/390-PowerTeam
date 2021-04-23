import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

    <div class="navbar is-black" role="navigation" aria-label="main navigation">
      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item" routerLink="/">
          BOOKWORM
        </a>
        <a (click)="toggleNavbar()" role="button" #navBurger class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navdrop">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <!-- menu -->
      <div id="navdrop" class="navbar-menu" #navMenu>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Browse Books
            </a>
            <hr class="dropdown-divider">
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" routerLink="/novels">
                Novels
              </a>
              <a class="navbar-item" routerLink="/childbooks">
                Childrens Books
              </a>
              <a class="navbar-item" routerLink="/comics">
                Comics
              </a>
              <a class="navbar-item" routerLink="/mangas">
                Mangas
              </a>
              <a class="navbar-item" routerLink="/webtoons">
                Webtoons
              </a>
            </div>
           </div> 
          <hr class="dropdown-divider">
          <a class="navbar-item" routerLink="/login">Login</a>
          <hr class="dropdown-divider">
          <a class="navbar-item" routerLink="signup">Sign Up</a>
        </div>
      </div>
    </div>
  `,
  styles: [`

    a:hover {
      background-color: #000;
      color: #fff; 
    }

  `]
})
export class HeaderComponent implements OnInit {

  @ViewChild('navBurger')
  navBurger!: ElementRef;
  @ViewChild('navMenu')
  navMenu!: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
}

  constructor() { }

  ngOnInit(): void {
  }

}
