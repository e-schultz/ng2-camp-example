import { SessionActions } from '../actions/session';
import { Map, fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  token: null,
  user: {},
  hasError: false,
  isLoading: false,
});

export type ISession = Map<string, any>;

export function sessionReducer(
  state: ISession = INITIAL_STATE,
  action: any = {type: ''}) {

  switch (action.type) {
  case SessionActions.LOGIN_USER_PENDING:
    return state.merge({
      token: null,
      user: {},
      hasError: false,
      isLoading: true,
    });

  case SessionActions.LOGIN_USER_SUCCESS:
    return state.merge({
      token: action.payload.token,
      user: action.payload.profile,
      hasError: false,
      isLoading: false,
    });

  case SessionActions.LOGIN_USER_ERROR:
    return state.merge({
      hasError: true,
      isLoading: false,
    });

  case SessionActions.LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
}
