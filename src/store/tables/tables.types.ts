import { List, Record, Map } from 'immutable';
import {
  TypedRecord,
  makeTypedFactory
} from 'typed-immutable-record/dist/index';

export interface ITable {
  id: number;
  numberOfSeats: number;
  status: string;
  order: Map<number, number>;
}

export interface ITableRecord extends TypedRecord<ITableRecord>, ITable {
}

export type ITables = List<ITable>;

export const TableFactory = makeTypedFactory<ITable, ITableRecord>({
  id: 0,
  numberOfSeats: 0,
  status: '',
  order: Map<number, number>()
});
