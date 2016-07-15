import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ILineup } from '../../store';

const TEMPLATE = require('./lineup.component.html');
@Component({
  selector: 'tb-lineup',
  template: TEMPLATE,
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class Lineup {
  @Input() lineup: ILineup;
  @Output() partyJoined: EventEmitter<any> = new EventEmitter();
  @Output() partyLeft: EventEmitter<any> = new EventEmitter();
};
