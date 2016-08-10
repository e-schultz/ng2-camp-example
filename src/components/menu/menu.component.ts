import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'tb-menu',
  template: require('./menu.template.html'),
  changeDetection: ChangeDetectionStrategy.OnPush,
  /*
  directives: [ MenuAddRemove ]
  since MenuAddRemove is part of the MenuModule, I don't need to
  import it and redeclare it here'
  */ 
})
export class Menu {
  @Input() menuItems: any;
  @Input() tableId: any;
  @Input() currentOrder: any;
  @Output() itemAdded: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemRemoved: EventEmitter<any> = new EventEmitter<any>();
};
