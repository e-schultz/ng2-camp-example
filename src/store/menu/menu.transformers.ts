import { List, Map } from 'immutable';
import { IMenu, IMenuItem, MenuItemRecord } from './menu.types';

export function deimmutifyMenu(state: IMenu): Object[] {
  return state.toJS();
}

export function reimmutifyMenu(plain): IMenu {
  return List<IMenuItem>(plain ? plain.map(MenuItemRecord) : []);
}
