import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  /** ⚠️ Unterschied zum Buch:
   * Property ist optional, sonst muss es direkt zugewiesen werden.
   * Das Input-Property wird allerdings zur Laufzeit der Komponente durch das Property Binding zugewiesen.
   * Da dieses Binding nicht verpflichtend ist, muss das Property auch optional sein.
   */
  @Input() book?: Book;
  @Output() myshowListEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  getRating(num: number) {
    return new Array(num);
  }

  showBookList() {
    this.myshowListEvent.emit();
  }
}
