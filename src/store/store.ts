import { combineReducers } from 'redux';
import * as lineup from './lineup';
import * as menu from './menu';
import * as tables from './tables';

/*
 * This is where we 'assemble' the full store out of its modules.
 */

export interface IAppState {
  lineup?: lineup.ILineup;
  menu?: menu.IMenu;
  tables?: tables.ITables;
};

export const rootReducer = combineReducers<IAppState>({
  lineup: lineup.lineupReducer,
  menu: menu.menuReducer,
  tables: tables.tableReducer
});

export function deimmutify(state: IAppState): Object {
  return {
    lineup: lineup.deimmutifyLineup(state.lineup),
    menu: menu.deimmutifyMenu(state.menu),
    tables: tables.deimmutifyTables(state.tables),
  };
}

export function reimmutify(plain): IAppState {
  return plain ? {
    lineup: lineup.reimmutifyLineup(plain.lineup),
    menu: menu.reimmutifyMenu(plain.menu),
    tables: tables.reimmutifyTables(plain.tables),
  } : {};
}
