import { Component, ViewEncapsulation } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import {
  IAppState,
  IParty, ITables, IMenu,
  rootReducer,
  middleware,
  enhancers,
} from '../store';
import { Observable } from 'rxjs';
import { LineupActions, TableActions } from '../actions';
import { placedOrders } from '../selectors/selectors';
import { reimmutify } from '../store';

const TEMPLATE = require('./home.template.html');
@Component({
  selector: 'tb-home',
  template: TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  styles: [ require('../styles/index.css') ],
})
export class HomePage {
  @select() lineup$: Observable<IParty>;
  @select() tables$: Observable<ITables>;
  @select() menu$: Observable<IMenu>;
  @select(placedOrders) placedOrders$: Observable<any>;

  constructor(private _ngRedux: NgRedux<IAppState>,
    private _tableActions: TableActions,
    private _lineupActions: LineupActions,
    private _devTools: DevToolsExtension) {

    const tools = _devTools.enhancer({
      deserializeState: reimmutify,
    });
    _ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      tools ? [ ...enhancers, tools ] : enhancers);
  }
};
