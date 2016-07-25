import { List, Record, fromJS } from 'immutable';
import { ITables, ITable, TableFactory } from './tables.types';
import { INITIAL_STATE } from './tables.initial-state';

import {
  PARTY_SEATED,
  ORDER_STARTED,
  ITEM_ADDED,
  ITEM_REMOVED,
  ORDER_COMPLETED,
  ORDER_DELIVERED,
  BILL_PAID,
  TABLE_CLEANED,
  CLEAN,
  DIRTY,
  OCCUPIED,
  ORDERING,
  ORDERED,
  HAS_FOOD
} from '../../constants';

export function tableReducer(state: ITables = INITIAL_STATE, action): ITables {
  if (!action.type || !action.payload) {
    return state;
  }
  const findIndex = (collection, id) => collection
    .findIndex(n => n.get('id') === id);

  let tableIndex = findIndex(state, action.payload.tableId);

  switch (action.type) {
    case PARTY_SEATED:
      return state.setIn([tableIndex, 'status'], OCCUPIED);
    case ORDER_STARTED:
      return state.setIn([tableIndex, 'status'], ORDERING);
    case ITEM_ADDED:
      return state.updateIn([tableIndex, 'order', action.payload.menuId], 0,
        value => value + 1);
    case ITEM_REMOVED:
      return state.updateIn([tableIndex, 'order', action.payload.menuId], 0,
        value => value === 0 ? 0 : value - 1);
    case BILL_PAID:
      return state.setIn([tableIndex, 'status'], DIRTY).
        setIn([tableIndex, 'order'], fromJS({}));
    case TABLE_CLEANED:
      return state.setIn([tableIndex, 'status'], CLEAN);
    case ORDER_COMPLETED:
      return state.setIn([tableIndex, 'status'], ORDERED);
    case ORDER_DELIVERED:
      return state.setIn([tableIndex, 'status'], HAS_FOOD);
    default:
      return state;
  }
};



