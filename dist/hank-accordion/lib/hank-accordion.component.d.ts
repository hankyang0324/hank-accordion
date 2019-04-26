import { EventEmitter, QueryList, AfterContentInit } from '@angular/core';
export declare class HankSectionComponent {
    show: string;
    toggle: EventEmitter<any>;
    title: string;
}
export declare class HankAccordionComponent implements AfterContentInit {
    sections: QueryList<HankSectionComponent>;
    ngAfterContentInit(): void;
}
