import { List, fromJS } from 'immutable';

import {
  PARTY_JOINED,
  PARTY_LEFT,
  PARTY_SEATED
} from '../constants';

// TODO: make me a record.
export interface ILineup {
  partyId: number;
  numberOfPeople: number;
  partyName: string;
}

const INITIAL_STATE = List<ILineup>();

export const lineupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PARTY_JOINED: return state.push(action.payload);
    case PARTY_LEFT: return state
      .filter(n => n.partyId !== action.payload.partyId);
    case PARTY_SEATED: return state
      .filter(n => n.partyId !== action.payload.partyId);
    default: return state;
  }
};
