const persistState = require('redux-localstorage');
const createLogger = require( 'redux-logger');
import { IAppState, rootReducer, deimmutify, reimmutify } from './store';
import { ILineup, IParty, LineupActions } from './lineup';
import { IMenu, IMenuItem } from './menu';
import { ITables, ITable, TableActions } from './tables';
import { DevTools } from './dev-tools';

const ACTION_PROVIDERS = [ LineupActions, TableActions ];

export {
  IAppState,
  rootReducer,
  ILineup,
  IParty,
  IMenu,
  IMenuItem,
  ITables,
  ITable,
  DevTools,
  LineupActions,
  TableActions,
  ACTION_PROVIDERS,
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
