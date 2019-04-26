(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/core'), require('@angular/common'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('hank-accordion', ['exports', '@angular/animations', '@angular/core', '@angular/common', '@angular/platform-browser/animations'], factory) :
    (factory((global['hank-accordion'] = {}),global.ng.animations,global.ng.core,global.ng.common,global.ng.platformBrowser.animations));
}(this, (function (exports,animations,core,common,animations$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HankSectionComponent = /** @class */ (function () {
        function HankSectionComponent() {
            this.show = 'collapsed';
            this.toggle = new core.EventEmitter();
        }
        HankSectionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'hank-section',
                        template: "<div class='accordion_Div'>\n    <div class='title_Div' (click)='toggle.emit()' [ngClass]='{showContent:show===\"expanded\"}'>\n        {{ title }}\n    </div>\n    <div class='content_Div' [@divState]='show'>\n        <ng-content></ng-content>\n    </div>\n<div>\n  ",
                        animations: [
                            animations.trigger('divState', [
                                animations.state('expanded', animations.style({
                                    height: animations.AUTO_STYLE,
                                    padding: '15px'
                                })),
                                animations.state('collapsed', animations.style({
                                    height: 0,
                                    padding: '0px 15px'
                                })),
                                animations.transition('expanded <=> collapsed', animations.animate(200))
                            ]),
                        ],
                        styles: [".container{border-radius:3px;box-shadow:3px 3px 3px gray}.accordion_Div .title_Div{background-color:#f0f0f0;border-bottom:1px solid #d3d3d3;padding:15px;cursor:pointer}.accordion_Div .title_Div:hover{color:#4169e1}.accordion_Div .content_Div{padding:15px;border-left:1px solid #f0f0f0;overflow:hidden}.showContent{color:#4169e1}"]
                    }] }
        ];
        HankSectionComponent.propDecorators = {
            title: [{ type: core.Input }]
        };
        return HankSectionComponent;
    }());
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
                this.sections.toArray().forEach(( /**
                 * @param {?} section
                 * @return {?}
                 */function (section) {
                    section.toggle.subscribe(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var change = section.show === 'expanded' ? 'collapsed' : 'expanded';
                        _this.sections.toArray().forEach(( /**
                         * @param {?} section
                         * @return {?}
                         */function (section) { return section.show = 'collapsed'; }));
                        section.show = change;
                    }));
                }));
            };
        HankAccordionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'hank-accordion',
                        template: "<div class='container'><ng-content></ng-content></div>",
                        styles: [".container{border-radius:3px;box-shadow:3px 3px 3px gray}.accordion_Div .title_Div{background-color:#f0f0f0;border-bottom:1px solid #d3d3d3;padding:15px;cursor:pointer}.accordion_Div .title_Div:hover{color:#4169e1}.accordion_Div .content_Div{padding:15px;border-left:1px solid #f0f0f0;overflow:hidden}.showContent{color:#4169e1}"]
                    }] }
        ];
        HankAccordionComponent.propDecorators = {
            sections: [{ type: core.ContentChildren, args: [HankSectionComponent,] }]
        };
        return HankAccordionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HankAccordionModule = /** @class */ (function () {
        function HankAccordionModule() {
        }
        HankAccordionModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [HankAccordionComponent, HankSectionComponent],
                        imports: [common.CommonModule, animations$1.BrowserAnimationsModule],
                        exports: [HankAccordionComponent, HankSectionComponent]
                    },] }
        ];
        return HankAccordionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.HankSectionComponent = HankSectionComponent;
    exports.HankAccordionComponent = HankAccordionComponent;
    exports.HankAccordionModule = HankAccordionModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=hank-accordion.umd.js.map