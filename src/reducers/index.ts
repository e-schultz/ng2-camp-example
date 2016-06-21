import { combineReducers } from 'redux';
import { ICounter, counterReducer } from './counter';
import { ISession, sessionReducer } from './session';

export interface IAppState {
  counter?: ICounter;
  session?: ISession;
};

export default combineReducers<IAppState>({
  counter: counterReducer,
  session: sessionReducer
});
