import { Component } from '@angular/core';
import { of, interval } from 'rxjs';
import {map, take} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJS-Demo';
  selection = '';
  description = '';
      
  first = function () {
    this.clearSelection();

    this.description = 'Create an Observable that will return 3 integers synchronously and subscribe to it.'
    of(1, 2, 3)
      .subscribe(x => {
        console.log(x);
        this.selection += x + "\n";
      });
  }

  second = function () {
    this.clearSelection();

    this.description = 'Create an Observable that will return integers asynchronously and unsubscribe after 3 seconds.'
    let subscription = interval(500)
      .subscribe(x => {
        console.log(x);
        this.selection += x + "\n";
      });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 3000)
  }

  mapDemo = function () {
    this.clearSelection();

    this.description = 'Pipe the Observable to map each value by appending "!!!".'
    of(1, 2, 3)
      .pipe(map(x => x + ' !!!'))
      .subscribe(x => {
        console.log(x);
        this.selection += x + "\n";
      });
  }

  takeDemo = function () {
    this.clearSelection();

    this.description = 'Take only the first 2 values.'
    of(1, 2, 3)
      .pipe(take(2))
      .subscribe(x => {
        console.log(x);
        this.selection += x + "\n";
      });
  }

  clearSelection = function() {
    this.selection = '';
    this.description = '';
  }
  
}
