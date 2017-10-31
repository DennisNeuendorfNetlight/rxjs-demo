import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import 'rxjs/add/Observable/combineLatest';
import 'rxjs/add/operator/startWith';

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

  /*filteredList$: Observable<string[]> = Observable
    .combineLatest(this.list$, this.click$.startWith(''), (list: string[], filter: string) =>
      list.filter(x => x.indexOf(filter) !== -1)
    );*/

  ngOnInit() {
    this.click$.subscribe(x => console.log(x));
  }
}
