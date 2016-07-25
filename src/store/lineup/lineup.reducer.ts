import { ILineup } from './lineup.types';
import { INITIAL_STATE } from './lineup.initial-state';

import {
  PARTY_JOINED,
  PARTY_LEFT,
  PARTY_SEATED
} from '../../constants';

export function lineupReducer(state: ILineup = INITIAL_STATE, action): ILineup {
  switch (action.type) {
    case PARTY_JOINED: return state.push(action.payload);
    case PARTY_LEFT: return state
      .filter(n => n.partyId !== action.payload.partyId) as ILineup;
    case PARTY_SEATED: return state
      .filter(n => n.partyId !== action.payload.partyId) as ILineup;
    default: return state;
  }
};
