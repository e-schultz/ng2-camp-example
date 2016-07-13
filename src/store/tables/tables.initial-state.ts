import { List, Map } from 'immutable';
import { ITables, ITable, TableRecord } from './tables.types';
import { reimmutifyTables } from './tables.transformers';
import { CLEAN } from '../../constants';

export const INITIAL_STATE: ITables = reimmutifyTables([
  {
    id: 1,
    numberOfSeats: 2,
    status: CLEAN,
    order: Map<number, number>()
  }, {
    id: 2,
    numberOfSeats: 4,
    status: CLEAN,
    order: Map<number, number>()
  }, {
    id: 3,
    numberOfSeats: 4,
    status: CLEAN,
    order: Map<number, number>()
  }, {
    id: 4,
    numberOfSeats: 2,
    status: CLEAN,
    order: Map<number, number>()
  }
]);
