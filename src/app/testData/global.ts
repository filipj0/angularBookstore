import { Injectable } from "@angular/core";

@Injectable()
export class Globals{
  checkedOut: Array<any> = this.getFromCache();

  getFromCache(){
    /*if(localStorage["checkedOut"]){
      return JSON.parse(localStorage["checkedOut"]);
    }
    else{*/
      return [];
    //}
  }
}
