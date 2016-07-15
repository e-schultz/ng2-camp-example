import { ITables, ITable } from './tables.types';
import { tableReducer } from './tables.reducer';
import { deimmutifyTables, reimmutifyTables } from './tables.transformers';
import { TableActions } from './tables.actions';

export {
  TableActions,
  ITables,
  ITable,
  tableReducer,
  deimmutifyTables,
  reimmutifyTables,
};
