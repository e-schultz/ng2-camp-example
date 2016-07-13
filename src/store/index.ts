import { Map, fromJS } from 'immutable';
import { deimmutify, reimmutify } from './transformers';
const persistState = require('redux-localstorage');
const createLogger = require( 'redux-logger');

export let middleware = [ 
  createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: deimmutify
  })
];

export let enhancers = [
  persistState(
    '', {
      key: 'trendy-brunch',
      serialize: s => JSON.stringify(deimmutify(s)),
      deserialize: s => reimmutify(JSON.parse(s)),
    })
];
