import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HankAccordionModule } from 'hank-accordion';
// import { HankAccordionModule } from '../../../hank-accordion/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HankAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
