import { IAppState, IMenu, ITables } from '../store';
import { createSelector } from 'reselect';
import { ORDERED } from '../constants';
import { List, Map, fromJS } from 'immutable';

const menuSelector = createSelector<IAppState, any, any>(
  (state) => state.menu, 
  menu => menu);

const placedOrdersFilter = (tables: any) => tables
  .filter(n =>  n.get('status') === ORDERED) as ITables;

const placedOrderSelector = createSelector<IAppState, any, any>(n => n.tables,
  (tables) => {
    return tables ? placedOrdersFilter(tables) : List<any>();
  });

const orderMap = (menu, tables) => {
  return tables.map(table => {
    return table.update('order', (order) => {
      return order.map((qty, orderItem) => {
        const menuItem = menu.find(n => n.get('menuId') === orderItem);
        return fromJS({
          menuId: orderItem,
          qty: qty,
          description: menuItem.get('description'),
          price: menuItem.get('price'),
          total: qty * menuItem.get('price')
        });
      }).toList();
    });
  });
};

export const placedOrders = createSelector<IAppState, any, IMenu, ITables>
  (menuSelector, placedOrderSelector, (menu, placed) => {
    return orderMap(menu, placed);
  });
