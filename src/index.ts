import 'reflect-metadata';
import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import '../shims/shims_for_IE';
import 'zone.js/dist/zone';
import 'ts-helpers';

import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from '@angular/common/index';
import { provideForms } from '@angular/forms';
import { DevToolsExtension, NgRedux } from 'ng2-redux';

import { PartyService } from './services/party';
import { ACTION_PROVIDERS } from './actions';
import { HomePage } from './pages/home.page';

declare const __PRODUCTION__: boolean;
declare const __TEST__: boolean;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

if (!__TEST__) {
  bootstrap(HomePage, [
    provideForms(),
    NgRedux,
    DevToolsExtension,
    ACTION_PROVIDERS,
    PartyService,
    provide(APP_BASE_HREF, { useValue: '/' })
  ]);
}
