import { Component, Input, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations'

@Component({
  selector: 'hank-section',
  templateUrl: './hank-accordion.component.html',
  styleUrls: ['./hank-accordion.component.css'],
  animations: [
    trigger('divState',[
      state('expanded',style({
        height: AUTO_STYLE,
        padding: '15px'
      })),
      state('collapsed',style({
        height: 0,
        padding: '0px 15px'
      })),
      transition('expanded <=> collapsed',animate(200))
    ]),
  ]
})
export class HankSectionComponent {
  show:string = 'collapsed';
  toggle: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string;
}


@Component({
  selector: 'hank-accordion',
  template: `<div class='container'><ng-content></ng-content></div>`,
  styleUrls: ['./hank-accordion.component.css']
})
export class HankAccordionComponent implements AfterContentInit {
  @ContentChildren(HankSectionComponent) sections: QueryList<HankSectionComponent>;
  ngAfterContentInit() {
    this.sections.toArray().forEach((section) => {
      section.toggle.subscribe(() => {
        let change = section.show === 'expanded' ? 'collapsed' : 'expanded';
        this.sections.toArray().forEach((section) => section.show = 'collapsed');
        section.show = change;
      });
    });
  }
}
