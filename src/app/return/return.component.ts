import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import * as $ from "jquery";

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  checkOutItems;
  users: Object;
  json = JSON.parse;

  constructor(private data:DataService) {

  }

  ngOnInit() {
    this.checkOutItems = this.data.getCheckedOutData();

    this.data.getUsers().subscribe(
      data => this.users = data
    );
  }

  getUserName(userId){
    console.log("userId", userId)
    console.log("user", this.users[userId])
    return this.users[userId].name + " " + this.users[userId].surname;
  }

  calculateLateFees(item){
    var feePerDay = 10;
    var fee = 0;
    var today = new Date();
    var daysLate = Math.ceil((today.getTime() - item.getReturnDate().getTime()) / 86400000);
    if(daysLate > 0){
      fee = feePerDay * daysLate;
    }
    return fee + " kn";
  }

  selectItem(e){
    $("#returnContainer ul li").removeClass("selected");
    $(e.currentTarget).addClass("selected");
  }

  returnBook(){
    var selectedItem =  $("#returnContainer ul li.selected");

    if(selectedItem){
      $("#returnContainer .validate-msg").hide();
      var itemId = selectedItem.attr("itemId");
      this.data.removeFromCheckedOut(itemId);
      this.checkOutItems = this.data.getCheckedOutData();
    }
    else{
      $("#returnContainer .validate-msg").show();
    }
  }
}
