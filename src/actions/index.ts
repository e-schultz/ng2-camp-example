import { LineupActions } from './lineup.actions.ts';
import { TableActions } from './table.actions.ts';

const ACTION_PROVIDERS = [ LineupActions, TableActions ];

export {
  LineupActions,
  TableActions,
  ACTION_PROVIDERS,
};
