import { NgModule } from '@angular/core';
import { LineupModule } from './lineup';
import { PanelModule } from './panel';
import { TableModule } from './table';
import { OrdersModule } from './orders';
import { MenuModule } from './menu';

export * from './lineup';
export * from './panel';
export * from './table';
export * from './menu';
export * from './orders';

@NgModule({
  imports: [LineupModule, MenuModule, TableModule, PanelModule, OrdersModule],
  declarations: [],
  exports: [PanelModule, OrdersModule, LineupModule, MenuModule, TableModule]
})
export class ComponentsModule {

}
