import { Component, OnInit } from '@angular/core';
import { MnbookService } from 'src/app/mnbook.service';

@Component({
  selector: 'app-mnbook-list',
  template: `

    <main class="bg-img"><h1>MANGAS</h1></main>

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
export class MnbookListComponent implements OnInit {
  books!: any;

  constructor(private mnbookService: MnbookService) { }

  ngOnInit(): void {
    this.books = this.mnbookService.getBooks();
      // .subscribe(books => {
      //   console.log(books);
      //   this.books = books;
      // });
  }

  randomizer() {
    var titles = ['Another Volume 1', 'Bloom Into You Volume 1', 'Case Closed Volume 1', 'Dragon Ball', 'Erased Volume 1', 'Fairy Tail Volume 1', 'Given Volume 1', 'Haikyu Volume 1']

    var random = Math.floor(Math.random() * titles.length);
    var randomBook = titles[random];

    alert(randomBook);
  }
}
