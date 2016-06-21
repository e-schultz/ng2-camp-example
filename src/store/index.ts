import { Map, fromJS } from 'immutable';

import logger from './configure-logger';
const localStoreState = require('redux-localstorage');
const getDebugSessionKey = () => {
   const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}
const loadState = (state) => {
  state.counter = fromJS(state.counter);
  state.session = fromJS(state.session);
  state.menu = fromJS(state.menu);
  state.tables = fromJS(state.tables);
  return state;
}
export const enhancers = [
  localStoreState('session', {
    key: 'angular2-redux-seed',

    serialize: (store) => {
      if (store == null || store.session == null || store.session.toJS == null) {
        return store;
      }
      return JSON.stringify(store.session.toJS());
    },

    deserialize: (state) => ({
      session: state ? fromJS(JSON.parse(state)) : fromJS({}),
    }),
  })
];

export const middleware = [];

declare const __DEV__: boolean; // from webpack
if (__DEV__) {
  middleware.push(logger);

  const environment: any = window || this;
  if (environment.devToolsExtension) {
    enhancers.push(environment.devToolsExtension({
      deserializeState: (state) => loadState(state)
    }));
   
  }
}
