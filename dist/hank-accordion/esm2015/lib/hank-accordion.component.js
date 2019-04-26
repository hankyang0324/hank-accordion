/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
export class HankSectionComponent {
    constructor() {
        this.show = 'collapsed';
        this.toggle = new EventEmitter();
    }
}
HankSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'hank-section',
                template: "<div class='accordion_Div'>\n    <div class='title_Div' (click)='toggle.emit()' [ngClass]='{showContent:show===\"expanded\"}'>\n        {{ title }}\n    </div>\n    <div class='content_Div' [@divState]='show'>\n        <ng-content></ng-content>\n    </div>\n<div>\n  ",
                animations: [
                    trigger('divState', [
                        state('expanded', style({
                            height: AUTO_STYLE,
                            padding: '15px'
                        })),
                        state('collapsed', style({
                            height: 0,
                            padding: '0px 15px'
                        })),
                        transition('expanded <=> collapsed', animate(200))
                    ]),
                ],
                styles: [".container{border-radius:3px;box-shadow:3px 3px 3px gray}.accordion_Div .title_Div{background-color:#f0f0f0;border-bottom:1px solid #d3d3d3;padding:15px;cursor:pointer}.accordion_Div .title_Div:hover{color:#4169e1}.accordion_Div .content_Div{padding:15px;border-left:1px solid #f0f0f0;overflow:hidden}.showContent{color:#4169e1}"]
            }] }
];
HankSectionComponent.propDecorators = {
    title: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HankSectionComponent.prototype.show;
    /** @type {?} */
    HankSectionComponent.prototype.toggle;
    /** @type {?} */
    HankSectionComponent.prototype.title;
}
export class HankAccordionComponent {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.sections.toArray().forEach((/**
         * @param {?} section
         * @return {?}
         */
        (section) => {
            section.toggle.subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let change = section.show === 'expanded' ? 'collapsed' : 'expanded';
                this.sections.toArray().forEach((/**
                 * @param {?} section
                 * @return {?}
                 */
                (section) => section.show = 'collapsed'));
                section.show = change;
            }));
        }));
    }
}
HankAccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'hank-accordion',
                template: `<div class='container'><ng-content></ng-content></div>`,
                styles: [".container{border-radius:3px;box-shadow:3px 3px 3px gray}.accordion_Div .title_Div{background-color:#f0f0f0;border-bottom:1px solid #d3d3d3;padding:15px;cursor:pointer}.accordion_Div .title_Div:hover{color:#4169e1}.accordion_Div .content_Div{padding:15px;border-left:1px solid #f0f0f0;overflow:hidden}.showContent{color:#4169e1}"]
            }] }
];
HankAccordionComponent.propDecorators = {
    sections: [{ type: ContentChildren, args: [HankSectionComponent,] }]
};
if (false) {
    /** @type {?} */
    HankAccordionComponent.prototype.sections;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuay1hY2NvcmRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGFuay1hY2NvcmRpb24vIiwic291cmNlcyI6WyJsaWIvaGFuay1hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFvQjVGLE1BQU0sT0FBTyxvQkFBb0I7SUFsQmpDO1FBbUJFLFNBQUksR0FBVSxXQUFXLENBQUM7UUFDMUIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXRELENBQUM7OztZQXRCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHVSQUE4QztnQkFFOUMsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxVQUFVLEVBQUM7d0JBQ2pCLEtBQUssQ0FBQyxVQUFVLEVBQUMsS0FBSyxDQUFDOzRCQUNyQixNQUFNLEVBQUUsVUFBVTs0QkFDbEIsT0FBTyxFQUFFLE1BQU07eUJBQ2hCLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsV0FBVyxFQUFDLEtBQUssQ0FBQzs0QkFDdEIsTUFBTSxFQUFFLENBQUM7NEJBQ1QsT0FBTyxFQUFFLFVBQVU7eUJBQ3BCLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsd0JBQXdCLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNsRCxDQUFDO2lCQUNIOzthQUNGOzs7b0JBSUUsS0FBSzs7OztJQUZOLG9DQUEwQjs7SUFDMUIsc0NBQW9EOztJQUNwRCxxQ0FBdUI7O0FBU3pCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFFakMsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDMUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7WUFBQyxHQUFHLEVBQUU7O29CQUN4QixNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtnQkFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsRUFBQyxDQUFDO2dCQUN6RSxPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUN4QixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSx3REFBd0Q7O2FBRW5FOzs7dUJBRUUsZUFBZSxTQUFDLG9CQUFvQjs7OztJQUFyQywwQ0FBaUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIEFVVE9fU1RZTEUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoYW5rLXNlY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaGFuay1hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oYW5rLWFjY29yZGlvbi5jb21wb25lbnQuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkaXZTdGF0ZScsW1xuICAgICAgc3RhdGUoJ2V4cGFuZGVkJyxzdHlsZSh7XG4gICAgICAgIGhlaWdodDogQVVUT19TVFlMRSxcbiAgICAgICAgcGFkZGluZzogJzE1cHgnXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJyxzdHlsZSh7XG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgcGFkZGluZzogJzBweCAxNXB4J1xuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsYW5pbWF0ZSgyMDApKVxuICAgIF0pLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhhbmtTZWN0aW9uQ29tcG9uZW50IHtcbiAgc2hvdzpzdHJpbmcgPSAnY29sbGFwc2VkJztcbiAgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hhbmstYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPSdjb250YWluZXInPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5gLFxuICBzdHlsZVVybHM6IFsnLi9oYW5rLWFjY29yZGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGFua0FjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKEhhbmtTZWN0aW9uQ29tcG9uZW50KSBzZWN0aW9uczogUXVlcnlMaXN0PEhhbmtTZWN0aW9uQ29tcG9uZW50PjtcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuc2VjdGlvbnMudG9BcnJheSgpLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24udG9nZ2xlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGxldCBjaGFuZ2UgPSBzZWN0aW9uLnNob3cgPT09ICdleHBhbmRlZCcgPyAnY29sbGFwc2VkJyA6ICdleHBhbmRlZCc7XG4gICAgICAgIHRoaXMuc2VjdGlvbnMudG9BcnJheSgpLmZvckVhY2goKHNlY3Rpb24pID0+IHNlY3Rpb24uc2hvdyA9ICdjb2xsYXBzZWQnKTtcbiAgICAgICAgc2VjdGlvbi5zaG93ID0gY2hhbmdlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==