import * as assert from 'assert';
import fireAction from '../utils/fire-action';
import { counterReducer } from './counter';
import { CounterActions } from '../actions/counter';
import { Map } from 'immutable';

let state = counterReducer();

describe('counter reducer', () => {
  describe('inital state', () => {
    it('should be a Map', () => {
      expect(Map.isMap(state)).toBe(true);
    });
  });

  describe('on INCREMENT_COUNTER', () => {
    it('should increment state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(
        counterReducer,
        state,
        CounterActions.INCREMENT_COUNTER);
      expect(state.get('count')).toEqual(1);
    });
  });

  describe('on DECREMENT_COUNTER', () => {
    it('should decrement state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(
        counterReducer,
        state,
        CounterActions.DECREMENT_COUNTER);
      expect(state.get('count')).toEqual(previousValue - 1);
    });
  });
});
