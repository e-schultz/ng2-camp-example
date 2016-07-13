import { List, Record, Map } from 'immutable';

export interface ITable {
  id: number;
  numberOfSeats: number;
  status: string;
  order: Map<number, number>;
}

export type ITables = List<ITable>;

export const TableRecord = Record({
  id: 0,
  numberOfSeats: 0,
  status: '',
  order: Map<number, number>()
});
