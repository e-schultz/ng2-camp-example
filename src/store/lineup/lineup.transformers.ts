import { List, Map } from 'immutable';
import { ILineup, IParty, PartyRecord } from './lineup.types';

export function deimmutifyLineup(state: ILineup): Object[] {
  return state.toJS();
}

export function reimmutifyLineup(plain): ILineup {
  return List<IParty>(plain ? plain.map(PartyRecord) : []);
}
