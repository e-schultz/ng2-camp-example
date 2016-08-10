import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';
import { IParty } from '../../store';
//import { Panel } from '../';

const TEMPLATE = require('./table.template.html');
@Component({
  selector: 'tb-table',
  template: TEMPLATE,
 // directives: [Panel]
})
export class Table {
  @Input() table: any;
  @Input() parties: Observable<IParty>;
  @Output() seatParty: EventEmitter<any> = new EventEmitter<any>();
  partyId: number = -1;
};

