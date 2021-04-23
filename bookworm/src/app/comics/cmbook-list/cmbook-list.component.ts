import { Component, OnInit } from '@angular/core';
import { CmbookService } from 'src/app/cmbook.service';

@Component({
  selector: 'app-cmbook-list',
  template: `

    <main class="bg-img"><h1>COMICS</h1></main>
    
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <button class="button btn2 is-success">Filter</button>
        </div>
      </div>
      <div class="level-item" style="margin-top: 50px;">
        <div class="field has-addons">
          <p class="control">
            <input class="input" type="text" placeholder="Find a book">
          </p>
          <p class="control">
            <button class="button is-success">
              Search
            </button>
          </p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <button class="button btn is-success" (click)="randomizer()">Randomize</button>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline" *ngIf="books">
          <div class="column is-4" *ngFor="let book of books | async">

            <div class="card">
              <div class="card-content">
                <a [href]="book.link"><img [src]="book.img_url" [alt]="book.img_alt"><br /><p>{{ book.title }}</p></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  `,
  styles: [`

    .card {
      background-color: #E3DDD3;
    }

    .bg-img {
      background-image: url(https://wallpaperaccess.com/full/124383.jpg);
      background-size: cover;
      opacity: 70%;
      padding: 50px;
    }

    h1 {
      color: #fff;
      text-align: center;
      font-size: 2rem;
      letter-spacing: 2px;
    }

    img {
      width: auto;
      height: 200px;
      margin-left: auto;
      margin-right: auto;
      display: block
    }

    p {
      text-align: center;
      color: #000;
      font-size: 1rem;
    }

    p:hover {
      color: green;
    }

    .btn {
      float: right;
      margin-top: 50px;
      margin-left: 50px;
      margin-right: 50px; 
      margin-bottom: 0;
    }

    .btn2 {
      margin-top: 50px;
      margin-left: 50px;
      margin-right: 50px; 
      margin-bottom: 0;
    }

    .float {
      float: center;
      margin-left: 50px;
    }

  `]
})
export class CmbookListComponent implements OnInit {
  books!: any;

  constructor(private cmbookService: CmbookService) { }

  ngOnInit(): void {
    this.books = this.cmbookService.getBooks();
      // .subscribe(books => {
      //   console.log(books);
      //   this.books = books;
      // });
  }

  randomizer() {
    var titles = ["A Bug's Gift (1991) #1", 'B1N4RY (2004) #1A', 'Captian America (1st Series - 1968)', 'Daken Dark Wolverine (2010) #1A', 'E Is for Extinction (2015) #1A', 'Fables (2002) #1A cover', 'G.O.T.H. (1995 Verotik) #1', 'Hack Slash (2004) #1']

    var random = Math.floor(Math.random() * titles.length);
    var randomBook = titles[random];

    alert(randomBook);
  }

}
