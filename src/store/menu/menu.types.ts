import { List, Record } from 'immutable';

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
