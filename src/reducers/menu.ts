import { List, Record, fromJS } from 'immutable';

import {
  ITEM_ADDED,
  ITEM_REMOVED,
} from '../constants';

export interface IMenuItem {
  menuId: string;
  description: string;
  stock: number;
  price: number;
}

export type IMenu = List<IMenuItem>;

export const MenuItemRecord = Record({
  menuId: '',
  description: '',
  stock: 0,
  price: 0,
});

const INITIAL_STATE: IMenu = List<IMenuItem>([
  MenuItemRecord({
    menuId: 'pancake',
    description: 'Stack of Pancakes',
    stock: 50,
    price: 1.99
  }),
  MenuItemRecord({
    menuId: 'fruitbowl',
    description: 'Bowl of fresh fruit',
    stock: 10,
    price: 3.50
  }),
  MenuItemRecord({
    menuId: 'eggsbenny',
    description: 'Eggs Benedict',
    stock: 30,
    price: 4.95
  }),
  MenuItemRecord({
    menuId: 'hashbrowns',
    description: 'Crispy Golden Hashbrowns',
    stock: 10,
    price: 2.50
  })
]);

const findIndex = (list, id) => list.findIndex(n => n.menuId === id);

export function menuReducer(state: IMenu = INITIAL_STATE, action) {
  let menuIndex;
  switch (action.type) {
    case ITEM_REMOVED:
      menuIndex = findIndex(state, action.payload.menuId);
      return state.updateIn([menuIndex, 'stock'], 0, value => value + 1);
    case ITEM_ADDED:
      menuIndex = findIndex(state, action.payload.menuId);
      return state.updateIn([menuIndex, 'stock'], 0,
        value => value === 0 ? 0 : value - 1);
    default:
      return state;
  }
};
