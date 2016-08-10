import { NgModule } from '@angular/core';
import { LineupModule } from './lineup';
import { PanelModule } from './panel';
import { TableModule } from './table';
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
  imports: [BrowserModule, LineupModule, FormsModule, MenuModule, TableModule, PanelModule],
  declarations: [Orders],
  exports: [PanelModule, Orders, LineupModule, MenuModule, TableModule]
})
export class ComponentsModule {

}
