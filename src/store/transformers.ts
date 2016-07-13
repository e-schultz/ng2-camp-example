import { Iterable, List, fromJS } from 'immutable';
import {
  IAppState,
  IParty,
  PartyRecord,
  IMenuItem,
  MenuItemRecord
} from '../reducers';

// TODO: make these composable in a similar way as the reducers are:
// i.e. each store record should now how to transform itself.
export function deimmutify(state: IAppState): Object {
  return {
    lineup: state.lineup.toJS(),
    menu: state.menu.toJS(),
    tables: state.tables.toJS(),
  };
}

export function reimmutify(plain): IAppState {
  return plain ? {
    lineup: reimmutifyRecordList<IParty>(plain.lineup, PartyRecord),
    menu: reimmutifyRecordList<IMenuItem>(plain.menu, MenuItemRecord),
    tables: fromJS(plain.tables),
  } : {};
}

function reimmutifyRecordList<T>(
  list: any[],
  recordCreator: Function): List<T> {

  return list ?
    List<T>(list.map(p => recordCreator(p))) :
    List<T>([]);
}
