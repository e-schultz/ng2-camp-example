import { List, Record } from 'immutable';

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
