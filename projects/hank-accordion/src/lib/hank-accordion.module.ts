import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HankSectionComponent, HankAccordionComponent } from './hank-accordion.component';

@NgModule({
  declarations: [HankAccordionComponent, HankSectionComponent],
  imports: [CommonModule,BrowserAnimationsModule],
  exports: [HankAccordionComponent, HankSectionComponent]
})
export class HankAccordionModule { }
