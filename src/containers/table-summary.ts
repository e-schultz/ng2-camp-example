import { select } from 'ng2-redux';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';
@Component({
  selector: 'tb-table-summary',
  template: `<ul>
  <li>Clean: </li>
  <li>Dirty: </li>
  <li>Occupied: </li>
  <li>Ordering: </li>
  <li>Has Food:</li>
  
  </ul>`
})
export class TableSummary {
  clean$: Observable<number>;
  dirty$: Observable<number>;
  occupied$: Observable<number>;
  ordering$: Observable<number>;
  hasFood$: Observable<number>;

  ngOnInit() {
    
  }
  
  
}