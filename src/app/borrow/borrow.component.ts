import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Form, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {NgModule} from "@angular/core";
import {CheckOut} from "../entities/checkout";
import {Globals} from "../testData/global";
import {BrowserModule} from "@angular/platform-browser";
import {Book} from "../entities/book";

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css'],
  providers: [Globals]
})

export class BorrowComponent implements OnInit {
  borrowForm:FormGroup;
  submitted = false;
  objectKeys = Object.keys;
  users:Object;
  books:Object;
  allBooks:Object = this.data.getBooks();
  todayDate:Date = new Date();
  checkOut:Object = {};

  constructor(private data:DataService, private formBuilder:FormBuilder) {
    Array.prototype.
  }

  ngOnInit() {
    this.borrowForm = this.formBuilder.group({
      user: ['', Validators.required],
      book: ['', Validators.required],
      checkOutLength: ['', Validators.required]
    });

    this.data.getUsers().subscribe(
      data => this.users = data
    );

    this.data.getBooks().subscribe(
      data => this.books = this.getAvailableBooks(data)
    );

  }

  get f() {
    return this.borrowForm.controls;
  }

  getAvailableBooks(booksList) {
    this.prepareBooks(booksList);
    var availableBooks = [];
    for (let book of this.allBooks) {
      if (this.data.getCheckedOutData().filter(item => item.bookId == book.getId()).length == 0) {
        availableBooks.push(book);
      }
    }
    return availableBooks;
  }

  prepareBooks(booksList) {
    var books = [];
    var bookId;
    for (bookId in booksList) {
      var bookData = booksList[bookId];
      var book = new Book(bookId, bookData.title, bookData.author, bookData.year);
      books.push(bookData);
    }
    this.allBooks = books;
  }

  getReturnDate(days) {
    var date = new Date(this.todayDate);
    date.setDate(date.getDate() + parseInt(days));
    return date;
  }

  checkOutBook(bookId, userId, checkoutLength) {
    this.submitted = true;
    if (this.borrowForm.valid) {
      var returnDate = this.getReturnDate(checkoutLength);
      var checkOutData = new CheckOut(bookId, userId, this.todayDate, returnDate);
      this.data.addToCheckedOut(checkOutData);
      document.getElementById("borrowMessage").innerHTML = "Posudba uspješna!";
      this.books = this.getAvailableBooks(this.allBooks);
      this.getAvailableBooks(this.allBooks);
    }
  }
}
