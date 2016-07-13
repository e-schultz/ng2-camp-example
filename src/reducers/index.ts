import { combineReducers } from 'redux';
import { IMenu, menuReducer } from './menu';
import { ITables, tableReducer } from './tables';
import { ILineup, IParty, PartyRecord, lineupReducer } from './lineup';
export { ILineup, IParty, PartyRecord, IMenu, ITables }

export interface IAppState {
  lineup?: ILineup;
  menu?: IMenu;
  tables?: ITables;
};

export default combineReducers<IAppState>({
  lineup: lineupReducer,
  menu: menuReducer,
  tables: tableReducer
});
