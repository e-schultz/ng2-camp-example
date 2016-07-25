import { List } from 'immutable';
import { ILineup, IParty, PartyFactory } from './lineup.types';

export function deimmutifyLineup(state: ILineup): Object[] {
  return state.toJS();
}

export function reimmutifyLineup(plain): ILineup {
  return List<IParty>(plain ? plain.map(PartyFactory) : []);
}
