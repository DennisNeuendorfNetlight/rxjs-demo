import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import 'rxjs/add/Observable/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  list$: Observable<string[]> = Observable.of([
    'Andreas',
    'Andrea',
    'Charles',
    'Dennis',
    'Sandro'
  ]);

  click$: Subject<string> = new Subject<string>();

  filter$ = this.click$
  .filter(text => text.length >= 2) // Only if the text is longer than 2 characters
  .debounceTime(100)
  .distinctUntilChanged() // Only if the value has changed;
  .startWith('');

  filteredList$: Observable<string[]> = Observable
    .combineLatest(this.list$, this.filter$, (list: string[], filter: string) =>
      list.filter(x => x.indexOf(filter) !== -1)
    );

  ngOnInit() {
    this.filter$.subscribe(x => console.log(x));
  }
}
