import {
  PARTY_JOINED,
  PARTY_LEFT,
  PARTY_SEATED
} from '../constants';

export interface ILineup {
  partyId: number;
  numberOfPeople: number;
  partyName: string;
}

const INITIAL_STATE: ILineup[] = [];

export const lineupReducer = (state: ILineup[] = INITIAL_STATE, action) => {
  switch (action.type) {
    case PARTY_JOINED: return [...state, action.payload];
    case PARTY_LEFT: return state
      .filter(n => n.partyId !== action.payload.partyId);
    case PARTY_SEATED: return state
      .filter(n => n.partyId !== action.payload.partyId);
    default: return state;
  }
};
