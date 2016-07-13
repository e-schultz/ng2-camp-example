import { List, Map } from 'immutable';
import { ITables, ITable, TableRecord } from './tables.types';

export function deimmutifyTables(state: ITables): Object[] {
  return state.toJS();
}

export function reimmutifyTables(plain): ITables {
  return List<ITable>(plain ? plain.map(reimmutifyTable) : []);
}

function reimmutifyTable(table: any) {
  return TableRecord(
    Object.assign({}, table, {
      order: Map<number, number>(table.order),
    }));
}
