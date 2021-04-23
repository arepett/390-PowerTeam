import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MnbookService {
  apiUrl = 'https://raw.githubusercontent.com/arepett/390-PowerTeam/main/mangas.json'

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(`${this.apiUrl}`);
  }

  getBook(bookname: string) {
    return this.http.get(`${this.apiUrl}/${bookname}`);
  }

}
