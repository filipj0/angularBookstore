import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Form, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {NgModule} from "@angular/core";
import {CheckOut} from "../entities/checkout";
import {Globals} from "../testData/global";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css'],
  providers: [Globals]
})

export class BorrowComponent implements OnInit {
  borrowForm:FormGroup;
  submitted = false;
  objectKeys$ = Object.keys;
  users$:Object;
  books$:Object;
  allBooks:Object;
  todayDate$:Date = new Date();
  checkOut$:Object = {};

  constructor(private data:DataService, private formBuilder:FormBuilder) {

  }

  ngOnInit() {
    this.borrowForm = this.formBuilder.group({
      user: ['', Validators.required],
      book: ['', Validators.required],
      checkOutLength: ['', Validators.required]
    });

    this.data.getUsers().subscribe(
      data => this.users$ = data
    );

    this.data.getBooks().subscribe(
      data => this.getAvailableBooks(data)
    );
  }

  get f() {
    return this.borrowForm.controls;
  }

  getAvailableBooks(books) {
    this.allBooks = books;
    console.log("get available books");
    var availableBooks = [];
    var bookId;
    console.log("checkedOut", this.data.getCheckedOutData());
    for (bookId in books) {
      if (this.data.getCheckedOutData().filter(item => item.bookId == bookId).length == 0) {
        availableBooks.push(books[bookId]);
      }
    }
    console.log("checkedOut", this.data.getCheckedOutData());
    console.log("availableBooks", availableBooks);
    this.books$ = availableBooks;
  }

  getReturnDate(days) {
    var date = new Date(this.todayDate$);
    date.setDate(date.getDate() + parseInt(days));
    return date;
  }

  checkOutBook(bookId, userId, checkoutLength) {
    console.log("checkout start");
    this.submitted = true;
    if (this.borrowForm.valid) {
      var returnDate = this.getReturnDate(checkoutLength);
      var checkOutData = new CheckOut(bookId, userId, this.todayDate$, returnDate);
      this.data.addToCheckedOut(checkOutData);
      console.log("checked out",  this.data.getCheckedOutData());
      document.getElementById("borrowMessage").innerHTML = "Posudba uspješna!";
      this.books$ = this.getAvailableBooks(this.allBooks);
     this.getAvailableBooks(this.allBooks);
    }
  }
}
