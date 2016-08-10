import { Orders } from './orders.component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [Orders],
  exports: [Orders]
})
export class OrdersModule {

}
