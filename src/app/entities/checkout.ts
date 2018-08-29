export class CheckOut{
  constructor(
    public bookId: string,
    public userId: string,
    public checkoutDate: Date,
    public returnDate: Date
  ){}
}
