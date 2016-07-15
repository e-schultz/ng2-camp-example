import { IMenu } from './menu.types';
import { reimmutifyMenu } from './menu.transformers';

export const INITIAL_STATE: IMenu = reimmutifyMenu([
  {
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
  }
]);
