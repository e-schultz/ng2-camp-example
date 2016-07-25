import { List } from 'immutable';
import { IMenu, IMenuItem, MenuItemFactory } from './menu.types';

export function deimmutifyMenu(state: IMenu): Object[] {
  return state.toJS();
}

export function reimmutifyMenu(plain): IMenu {
  return List<IMenuItem>(plain ? plain.map(MenuItemFactory) : []);
}
