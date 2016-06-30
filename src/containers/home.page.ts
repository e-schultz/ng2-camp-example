import { Component } from '@angular/core';
import { Lineup, Panel, Table, Menu } from '../components';
import { NgRedux, select } from 'ng2-redux';
import { IAppState} from '../reducers';
import { ILineup, ITables, IMenu } from '../reducers';
import { Observable } from 'rxjs';
import {  LineupActions, TableActions } from '../actions';
import { RioContainer, Orders } from '../components';
import { placedOrders } from '../reducers/selectors';

const TEMPLATE = require('./home.template.html');
@Component({
  selector: 'tb-home',
  template: TEMPLATE,
  directives: [Lineup, RioContainer, Panel, Table, Menu, Orders]
})
export class HomePage {
  @select() lineup$: Observable<ILineup>;
  @select() tables$: Observable<ITables>;
  @select() menu$: Observable<IMenu>;
  @select(placedOrders) placedOrders$: Observable<ITables>;

  constructor(private _ngRedux: NgRedux<IAppState>,
    private _tableActions: TableActions,
    private _lineupActions: LineupActions) { }

  partyJoined({numberOfPeople, partyName}) {
    this._lineupActions.joinLine(numberOfPeople, partyName);

  }

  partyLeft({partyId}) {
    this._lineupActions.leaveLine(partyId);

  }

  seatParty({partyId, tableId}) {
    this._tableActions.seatParty(partyId, tableId);

  }

  addItemToOrder({tableId, menuId}) {
    this._tableActions.addItemToOrder(tableId, menuId);

  }

  removeItemFromOrder({tableId, menuId}) {
    this._tableActions.removeItemFromOrder(tableId, menuId);
    
  }

  ngOnInit() {
    
  }

  
};
