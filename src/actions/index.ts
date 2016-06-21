import { CounterActions } from './counter';
import { LineupActions } from './lineup.actions';
import { SessionActions } from './session';
import { TableActions } from './table.actions';


export {
  CounterActions,
  LineupActions,
  SessionActions,
  TableActions
};

export const ACTION_PROVIDERS = [
  CounterActions,
  LineupActions,
  SessionActions,
  TableActions];
