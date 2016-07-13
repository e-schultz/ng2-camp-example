import { Iterable, List, fromJS } from 'immutable';
import { IParty, PartyRecord } from '../reducers';

// TODO: make these composable in a similar way as the reducers are:
// i.e. each store record should now how to transform itself.
export function deimmutify(state) {
  return {
    lineup: state.lineup.toJS(),
    menu: state.menu.toJS(),
    tables: state.tables.toJS(),
  };
}

export function reimmutify(plain) {
  return {
    lineup: List<IParty>(plain.lineup.map(p => PartyRecord(p))),
    menu: fromJS(plain.menu),
    tables: fromJS(plain.tables),
  };
}
