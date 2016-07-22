const persistState = require('redux-localstorage');
const createLogger = require( 'redux-logger');
import { IAppState, rootReducer, deimmutify, reimmutify } from './store';
import { ILineup, IParty } from './lineup';
import { IMenu, IMenuItem } from './menu';
import { ITables, ITable } from './tables';

export {
  IAppState,
  rootReducer,
  ILineup,
  IParty,
  IMenu,
  IMenuItem,
  ITables,
  ITable,
  reimmutify,
};

export const middleware = [
  createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: deimmutify
  })
];

export const enhancers = [
  persistState(
    '', {
      key: 'trendy-brunch',
      serialize: s => JSON.stringify(deimmutify(s)),
      deserialize: s => reimmutify(JSON.parse(s)),
    })
];
