import { List } from 'immutable';
import {
  TypedRecord,
  makeTypedFactory
} from 'typed-immutable-record/dist/index';

export interface IParty {
  partyId: number;
  numberOfPeople: number;
  partyName: string;
}

export interface IPartyRecord extends TypedRecord<IPartyRecord>, IParty {
}

export type ILineup = List<IParty>;

export const PartyFactory = makeTypedFactory<IParty, IPartyRecord>({
  partyId: 0,
  numberOfPeople: 0,
  partyName: '',
});
