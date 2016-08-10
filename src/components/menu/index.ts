import { Menu } from './menu.component';

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
export * from './menu.component';
@NgModule({
  imports: [BrowserModule],
  declarations: [Menu],
  exports: [Menu]
})
export class MenuModule {

}