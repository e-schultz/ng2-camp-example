import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';
const TEMPLATE = require('./menu.template.html');
import { Panel } from '../';
@Component({
  selector: 'tb-menu',
  template: TEMPLATE,
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [Menu]
})
export class Menu {
  @Input() menuItems: any;
  @Input() tableId: any;
  @Input() currentOrder: any;
  @Output()
  itemAdded: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  itemRemoved: EventEmitter<any> = new EventEmitter<any>();
};
