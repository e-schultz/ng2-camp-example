import { Component, ViewEncapsulation, ApplicationRef } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Map } from 'immutable';
import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../reducers';
import { ISession } from '../reducers/session';
import { SessionActions } from '../actions/session';
import { RioAboutPage } from './about-page';
import { RioCounterPage } from './counter-page';
import rootReducer from '../reducers';
import { middleware, enhancers } from '../store';

import {
  RioButton,
  RioNavigator,
  RioNavigatorItem,
  RioLogo,
  RioLoginModal
} from '../components';

@Component({
  selector: 'rio-sample-app',
  directives: [
    ROUTER_DIRECTIVES, RioNavigator, RioNavigatorItem,
    RioLoginModal, RioLogo, RioButton
  ],
  pipes: [ AsyncPipe ],
  // Allow app to define global styles.
  encapsulation: ViewEncapsulation.None,
  styles: [ require('../styles/index.css') ],
  template: require('./sample-app.tmpl.html')
})
@RouteConfig([
  {
    path: '/counter',
    name: 'Counter',
    component: RioCounterPage,
    useAsDefault: true
  },
  {
    path: '/about',
    name: 'About',
    component: RioAboutPage
  }
])
export class RioSampleApp {
  @select() session$: Observable<ISession>;

  hasError$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  loggedIn$: Observable<boolean>;
  loggedOut$: Observable<boolean>;
  userName$: Observable<string>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: SessionActions) {

    ngRedux.configureStore(rootReducer, {}, middleware, enhancers);

    this.hasError$  = this.session$.map(s => !!s.get('hasError'));
    this.isLoading$ = this.session$.map(s => !!s.get('isLoading'));
    this.loggedIn$  = this.session$.map(s => !!s.get('token'));
    this.loggedOut$ = this.loggedIn$.map(loggedIn => !loggedIn);
    this.userName$  = this.session$.map(s => {
      return [
        s.getIn(['user', 'firstName'], ''),
        s.getIn(['user', 'lastName'], '')
        ].join(' ');
    });
  }
};
