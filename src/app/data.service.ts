import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('./src/app/testData/users.json');
  }

  getBooks(){
    return this.http.get('./src/app/testData/books.json');
  }

  getBookInfo(bookId){
    return this.http.get('./src/app/testData/books.json/'+bookId);
  }
}
