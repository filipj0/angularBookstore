export class CheckOut{
  id: string;
  constructor(
    public bookId: string,
    public bookTitle: string,
    public userId: string,
    public checkoutDate: Date,
    public returnDate: Date
  ){
    this.generateId();
  }

  generateId(){
    this.id = this.bookId + this.userId;
  }

  getBookId(){
    return this.bookId;
  }

  getBookTitle(){
    return this.bookTitle;
  }

  getUserId(){
    return this.userId;
  }

  getChekoutDate(){
    return this.checkoutDate;
  }

  getReturnDate(){
    return this.returnDate;
  }
}
