import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Table } from './table.component';

import { PanelModule } from '../panel';
@NgModule({
  imports: [BrowserModule, FormsModule, PanelModule], 
  declarations: [Table],
  exports: [Table]
})
export class TableModule {

}
