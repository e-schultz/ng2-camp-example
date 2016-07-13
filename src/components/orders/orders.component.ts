import { Component, Input, Output, EventEmitter,
ChangeDetectionStrategy } from '@angular/core';
const TEMPLATE = require('./orders.template.html');
@Component({
  selector: 'tb-orders',
  template: TEMPLATE,  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Orders {
  @Input() order: any;
  @Output() itemAdded: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemRemoved: EventEmitter<any> = new EventEmitter<any>();
  @Output() deliverOrder: EventEmitter<any> = new EventEmitter<any>();
};
