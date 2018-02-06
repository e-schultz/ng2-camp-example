import 'reflect-metadata';
import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import '../shims/shims_for_IE';
import 'zone.js/dist/zone';
import 'ts-helpers';

import { enableProdMode, provide, NgModule } from '@angular/core';
import { BrowserModule, platformBrowser}  from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from '@angular/common/index';
import { FormsModule} from '@angular/forms';
import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { PartyService } from './services/party';
import { ACTION_PROVIDERS } from './actions';
import { HomePage } from './pages/home.page';
import { ComponentsModule } from './components';

declare const __PRODUCTION__: boolean;
declare const __TEST__: boolean;

@NgModule({
  imports: [BrowserModule, FormsModule, ComponentsModule],
  declarations: [HomePage],
  bootstrap: [HomePage],
  providers: [NgRedux,
    DevToolsExtension,
    ACTION_PROVIDERS,
    PartyService, { provide: APP_BASE_HREF, useValue: '/' }]
})
class MyAppModule { }

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

if (!__TEST__) {
  platformBrowserDynamic().bootstrapModule(MyAppModule)
}