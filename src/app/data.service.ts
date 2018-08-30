import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Globals} from "./testData/global";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private globals:Globals) { }

  getUsers(){
    return this.http.get('./src/app/testData/users.json');
  }

  getBooks(){
    return this.http.get('./src/app/testData/books.json');
  }

  getCheckedOutData(){
    return this.globals.checkedOut;
  }

  addToCheckedOut(data){
    this.globals.checkedOut.push(data);
  }

  removeFromCheckedOut(){
    this.globals.checkedOut = [];
  }

  getBookInfo(bookId){
    return this.http.get('./src/app/testData/books.json/'+bookId);
  }
}
