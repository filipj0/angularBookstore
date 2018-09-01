/**
 * Created by fjakovljevic on 31.8.2018..
 */
export class Book {
  constructor(private id:string,
              private title:string,
              private author:string,
              private year:string) {
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getYear() {
    return this.year;
  }
}
