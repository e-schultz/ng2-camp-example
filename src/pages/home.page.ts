import { Component, ViewEncapsulation } from '@angular/core';
import { Lineup, Panel, Table, Menu } from '../components';
import { NgRedux, select } from 'ng2-redux';
import {
  IAppState,
  IParty, ITables, IMenu,
  rootReducer,
  middleware,
  enhancers,
  DevTools
} from '../store';
import { Observable } from 'rxjs';
import { LineupActions, TableActions } from '../actions';
import { Orders } from '../components';
import { placedOrders } from '../selectors/selectors';

const TEMPLATE = require('./home.template.html');
@Component({
  selector: 'tb-home',
  template: TEMPLATE,
  directives: [ Lineup, Panel, Table, Menu, Orders ],
  encapsulation: ViewEncapsulation.None,
  styles: [ require('../styles/index.css') ],
  providers: [ DevTools ],
})
export class HomePage {
  @select() lineup$: Observable<IParty>;
  @select() tables$: Observable<ITables>;
  @select() menu$: Observable<IMenu>;
  @select(placedOrders) placedOrders$: Observable<any>;

  constructor(private _ngRedux: NgRedux<IAppState>,
    private _tableActions: TableActions,
    private _lineupActions: LineupActions,
    private _devTools: DevTools) {

    const tools = _devTools.enhancer();
    _ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      tools ? [ ...enhancers, tools ] : enhancers);
  }
};
