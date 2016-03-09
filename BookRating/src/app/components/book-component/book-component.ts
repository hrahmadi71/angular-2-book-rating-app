import {Component, Input} from 'angular2/core';
import {Book} from '../../models/book';

@Component({
  selector: 'book',
  template: `
    <div class="well">
      <div class="thumbnail pull-right">
        <img src="//gravatar.com/avatar/{{ book.rating }}?s=80&default=wavatar"/>
      </div>
      <h2>{{ book.title }} <small>Stars {{ book.rating }}</small></h2>
      <p>{{ book.comment }}</p>
    </div>`
})
export class BookComponent {
  @Input() book: Book;
}