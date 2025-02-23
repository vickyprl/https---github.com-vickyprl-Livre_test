import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  newBookTitle: string = '';
  books: string[] = [];

  addBook() {
    if (this.newBookTitle.trim()) {
      this.books.push(this.newBookTitle);
      this.newBookTitle = '';
    }
  }
}
