import { Injectable } from "@angular/core";

@Injectable()
export class Globals{
  checkedOut: Array = [];

  addToCheckedOut(data){
    this.checkedOut.push(data);
  }

  removeFromCheckedOut(){}
}
