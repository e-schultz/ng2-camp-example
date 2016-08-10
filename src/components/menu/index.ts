import { Menu } from './menu.component';
import { MenuAddRemove } from './add-remove.component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [Menu, MenuAddRemove],
  exports: [Menu]
})
export class MenuModule {

}