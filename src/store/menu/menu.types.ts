import { List } from 'immutable';
import {
  TypedRecord,
  makeTypedFactory
} from 'typed-immutable-record/dist/index';

export interface IMenuItem {
  menuId: string;
  description: string;
  stock: number;
  price: number;
}

export interface IMenuItemRecord extends TypedRecord<IMenuItemRecord>,
  IMenuItem {
}

export type IMenu = List<IMenuItem>;

export const MenuItemFactory = makeTypedFactory<IMenuItem, IMenuItemRecord>({
  menuId: '',
  description: '',
  stock: 0,
  price: 0,
});
