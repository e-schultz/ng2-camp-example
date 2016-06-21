import { CounterActions } from '../actions/counter';
import { SessionActions } from '../actions/session';
import { Map, fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  count: 0,
});

export type ICounter = Map<string, number>;

export function counterReducer(
  state: ICounter = INITIAL_STATE,
  action = { type: '' }) {

  switch (action.type) {

  case CounterActions.INCREMENT_COUNTER:
    return state.update('count', (value) => value + 1);

  case CounterActions.DECREMENT_COUNTER:
    return state.update('count', (value) => value - 1);

  case SessionActions.LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
}
