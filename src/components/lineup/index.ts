import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lineup } from './lineup.component';
import { BrowserModule }  from '@angular/platform-browser';

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [Lineup],
  exports: [Lineup]  
})
export class LineupModule {

}
