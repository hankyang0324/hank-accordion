import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { Component, Input, EventEmitter, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HankSectionComponent {
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
                styles: [".container{border-radius:3px;box-shadow:2px 2px 2px gray}.accordion_Div .title_Div{background-color:#ebebeb;border-bottom:1px solid #d3d3d3;padding:15px;cursor:pointer}.accordion_Div .title_Div:hover{color:#4169e1}.accordion_Div .content_Div{padding:15px;border-left:1px solid #ebebeb;overflow:hidden}.showContent{color:#4169e1}"]
            }] }
];
HankSectionComponent.propDecorators = {
    title: [{ type: Input }]
};
class HankAccordionComponent {
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
                styles: [".container{border-radius:3px;box-shadow:2px 2px 2px gray}.accordion_Div .title_Div{background-color:#ebebeb;border-bottom:1px solid #d3d3d3;padding:15px;cursor:pointer}.accordion_Div .title_Div:hover{color:#4169e1}.accordion_Div .content_Div{padding:15px;border-left:1px solid #ebebeb;overflow:hidden}.showContent{color:#4169e1}"]
            }] }
];
HankAccordionComponent.propDecorators = {
    sections: [{ type: ContentChildren, args: [HankSectionComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HankAccordionModule {
}
HankAccordionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HankAccordionComponent, HankSectionComponent],
                imports: [CommonModule, BrowserAnimationsModule],
                exports: [HankAccordionComponent, HankSectionComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HankSectionComponent, HankAccordionComponent, HankAccordionModule };

//# sourceMappingURL=hank-accordion.js.map