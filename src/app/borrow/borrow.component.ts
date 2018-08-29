import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {NgModule} from "@angular/core";
import {CheckOut} from "../entities/checkout";
import {Globals} from "../testData/global";

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css'],
  providers: [Globals]
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class BorrowComponent implements OnInit {
  objectKeys = Object.keys;
  users$:Object;
  books$:Object;
  todayDate:Date = new Date();
  borrowForm:FormGroup;

    constructor(private data:DataService, private globals:Globals) {
  }

  ngOnInit() {
    this.borrowForm = new FormGroup({
      'bookId': new FormControl([
        Validators.required
      ])
    });

    this.data.getUsers().subscribe(
      data => this.users$ = data
    );

    this.data.getBooks().subscribe(
      data => this.books$ = data
    );
  }

  getReturnDate(days){
    var date = new Date(this.todayDate);
    date.setDate(date.getDate() + parseInt(days));
    return date;
  }

  checkOutBook(bookId, userId, checkoutLength){
    console.log("checkout start");
    var returnDate = this.getReturnDate(checkoutLength);
    var checkOutData = new CheckOut(bookId, userId, this.todayDate, returnDate);
    this.globals.addToCheckedOut(checkOutData);
    console.log("checked out", this.globals.checkedOut);
    document.getElementById("borrowMessage").innerHTML = "Posudba uspješna!";
  }
}
