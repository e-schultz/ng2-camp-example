import { combineReducers } from 'redux';
import { ICounter, counterReducer } from './counter';
import { ISession, sessionReducer } from './session';
import { IMenu, menuReducer } from './menu';
import { ITables, tableReducer } from './tables';
import { ILineup, lineupReducer } from './lineup';
export { ILineup, IMenu, ITables }
export interface IAppState {
  counter?: ICounter;
  session?: ISession;
  lineup?: ILineup[];
  menu?: IMenu;
  tables?: ITables;
};

export default combineReducers<IAppState>({
  counter: counterReducer,
  session: sessionReducer,
  lineup: lineupReducer,
  menu: menuReducer,
  tables: tableReducer
});


