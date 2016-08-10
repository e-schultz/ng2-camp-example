import { LineupActions } from './lineup.actions.ts';
import { TableActions } from './table.actions.ts';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [LineupActions, TableActions]
})
export class ActionsModule {

}
export {
  LineupActions,
  TableActions,  
};
