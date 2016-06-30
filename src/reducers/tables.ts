
import {fromJS, List, Map} from 'immutable';
import { createSelector } from 'reselect';
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
  HAS_FOOD} from '../constants';


export interface ITables extends List<Map<string, any>> { }

export const INITIAL_STATE: ITables = fromJS([{
  id: 1,
  numberOfSeats: 2,
  status: CLEAN,
  order: {}
}, {
    id: 2,
    numberOfSeats: 4,
    status: CLEAN,
    order: {}
  },
  {
    id: 3,
    numberOfSeats: 4,
    status: CLEAN,
    order: {}
  },
  {
    id: 4,
    numberOfSeats: 2,
    status: CLEAN,
    order: {}
  }]);

export const tableReducer = (state: ITables = INITIAL_STATE, action) => {

  if (!action.type || !action.payload) {
    return state;
  }
  let findIndex = (collection, id) => collection
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



