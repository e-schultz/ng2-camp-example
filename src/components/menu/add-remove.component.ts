import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'tb-menu-add-remove',
  template: require('./add-remove.component.html'),
})
export class MenuAddRemove {
  @Output() itemAdded: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemRemoved: EventEmitter<any> = new EventEmitter<any>();
};
