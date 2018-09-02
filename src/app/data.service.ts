import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Globals} from "./testData/global";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient, private globals:Globals) {
  }

  getUsers() {
    return this.http.get('./src/app/testData/users.json');
  }

  getBooks() {
    return this.http.get('./src/app/testData/books.json');
  }

  addToCheckedOut(checkOutItem){
    this.globals.checkedOut.push(checkOutItem);
    localStorage["checkedOut"] = JSON.stringify(this.globals.checkedOut);
  }

  removeFromCheckedOut(id) {
    this.globals.checkedOut = this.globals.checkedOut.filter(function( item ) {
      return item.id !== id;
    })
  }

  getCheckedOutData() {
    return this.globals.checkedOut;
  }
}
