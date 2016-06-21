import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AuthService } from '../services/auth/';
import { IAppState } from '../reducers';

@Injectable()
export class SessionActions {
  static LOGIN_USER_PENDING = 'LOGIN_USER_PENDING';
  static LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
  static LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
  static LOGOUT_USER = 'LOGOUT_USER';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private authService: AuthService) {}

  loginUser(credentials) {
    const username = credentials.username;
    const password = credentials.password;

    this.ngRedux.dispatch({ type: SessionActions.LOGIN_USER_PENDING });
    this.authService.login(username, password)
      .then(result => this.ngRedux.dispatch({
          type: SessionActions.LOGIN_USER_SUCCESS,
          payload: result
      }))
      .catch(() => this.ngRedux.dispatch({
        type: SessionActions.LOGIN_USER_ERROR
      }));
  };

  logoutUser = () => {
    this.ngRedux.dispatch({ type: SessionActions.LOGOUT_USER });
  };
} 
