import { NgModule } from '@angular/core';
import { Lineup } from './lineup';
import { Panel } from './panel';
import { Table } from './table';
import { Menu } from './menu';
import { Orders } from './orders';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
export * from './lineup';
export * from './panel';
export * from './table';
export * from './menu';
export * from './orders';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [Lineup, Panel, Table, Menu, Orders],
  exports: [Lineup, Panel, Table, Menu, Orders]
})
export class ComponentsModule {

}