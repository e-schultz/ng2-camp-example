import { List, Record, fromJS } from 'immutable';
import { IMenu } from './menu.types';
import { INITIAL_STATE } from './menu.initial-state';

import {
  ITEM_ADDED,
  ITEM_REMOVED,
} from '../../constants';

const findIndex = (list, id) => list.findIndex(n => n.menuId === id);

export function menuReducer(state: IMenu = INITIAL_STATE, action): IMenu {
  if (!action.type || !action.payload) {
    return state;
  }

  const menuIndex = findIndex(state, action.payload.menuId);
  switch (action.type) {
    case ITEM_REMOVED:
      return state.updateIn(
        [menuIndex, 'stock'],
        0,
        value => value + 1);

    case ITEM_ADDED:
      return state.updateIn(
        [menuIndex, 'stock'],
        0,
        value => value === 0 ? 0 : value - 1);

    default:
      return state;
  }
};
