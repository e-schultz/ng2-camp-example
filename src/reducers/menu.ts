import {
  ITEM_ADDED,
  ITEM_REMOVED,
}
from '../constants';
import {fromJS, List} from 'immutable';

export interface IMenu extends List<Map<string, any>> {

}

const INITIAL_STATE: IMenu = fromJS([{
  menuId: 'pancake',
  description: 'Stack of Pancakes',
  stock: 50,
  price: 1.99
}, {
    menuId: 'fruitbowl',
    description: 'Bowl of fresh fruit',
    stock: 10,
    price: 3.50
  }, {
    menuId: 'eggsbenny',
    description: 'Eggs Benedict',
    stock: 30,
    price: 4.95
  }, {
    menuId: 'hashbrowns',
    description: 'Crispy Golden Hashbrowns',
    stock: 10,
    price: 2.50
  }]);

let findIndex = (collection, id) => collection
  .findIndex(n => n.get('menuId') === id);

export const menuReducer = (state: IMenu = INITIAL_STATE, action) => {

  if (!action.type || !action.payload) {
    return state;
  }

  let menuIndex = findIndex(state, action.payload.menuId);

  switch (action.type) {
    case ITEM_REMOVED:
      return state.updateIn([menuIndex, 'stock'], 0, value => value + 1);
    case ITEM_ADDED:
      return state.updateIn([menuIndex, 'stock'], 0,
        value => value === 0 ? 0 : value - 1);
    default:
      return state;
  }

};

