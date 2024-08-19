import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }
// load the books during reload , even though there are in local storage
// life cycle hook
  ngOnInit(): void {
    let savedBooks = localStorage.getItem("jsonBooksKey");
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  title: string = " ";
  author: string = " ";
  checkoutDate : Date = new Date();
  books: Book[] = [];


  addBook(){
    //alert(this.title + " " + this.checkoutDate);
    if(this.title.trim().length && this.checkoutDate){
      //creating new book
      let newBook : Book = {
        id: Date.now(),
        title: this.title,
        author:this.author,
        checkoutDate: this.checkoutDate
      }
      // adding the book to list
      this.books.push(newBook);

      this.title = "";
      this.author = "";
      this.checkoutDate=new Date();

      //alert(this.books.length);

      localStorage.setItem("jsonBooksKey",JSON.stringify(this.books));
    }
  }


// deleteing a book
  deleteBook(index: number){
    this.books.splice(index, 1);
    localStorage.setItem("jsonBooksKey",JSON.stringify(this.books));
  }

}
