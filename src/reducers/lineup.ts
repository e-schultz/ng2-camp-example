import { List, Record, fromJS } from 'immutable';

import {
  PARTY_JOINED,
  PARTY_LEFT,
  PARTY_SEATED
} from '../constants';

export interface IParty {
  partyId: number;
  numberOfPeople: number;
  partyName: string;
}

export type ILineup = List<IParty>;

export const PartyRecord = Record({
  partyId: 0,
  numberOfPeople: 0,
  partyName: '',
});

const INITIAL_STATE = List<IParty>();

export function lineupReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PARTY_JOINED: return state.push(action.payload);
    case PARTY_LEFT: return state
      .filter(n => n.partyId !== action.payload.partyId);
    case PARTY_SEATED: return state
      .filter(n => n.partyId !== action.payload.partyId);
    default: return state;
  }
};
