import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CheckOut} from "../entities/checkout";
import * as $ from "jquery";

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})

export class BorrowComponent implements OnInit {
  borrowForm:FormGroup;
  submitted = false;
  objectKeys = Object.keys;
  toStr = JSON.stringify;
  users:Object;
  books:Object;
  allBooks:Object;
  todayDate:Date = new Date();

  constructor(public data:DataService, private formBuilder:FormBuilder) {

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
    // @ts-ignore
    for (let book of this.allBooks) {
      if (this.data.getCheckedOutData().filter(item => item.bookId == book.id).length == 0) {
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
      books.push(bookData);
    }
    this.allBooks = books;
  }

  getReturnDate() {
    var daysDiff = this.borrowForm.controls.checkOutLength.value;
    var date = new Date(this.todayDate);
    date.setDate(date.getDate() + parseInt(daysDiff));
    return date;
  }

  checkOutBook() {
    this.submitted = true;
    if (this.borrowForm.valid) {
      var bookId = this.bookData.id;
      var bookTitle = this.bookData.title;
      var userId = this.borrowForm.controls.user.value;
      var returnDate = this.getReturnDate();
      var checkOutData = new CheckOut(bookId, bookTitle, userId, this.todayDate, returnDate);
      this.data.addToCheckedOut(checkOutData);
      $("#borrowMessage").show();
      this.books = this.getAvailableBooks(this.allBooks);
    }
    else {
      $("#borrowMessage").hide();
    }
  }

  get bookData() {
    return JSON.parse(this.borrowForm.controls.book.value);
  }
}
