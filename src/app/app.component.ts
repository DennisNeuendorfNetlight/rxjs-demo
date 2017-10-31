import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  click$: Subject<string> = new Subject<string>();

  acc$: Observable<number> = this.click$.map(x => parseInt(x, 10)).scan((last, current) => last + current);

  ngOnInit() {
    this.click$.subscribe(x => console.log(x));
  }
}
