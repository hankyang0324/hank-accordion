/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
var HankSectionComponent = /** @class */ (function () {
    function HankSectionComponent() {
        this.show = 'collapsed';
        this.toggle = new EventEmitter();
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
    return HankSectionComponent;
}());
export { HankSectionComponent };
if (false) {
    /** @type {?} */
    HankSectionComponent.prototype.show;
    /** @type {?} */
    HankSectionComponent.prototype.toggle;
    /** @type {?} */
    HankSectionComponent.prototype.title;
}
var HankAccordionComponent = /** @class */ (function () {
    function HankAccordionComponent() {
    }
    /**
     * @return {?}
     */
    HankAccordionComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sections.toArray().forEach((/**
         * @param {?} section
         * @return {?}
         */
        function (section) {
            section.toggle.subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var change = section.show === 'expanded' ? 'collapsed' : 'expanded';
                _this.sections.toArray().forEach((/**
                 * @param {?} section
                 * @return {?}
                 */
                function (section) { return section.show = 'collapsed'; }));
                section.show = change;
            }));
        }));
    };
    HankAccordionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hank-accordion',
                    template: "<div class='container'><ng-content></ng-content></div>",
                    styles: [".container{border-radius:3px;box-shadow:3px 3px 3px gray}.accordion_Div .title_Div{background-color:#f0f0f0;border-bottom:1px solid #d3d3d3;padding:15px;cursor:pointer}.accordion_Div .title_Div:hover{color:#4169e1}.accordion_Div .content_Div{padding:15px;border-left:1px solid #f0f0f0;overflow:hidden}.showContent{color:#4169e1}"]
                }] }
    ];
    HankAccordionComponent.propDecorators = {
        sections: [{ type: ContentChildren, args: [HankSectionComponent,] }]
    };
    return HankAccordionComponent;
}());
export { HankAccordionComponent };
if (false) {
    /** @type {?} */
    HankAccordionComponent.prototype.sections;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuay1hY2NvcmRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaGFuay1hY2NvcmRpb24vIiwic291cmNlcyI6WyJsaWIvaGFuay1hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFFNUY7SUFBQTtRQW1CRSxTQUFJLEdBQVUsV0FBVyxDQUFDO1FBQzFCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUV0RCxDQUFDOztnQkF0QkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qix1UkFBOEM7b0JBRTlDLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsVUFBVSxFQUFDOzRCQUNqQixLQUFLLENBQUMsVUFBVSxFQUFDLEtBQUssQ0FBQztnQ0FDckIsTUFBTSxFQUFFLFVBQVU7Z0NBQ2xCLE9BQU8sRUFBRSxNQUFNOzZCQUNoQixDQUFDLENBQUM7NEJBQ0gsS0FBSyxDQUFDLFdBQVcsRUFBQyxLQUFLLENBQUM7Z0NBQ3RCLE1BQU0sRUFBRSxDQUFDO2dDQUNULE9BQU8sRUFBRSxVQUFVOzZCQUNwQixDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLHdCQUF3QixFQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDbEQsQ0FBQztxQkFDSDs7aUJBQ0Y7Ozt3QkFJRSxLQUFLOztJQUNSLDJCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FKWSxvQkFBb0I7OztJQUMvQixvQ0FBMEI7O0lBQzFCLHNDQUFvRDs7SUFDcEQscUNBQXVCOztBQUl6QjtJQUFBO0lBZ0JBLENBQUM7Ozs7SUFUQyxtREFBa0I7OztJQUFsQjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ3RDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1lBQUM7O29CQUNuQixNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtnQkFDbkUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLEVBQTFCLENBQTBCLEVBQUMsQ0FBQztnQkFDekUsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7WUFDeEIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsd0RBQXdEOztpQkFFbkU7OzsyQkFFRSxlQUFlLFNBQUMsb0JBQW9COztJQVV2Qyw2QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBWFksc0JBQXNCOzs7SUFDakMsMENBQWlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBBVVRPX1NUWUxFLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucydcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGFuay1zZWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hhbmstYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGFuay1hY2NvcmRpb24uY29tcG9uZW50LmNzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZGl2U3RhdGUnLFtcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXG4gICAgICAgIHBhZGRpbmc6ICcxNXB4J1xuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHBhZGRpbmc6ICcwcHggMTVweCdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLGFuaW1hdGUoMjAwKSlcbiAgICBdKSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIYW5rU2VjdGlvbkNvbXBvbmVudCB7XG4gIHNob3c6c3RyaW5nID0gJ2NvbGxhcHNlZCc7XG4gIHRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoYW5rLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz0nY29udGFpbmVyJz48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vaGFuay1hY2NvcmRpb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhhbmtBY2NvcmRpb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihIYW5rU2VjdGlvbkNvbXBvbmVudCkgc2VjdGlvbnM6IFF1ZXJ5TGlzdDxIYW5rU2VjdGlvbkNvbXBvbmVudD47XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnNlY3Rpb25zLnRvQXJyYXkoKS5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBzZWN0aW9uLnRvZ2dsZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBsZXQgY2hhbmdlID0gc2VjdGlvbi5zaG93ID09PSAnZXhwYW5kZWQnID8gJ2NvbGxhcHNlZCcgOiAnZXhwYW5kZWQnO1xuICAgICAgICB0aGlzLnNlY3Rpb25zLnRvQXJyYXkoKS5mb3JFYWNoKChzZWN0aW9uKSA9PiBzZWN0aW9uLnNob3cgPSAnY29sbGFwc2VkJyk7XG4gICAgICAgIHNlY3Rpb24uc2hvdyA9IGNoYW5nZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=