import { NgModule } from '@angular/core';
import { LineupModule } from './lineup';
import { Panel } from './panel';
import { Table } from './table';
import { Menu } from './menu';
import { Orders } from './orders';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
export * from './lineup';
export * from './panel';
export * from './table';
export * from './menu';
export * from './orders';

@NgModule({
  imports: [BrowserModule, LineupModule, FormsModule],
  declarations: [Panel, Table, Menu, Orders],
  exports: [Panel, Table, Menu, Orders, LineupModule]
})
export class ComponentsModule {

}
