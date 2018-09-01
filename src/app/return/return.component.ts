import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  checkOutItems:Array;

  constructor(private data:DataService) {

  }

  ngOnInit() {
    this.checkOutItems = this.data.getCheckedOutData();
  }
}
