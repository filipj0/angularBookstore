import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Globals} from "./testData/global";
import {CheckOut} from "./entities/checkout";
import {Book} from "./entities/book";
import {OnInit} from "../../node_modules/@angular/core/src/metadata/lifecycle_hooks";

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

  getCheckedOutData() {
    return this.globals.checkedOut;
  }

  addToCheckedOut(data) {
    this.globals.checkedOut.push(data);
  }

  removeFromCheckedOut() {
    this.globals.checkedOut = [];
  }

  getCheckedOutData() {
    return this.globals.checkedOut;
  }

  getBookInfo(attribute) {

  }
}
