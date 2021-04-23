import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-single',
  template: `
    <section class="section">
      <div class="container">
        <div class="card" *ngIf="book">
          <img src="img_url">
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class BookSingleComponent implements OnInit {
  book: any;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const bookname = params['bookname'];

      this.bookService.getBook(bookname)
        .subscribe(book => this.book = book);
    });

  }

}
