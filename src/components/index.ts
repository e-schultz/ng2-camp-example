import { NgModule } from '@angular/core';
import { LineupModule } from './lineup';
import { Panel } from './panel';
import { Table } from './table';
import { Orders } from './orders';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu';
export * from './lineup';
export * from './panel';
export * from './table';
export * from './menu';
export * from './orders';

@NgModule({
  imports: [BrowserModule, LineupModule, FormsModule, MenuModule],
  declarations: [Panel, Table, Orders],
  exports: [Panel, Table, Orders, LineupModule, MenuModule]
})
export class ComponentsModule {

}
