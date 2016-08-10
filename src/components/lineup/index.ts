import { NgModule } from '@angular/core';
import { Lineup } from './lineup.component';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [Lineup],
  exports: [Lineup]  
})
export class LineupModule {

}
