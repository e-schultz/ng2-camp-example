import { IAppState, IMenu, ITables } from './';
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
    return placedOrdersFilter(tables);
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
}

export const placedOrders = createSelector<IAppState, any, IMenu, ITables>
  (menuSelector, placedOrderSelector, (menu, placed) => {
    return orderMap(menu, placed);

  });

/*
const CLEAN = 'clean';
const DIRTY = 'dirty';
const x  = fromJS([{
  id: 1,
  numberOfSeats: 2,
  status: CLEAN,
  order: {
    pancake: 5,
    shit: 3
  }
}, {
    id: 2,
    numberOfSeats: 4,
    status: CLEAN,
    order: {}
  },
  {
    id: 3,
    numberOfSeats: 4,
    status: DIRTY,
    order: {}
  },
  {
    id: 4,
    numberOfSeats: 2,
    status: CLEAN,
    order: {}
  }]);
x.filter(n=>n.get('status') === CLEAN).map(table=>{
  return table.update('order',(order)=>{
    return order.map((qty,menuItem) => {
			return fromJS({
        menuId: menuItem,
        qty: qty,
        description: 'bob',
        price: 1,
        total: qty * 1
      })
    }).toList()
  });
});
;
*/

