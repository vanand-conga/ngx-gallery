(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['ngx-gallery'] = {}, global.core, global.common, global.platformBrowser));
}(this, function (exports, core, common, platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-action.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryActionComponent = /** @class */ (function () {
        function NgxGalleryActionComponent() {
            this.disabled = false;
            this.titleText = '';
            this.onClick = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        NgxGalleryActionComponent.prototype.handleClick = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!this.disabled) {
                this.onClick.emit(event);
            }
            event.stopPropagation();
            event.preventDefault();
        };
        NgxGalleryActionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-gallery-action',
                        template: "\n        <div class=\"ngx-gallery-icon\" [class.ngx-gallery-icon-disabled]=\"disabled\"\n            aria-hidden=\"true\"\n            title=\"{{ titleText }}\"\n            (click)=\"handleClick($event)\">\n                <i class=\"ngx-gallery-icon-content {{ icon }}\"></i>\n        </div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    },] }
        ];
        NgxGalleryActionComponent.propDecorators = {
            icon: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            titleText: [{ type: core.Input }],
            onClick: [{ type: core.Output }]
        };
        return NgxGalleryActionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-arrows.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryArrowsComponent = /** @class */ (function () {
        function NgxGalleryArrowsComponent() {
            this.onPrevClick = new core.EventEmitter();
            this.onNextClick = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        NgxGalleryArrowsComponent.prototype.handlePrevClick = /**
         * @return {?}
         */
        function () {
            this.onPrevClick.emit();
        };
        /**
         * @return {?}
         */
        NgxGalleryArrowsComponent.prototype.handleNextClick = /**
         * @return {?}
         */
        function () {
            this.onNextClick.emit();
        };
        NgxGalleryArrowsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-gallery-arrows',
                        template: "\n        <div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-left\">\n            <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handlePrevClick()\" [class.ngx-gallery-disabled]=\"prevDisabled\">\n                <i class=\"ngx-gallery-icon-content {{arrowPrevIcon}}\"></i>\n            </div>\n        </div>\n        <div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-right\">\n            <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handleNextClick()\" [class.ngx-gallery-disabled]=\"nextDisabled\">\n                <i class=\"ngx-gallery-icon-content {{arrowNextIcon}}\"></i>\n            </div>\n        </div>\n    ",
                        styles: [".ngx-gallery-arrow-wrapper { position: absolute; height: 100%; width: 1px; display: table; z-index: 2000; table-layout: fixed; } .ngx-gallery-arrow-left { left: 0px; } .ngx-gallery-arrow-right { right: 0px; } .ngx-gallery-arrow { top: 50%; transform: translateY(-50%); cursor: pointer; } .ngx-gallery-arrow.ngx-gallery-disabled { opacity: 0.6; cursor: default; } .ngx-gallery-arrow-left .ngx-gallery-arrow { left: 10px; } .ngx-gallery-arrow-right .ngx-gallery-arrow { right: 10px; } "]
                    },] }
        ];
        NgxGalleryArrowsComponent.propDecorators = {
            prevDisabled: [{ type: core.Input }],
            nextDisabled: [{ type: core.Input }],
            arrowPrevIcon: [{ type: core.Input }],
            arrowNextIcon: [{ type: core.Input }],
            onPrevClick: [{ type: core.Output }],
            onNextClick: [{ type: core.Output }]
        };
        return NgxGalleryArrowsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-bullets.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryBulletsComponent = /** @class */ (function () {
        function NgxGalleryBulletsComponent() {
            this.active = 0;
            this.onChange = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        NgxGalleryBulletsComponent.prototype.getBullets = /**
         * @return {?}
         */
        function () {
            return Array(this.count);
        };
        /**
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        NgxGalleryBulletsComponent.prototype.handleChange = /**
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        function (event, index) {
            this.onChange.emit(index);
        };
        NgxGalleryBulletsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-gallery-bullets',
                        template: "\n        <div class=\"ngx-gallery-bullet\" *ngFor=\"let bullet of getBullets(); let i = index;\" (click)=\"handleChange($event, i)\" [ngClass]=\"{ 'ngx-gallery-active': i == active }\"></div>\n    ",
                        styles: [":host { position: absolute; z-index: 2000; display: inline-flex; left: 50%; transform: translateX(-50%); bottom: 0px; padding: 10px; } .ngx-gallery-bullet { width: 10px; height: 10px; border-radius: 50%; cursor: pointer; background: white; } .ngx-gallery-bullet:not(:first-child) { margin-left: 5px; } .ngx-gallery-bullet:hover, .ngx-gallery-bullet.ngx-gallery-active { background: black; } "]
                    },] }
        ];
        NgxGalleryBulletsComponent.propDecorators = {
            count: [{ type: core.Input }],
            active: [{ type: core.Input }],
            onChange: [{ type: core.Output }]
        };
        return NgxGalleryBulletsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-helper.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryHelperService = /** @class */ (function () {
        function NgxGalleryHelperService(renderer) {
            this.renderer = renderer;
            this.swipeHandlers = new Map();
        }
        /**
         * @param {?} status
         * @param {?} element
         * @param {?} id
         * @param {?} nextHandler
         * @param {?} prevHandler
         * @return {?}
         */
        NgxGalleryHelperService.prototype.manageSwipe = /**
         * @param {?} status
         * @param {?} element
         * @param {?} id
         * @param {?} nextHandler
         * @param {?} prevHandler
         * @return {?}
         */
        function (status, element, id, nextHandler, prevHandler) {
            /** @type {?} */
            var handlers = this.getSwipeHandlers(id);
            // swipeleft and swiperight are available only if hammerjs is included
            try {
                if (status && !handlers) {
                    this.swipeHandlers.set(id, [
                        this.renderer.listen(element.nativeElement, 'swipeleft', (/**
                         * @return {?}
                         */
                        function () { return nextHandler(); })),
                        this.renderer.listen(element.nativeElement, 'swiperight', (/**
                         * @return {?}
                         */
                        function () { return prevHandler(); }))
                    ]);
                }
                else if (!status && handlers) {
                    handlers.map((/**
                     * @param {?} handler
                     * @return {?}
                     */
                    function (handler) { return handler(); }));
                    this.removeSwipeHandlers(id);
                }
            }
            catch (e) { }
        };
        /**
         * @param {?} url
         * @return {?}
         */
        NgxGalleryHelperService.prototype.validateUrl = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            if (url.replace) {
                return url.replace(new RegExp(' ', 'g'), '%20')
                    .replace(new RegExp('\'', 'g'), '%27');
            }
            else {
                return url;
            }
        };
        /**
         * @param {?} image
         * @return {?}
         */
        NgxGalleryHelperService.prototype.getBackgroundUrl = /**
         * @param {?} image
         * @return {?}
         */
        function (image) {
            return 'url(\'' + this.validateUrl(image) + '\')';
        };
        /**
         * @private
         * @param {?} id
         * @return {?}
         */
        NgxGalleryHelperService.prototype.getSwipeHandlers = /**
         * @private
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.swipeHandlers.get(id);
        };
        /**
         * @private
         * @param {?} id
         * @return {?}
         */
        NgxGalleryHelperService.prototype.removeSwipeHandlers = /**
         * @private
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this.swipeHandlers.delete(id);
        };
        NgxGalleryHelperService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgxGalleryHelperService.ctorParameters = function () { return [
            { type: core.Renderer2 }
        ]; };
        return NgxGalleryHelperService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-animation.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryAnimation = /** @class */ (function () {
        function NgxGalleryAnimation() {
        }
        NgxGalleryAnimation.Fade = 'fade';
        NgxGalleryAnimation.Slide = 'slide';
        NgxGalleryAnimation.Rotate = 'rotate';
        NgxGalleryAnimation.Zoom = 'zoom';
        return NgxGalleryAnimation;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-image.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryImageComponent = /** @class */ (function () {
        function NgxGalleryImageComponent(sanitization, elementRef, helperService) {
            this.sanitization = sanitization;
            this.elementRef = elementRef;
            this.helperService = helperService;
            this.onClick = new core.EventEmitter();
            this.onActiveChange = new core.EventEmitter();
            this.canChangeImage = true;
        }
        /**
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.arrows && this.arrowsAutoHide) {
                this.arrows = false;
            }
            if (this.autoPlay) {
                this.startAutoPlay();
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            if (changes['swipe']) {
                this.helperService.manageSwipe(this.swipe, this.elementRef, 'image', (/**
                 * @return {?}
                 */
                function () { return _this.showNext(); }), (/**
                 * @return {?}
                 */
                function () { return _this.showPrev(); }));
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.onMouseEnter = /**
         * @return {?}
         */
        function () {
            if (this.arrowsAutoHide && !this.arrows) {
                this.arrows = true;
            }
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.stopAutoPlay();
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.onMouseLeave = /**
         * @return {?}
         */
        function () {
            if (this.arrowsAutoHide && this.arrows) {
                this.arrows = false;
            }
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.startAutoPlay();
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.reset = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.selectedIndex = index;
        };
        /**
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.getImages = /**
         * @return {?}
         */
        function () {
            if (!this.images) {
                return [];
            }
            if (this.lazyLoading) {
                /** @type {?} */
                var indexes_1 = [this.selectedIndex];
                /** @type {?} */
                var prevIndex = this.selectedIndex - 1;
                if (prevIndex === -1 && this.infinityMove) {
                    indexes_1.push(this.images.length - 1);
                }
                else if (prevIndex >= 0) {
                    indexes_1.push(prevIndex);
                }
                /** @type {?} */
                var nextIndex = this.selectedIndex + 1;
                if (nextIndex == this.images.length && this.infinityMove) {
                    indexes_1.push(0);
                }
                else if (nextIndex < this.images.length) {
                    indexes_1.push(nextIndex);
                }
                return this.images.filter((/**
                 * @param {?} img
                 * @param {?} i
                 * @return {?}
                 */
                function (img, i) { return indexes_1.indexOf(i) != -1; }));
            }
            else {
                return this.images;
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.startAutoPlay = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.stopAutoPlay();
            this.timer = setInterval((/**
             * @return {?}
             */
            function () {
                if (!_this.showNext()) {
                    _this.selectedIndex = -1;
                    _this.showNext();
                }
            }), this.autoPlayInterval);
        };
        /**
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.stopAutoPlay = /**
         * @return {?}
         */
        function () {
            if (this.timer) {
                clearInterval(this.timer);
            }
        };
        /**
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.handleClick = /**
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        function (event, index) {
            if (this.clickable) {
                this.onClick.emit(index);
                event.stopPropagation();
                event.preventDefault();
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.show = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.selectedIndex = index;
            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
        };
        /**
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.showNext = /**
         * @return {?}
         */
        function () {
            if (this.canShowNext() && this.canChangeImage) {
                this.selectedIndex++;
                if (this.selectedIndex === this.images.length) {
                    this.selectedIndex = 0;
                }
                this.onActiveChange.emit(this.selectedIndex);
                this.setChangeTimeout();
                return true;
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.showPrev = /**
         * @return {?}
         */
        function () {
            if (this.canShowPrev() && this.canChangeImage) {
                this.selectedIndex--;
                if (this.selectedIndex < 0) {
                    this.selectedIndex = this.images.length - 1;
                }
                this.onActiveChange.emit(this.selectedIndex);
                this.setChangeTimeout();
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.setChangeTimeout = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.canChangeImage = false;
            /** @type {?} */
            var timeout = 1000;
            if (this.animation === NgxGalleryAnimation.Slide
                || this.animation === NgxGalleryAnimation.Fade) {
                timeout = 500;
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.canChangeImage = true;
            }), timeout);
        };
        /**
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.canShowNext = /**
         * @return {?}
         */
        function () {
            if (this.images) {
                return this.infinityMove || this.selectedIndex < this.images.length - 1
                    ? true : false;
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.canShowPrev = /**
         * @return {?}
         */
        function () {
            if (this.images) {
                return this.infinityMove || this.selectedIndex > 0 ? true : false;
            }
            else {
                return false;
            }
        };
        /**
         * @param {?} image
         * @return {?}
         */
        NgxGalleryImageComponent.prototype.getSafeUrl = /**
         * @param {?} image
         * @return {?}
         */
        function (image) {
            return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
        };
        NgxGalleryImageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-gallery-image',
                        template: "\n        <div class=\"ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}\">\n            <div class=\"ngx-gallery-image\" *ngFor=\"let image of getImages(); let i = index;\" [ngClass]=\"{ 'ngx-gallery-active': selectedIndex == image.index, 'ngx-gallery-inactive-left': selectedIndex > image.index, 'ngx-gallery-inactive-right': selectedIndex < image.index, 'ngx-gallery-clickable': clickable }\" [style.background-image]=\"getSafeUrl(image.src)\" (click)=\"handleClick($event, image.index)\">\n                <div class=\"ngx-gallery-icons-wrapper\">\n                    <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n                </div>\n                <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\" [innerHTML]=\"descriptions[image.index]\" (click)=\"$event.stopPropagation()\"></div>\n            </div>\n        </div>\n        <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"selectedIndex\" (onChange)=\"show($event)\"></ngx-gallery-bullets>\n        <ngx-gallery-arrows class=\"ngx-gallery-image-size-{{size}}\" *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    ",
                        styles: [":host { width: 100%; display: inline-block; position: relative; } .ngx-gallery-image-wrapper { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; overflow: hidden; } .ngx-gallery-image { background-position: center; background-repeat: no-repeat; height: 100%; width: 100%; position: absolute; top: 0px; } .ngx-gallery-image.ngx-gallery-active { z-index: 1000; } .ngx-gallery-image-size-cover .ngx-gallery-image { background-size: cover; } .ngx-gallery-image-size-contain .ngx-gallery-image { background-size: contain; } .ngx-gallery-animation-fade .ngx-gallery-image { left: 0px; opacity: 0; transition: 0.5s ease-in-out; } .ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active { opacity: 1; } .ngx-gallery-animation-slide .ngx-gallery-image { transition: 0.5s ease-in-out; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-active { left: 0px; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-left { left: -100%; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-right { left: 100%; } .ngx-gallery-animation-rotate .ngx-gallery-image { transition: 1s ease; transform: scale(3.5, 3.5) rotate(90deg); left: 0px; opacity: 0; } .ngx-gallery-animation-rotate .ngx-gallery-image.ngx-gallery-active { transform: scale(1, 1) rotate(0deg); opacity: 1; } .ngx-gallery-animation-zoom .ngx-gallery-image { transition: 1s ease; transform: scale(2.5, 2.5); left: 0px; opacity: 0; } .ngx-gallery-animation-zoom .ngx-gallery-image.ngx-gallery-active { transform: scale(1, 1); opacity: 1; } .ngx-gallery-image-text { width: 100%; background: rgba(0, 0, 0, 0.7); padding: 10px; text-align: center; color: white; font-size: 16px; position: absolute; bottom: 0px; z-index: 10; } "]
                    },] }
        ];
        /** @nocollapse */
        NgxGalleryImageComponent.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer },
            { type: core.ElementRef },
            { type: NgxGalleryHelperService }
        ]; };
        NgxGalleryImageComponent.propDecorators = {
            images: [{ type: core.Input }],
            clickable: [{ type: core.Input }],
            selectedIndex: [{ type: core.Input }],
            arrows: [{ type: core.Input }],
            arrowsAutoHide: [{ type: core.Input }],
            swipe: [{ type: core.Input }],
            animation: [{ type: core.Input }],
            size: [{ type: core.Input }],
            arrowPrevIcon: [{ type: core.Input }],
            arrowNextIcon: [{ type: core.Input }],
            autoPlay: [{ type: core.Input }],
            autoPlayInterval: [{ type: core.Input }],
            autoPlayPauseOnHover: [{ type: core.Input }],
            infinityMove: [{ type: core.Input }],
            lazyLoading: [{ type: core.Input }],
            actions: [{ type: core.Input }],
            descriptions: [{ type: core.Input }],
            showDescription: [{ type: core.Input }],
            bullets: [{ type: core.Input }],
            onClick: [{ type: core.Output }],
            onActiveChange: [{ type: core.Output }],
            onMouseEnter: [{ type: core.HostListener, args: ['mouseenter',] }],
            onMouseLeave: [{ type: core.HostListener, args: ['mouseleave',] }]
        };
        return NgxGalleryImageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-order.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryOrder = /** @class */ (function () {
        function NgxGalleryOrder() {
        }
        NgxGalleryOrder.Column = 1;
        NgxGalleryOrder.Row = 2;
        NgxGalleryOrder.Page = 3;
        return NgxGalleryOrder;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-thumbnails.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryThumbnailsComponent = /** @class */ (function () {
        function NgxGalleryThumbnailsComponent(sanitization, elementRef, helperService) {
            this.sanitization = sanitization;
            this.elementRef = elementRef;
            this.helperService = helperService;
            this.minStopIndex = 0;
            this.onActiveChange = new core.EventEmitter();
            this.index = 0;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            if (changes['selectedIndex']) {
                this.validateIndex();
            }
            if (changes['swipe']) {
                this.helperService.manageSwipe(this.swipe, this.elementRef, 'thumbnails', (/**
                 * @return {?}
                 */
                function () { return _this.moveRight(); }), (/**
                 * @return {?}
                 */
                function () { return _this.moveLeft(); }));
            }
            if (this.images) {
                this.remainingCountValue = this.images.length - (this.rows * this.columns);
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.onMouseEnter = /**
         * @return {?}
         */
        function () {
            this.mouseenter = true;
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.onMouseLeave = /**
         * @return {?}
         */
        function () {
            this.mouseenter = false;
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.reset = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.selectedIndex = index;
            this.setDefaultPosition();
            this.index = 0;
            this.validateIndex();
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.getImages = /**
         * @return {?}
         */
        function () {
            if (!this.images) {
                return [];
            }
            if (this.remainingCount) {
                return this.images.slice(0, this.rows * this.columns);
            }
            else if (this.lazyLoading && this.order != NgxGalleryOrder.Row) {
                /** @type {?} */
                var stopIndex = 0;
                if (this.order === NgxGalleryOrder.Column) {
                    stopIndex = (this.index + this.columns + this.moveSize) * this.rows;
                }
                else if (this.order === NgxGalleryOrder.Page) {
                    stopIndex = this.index + ((this.columns * this.rows) * 2);
                }
                if (stopIndex <= this.minStopIndex) {
                    stopIndex = this.minStopIndex;
                }
                else {
                    this.minStopIndex = stopIndex;
                }
                return this.images.slice(0, stopIndex);
            }
            else {
                return this.images;
            }
        };
        /**
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.handleClick = /**
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        function (event, index) {
            if (!this.hasLink(index)) {
                this.selectedIndex = index;
                this.onActiveChange.emit(index);
                event.stopPropagation();
                event.preventDefault();
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.hasLink = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this.links && this.links.length && this.links[index])
                return true;
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.moveRight = /**
         * @return {?}
         */
        function () {
            if (this.canMoveRight()) {
                this.index += this.moveSize;
                /** @type {?} */
                var maxIndex = this.getMaxIndex() - this.columns;
                if (this.index > maxIndex) {
                    this.index = maxIndex;
                }
                this.setThumbnailsPosition();
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.moveLeft = /**
         * @return {?}
         */
        function () {
            if (this.canMoveLeft()) {
                this.index -= this.moveSize;
                if (this.index < 0) {
                    this.index = 0;
                }
                this.setThumbnailsPosition();
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.canMoveRight = /**
         * @return {?}
         */
        function () {
            return this.index + this.columns < this.getMaxIndex() ? true : false;
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.canMoveLeft = /**
         * @return {?}
         */
        function () {
            return this.index !== 0 ? true : false;
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.getThumbnailLeft = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var calculatedIndex;
            if (this.order === NgxGalleryOrder.Column) {
                calculatedIndex = Math.floor(index / this.rows);
            }
            else if (this.order === NgxGalleryOrder.Page) {
                calculatedIndex = (index % this.columns) + (Math.floor(index / (this.rows * this.columns)) * this.columns);
            }
            else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
                calculatedIndex = index % this.columns;
            }
            else {
                calculatedIndex = index % Math.ceil(this.images.length / this.rows);
            }
            return this.getThumbnailPosition(calculatedIndex, this.columns);
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.getThumbnailTop = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var calculatedIndex;
            if (this.order === NgxGalleryOrder.Column) {
                calculatedIndex = index % this.rows;
            }
            else if (this.order === NgxGalleryOrder.Page) {
                calculatedIndex = Math.floor(index / this.columns) - (Math.floor(index / (this.rows * this.columns)) * this.rows);
            }
            else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
                calculatedIndex = Math.floor(index / this.columns);
            }
            else {
                calculatedIndex = Math.floor(index / Math.ceil(this.images.length / this.rows));
            }
            return this.getThumbnailPosition(calculatedIndex, this.rows);
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.getThumbnailWidth = /**
         * @return {?}
         */
        function () {
            return this.getThumbnailDimension(this.columns);
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.getThumbnailHeight = /**
         * @return {?}
         */
        function () {
            return this.getThumbnailDimension(this.rows);
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.setThumbnailsPosition = /**
         * @return {?}
         */
        function () {
            this.thumbnailsLeft = -((100 / this.columns) * this.index) + '%';
            this.thumbnailsMarginLeft = -((this.margin - (((this.columns - 1)
                * this.margin) / this.columns)) * this.index) + 'px';
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.setDefaultPosition = /**
         * @return {?}
         */
        function () {
            this.thumbnailsLeft = '0px';
            this.thumbnailsMarginLeft = '0px';
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.canShowArrows = /**
         * @return {?}
         */
        function () {
            if (this.remainingCount) {
                return false;
            }
            else if (this.arrows && this.images && this.images.length > this.getVisibleCount()
                && (!this.arrowsAutoHide || this.mouseenter)) {
                return true;
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.validateIndex = /**
         * @return {?}
         */
        function () {
            if (this.images) {
                /** @type {?} */
                var newIndex = void 0;
                if (this.order === NgxGalleryOrder.Column) {
                    newIndex = Math.floor(this.selectedIndex / this.rows);
                }
                else {
                    newIndex = this.selectedIndex % Math.ceil(this.images.length / this.rows);
                }
                if (this.remainingCount) {
                    newIndex = 0;
                }
                if (newIndex < this.index || newIndex >= this.index + this.columns) {
                    /** @type {?} */
                    var maxIndex = this.getMaxIndex() - this.columns;
                    this.index = newIndex > maxIndex ? maxIndex : newIndex;
                    this.setThumbnailsPosition();
                }
            }
        };
        /**
         * @param {?} image
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.getSafeUrl = /**
         * @param {?} image
         * @return {?}
         */
        function (image) {
            return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
        };
        /**
         * @private
         * @param {?} index
         * @param {?} count
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.getThumbnailPosition = /**
         * @private
         * @param {?} index
         * @param {?} count
         * @return {?}
         */
        function (index, count) {
            return this.getSafeStyle('calc(' + ((100 / count) * index) + '% + '
                + ((this.margin - (((count - 1) * this.margin) / count)) * index) + 'px)');
        };
        /**
         * @private
         * @param {?} count
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.getThumbnailDimension = /**
         * @private
         * @param {?} count
         * @return {?}
         */
        function (count) {
            if (this.margin !== 0) {
                return this.getSafeStyle('calc(' + (100 / count) + '% - '
                    + (((count - 1) * this.margin) / count) + 'px)');
            }
            else {
                return this.getSafeStyle('calc(' + (100 / count) + '% + 1px)');
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.getMaxIndex = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.order == NgxGalleryOrder.Page) {
                /** @type {?} */
                var maxIndex = (Math.floor(this.images.length / this.getVisibleCount()) * this.columns);
                if (this.images.length % this.getVisibleCount() > this.columns) {
                    maxIndex += this.columns;
                }
                else {
                    maxIndex += this.images.length % this.getVisibleCount();
                }
                return maxIndex;
            }
            else {
                return Math.ceil(this.images.length / this.rows);
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.getVisibleCount = /**
         * @private
         * @return {?}
         */
        function () {
            return this.columns * this.rows;
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        NgxGalleryThumbnailsComponent.prototype.getSafeStyle = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return this.sanitization.bypassSecurityTrustStyle(value);
        };
        NgxGalleryThumbnailsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-gallery-thumbnails',
                        template: "\n    <div class=\"ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}\">\n        <div class=\"ngx-gallery-thumbnails\" [style.transform]=\"'translateX(' + thumbnailsLeft + ')'\" [style.marginLeft]=\"thumbnailsMarginLeft\">\n            <a [href]=\"hasLink(i) ? links[i] : '#'\" [target]=\"linkTarget\" class=\"ngx-gallery-thumbnail\" *ngFor=\"let image of getImages(); let i = index;\" [style.background-image]=\"getSafeUrl(image)\" (click)=\"handleClick($event, i)\" [style.width]=\"getThumbnailWidth()\" [style.height]=\"getThumbnailHeight()\" [style.left]=\"getThumbnailLeft(i)\" [style.top]=\"getThumbnailTop(i)\" [ngClass]=\"{ 'ngx-gallery-active': i == selectedIndex, 'ngx-gallery-clickable': clickable }\" [attr.aria-label]=\"labels[i]\">\n                <div class=\"ngx-gallery-icons-wrapper\">\n                    <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, i)\"></ngx-gallery-action>\n                </div>\n                <div class=\"ngx-gallery-remaining-count-overlay\" *ngIf=\"remainingCount && remainingCountValue && (i == (rows * columns) - 1)\">\n                    <span class=\"ngx-gallery-remaining-count\">+{{remainingCountValue}}</span>\n                </div>\n            </a>\n        </div>\n    </div>\n    <ngx-gallery-arrows *ngIf=\"canShowArrows()\" (onPrevClick)=\"moveLeft()\" (onNextClick)=\"moveRight()\" [prevDisabled]=\"!canMoveLeft()\" [nextDisabled]=\"!canMoveRight()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    ",
                        styles: [":host { width: 100%; display: inline-block; position: relative; } .ngx-gallery-thumbnails-wrapper { width: 100%; height: 100%; position: absolute; overflow: hidden; } .ngx-gallery-thumbnails { height: 100%; width: 100%; position: absolute; left: 0px; transform: translateX(0); transition: transform 0.5s ease-in-out; will-change: transform; } .ngx-gallery-thumbnails .ngx-gallery-thumbnail { position: absolute; height: 100%; background-position: center; background-repeat: no-repeat; text-decoration: none; } .ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail { background-size: cover; } .ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail { background-size: contain; } .ngx-gallery-remaining-count-overlay { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; background-color: rgba(0, 0, 0, 0.4); } .ngx-gallery-remaining-count { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 30px; } "]
                    },] }
        ];
        /** @nocollapse */
        NgxGalleryThumbnailsComponent.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer },
            { type: core.ElementRef },
            { type: NgxGalleryHelperService }
        ]; };
        NgxGalleryThumbnailsComponent.propDecorators = {
            images: [{ type: core.Input }],
            links: [{ type: core.Input }],
            labels: [{ type: core.Input }],
            linkTarget: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            rows: [{ type: core.Input }],
            arrows: [{ type: core.Input }],
            arrowsAutoHide: [{ type: core.Input }],
            margin: [{ type: core.Input }],
            selectedIndex: [{ type: core.Input }],
            clickable: [{ type: core.Input }],
            swipe: [{ type: core.Input }],
            size: [{ type: core.Input }],
            arrowPrevIcon: [{ type: core.Input }],
            arrowNextIcon: [{ type: core.Input }],
            moveSize: [{ type: core.Input }],
            order: [{ type: core.Input }],
            remainingCount: [{ type: core.Input }],
            lazyLoading: [{ type: core.Input }],
            actions: [{ type: core.Input }],
            onActiveChange: [{ type: core.Output }],
            onMouseEnter: [{ type: core.HostListener, args: ['mouseenter',] }],
            onMouseLeave: [{ type: core.HostListener, args: ['mouseleave',] }]
        };
        return NgxGalleryThumbnailsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-preview.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryPreviewComponent = /** @class */ (function () {
        function NgxGalleryPreviewComponent(sanitization, elementRef, helperService, renderer, changeDetectorRef) {
            this.sanitization = sanitization;
            this.elementRef = elementRef;
            this.helperService = helperService;
            this.renderer = renderer;
            this.changeDetectorRef = changeDetectorRef;
            this.showSpinner = false;
            this.positionLeft = 0;
            this.positionTop = 0;
            this.zoomValue = 1;
            this.loading = false;
            this.rotateValue = 0;
            this.index = 0;
            this.onOpen = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onActiveChange = new core.EventEmitter();
            this.isOpen = false;
            this.initialX = 0;
            this.initialY = 0;
            this.initialLeft = 0;
            this.initialTop = 0;
            this.isMove = false;
        }
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.arrows && this.arrowsAutoHide) {
                this.arrows = false;
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            if (changes['swipe']) {
                this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', (/**
                 * @return {?}
                 */
                function () { return _this.showNext(); }), (/**
                 * @return {?}
                 */
                function () { return _this.showPrev(); }));
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.keyDownListener) {
                this.keyDownListener();
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.onMouseEnter = /**
         * @return {?}
         */
        function () {
            if (this.arrowsAutoHide && !this.arrows) {
                this.arrows = true;
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.onMouseLeave = /**
         * @return {?}
         */
        function () {
            if (this.arrowsAutoHide && this.arrows) {
                this.arrows = false;
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (this.isOpen) {
                if (this.keyboardNavigation) {
                    if (this.isKeyboardPrev(e)) {
                        this.showPrev();
                    }
                    else if (this.isKeyboardNext(e)) {
                        this.showNext();
                    }
                }
                if (this.closeOnEsc && this.isKeyboardEsc(e)) {
                    this.close();
                }
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.open = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            var _this = this;
            this.onOpen.emit();
            this.index = index;
            this.isOpen = true;
            this.show(true);
            if (this.forceFullscreen) {
                this.manageFullscreen();
            }
            this.keyDownListener = this.renderer.listen("window", "keydown", (/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this.onKeyDown(e); }));
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            this.isOpen = false;
            this.closeFullscreen();
            this.onClose.emit();
            this.stopAutoPlay();
            if (this.keyDownListener) {
                this.keyDownListener();
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.imageMouseEnter = /**
         * @return {?}
         */
        function () {
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.stopAutoPlay();
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.imageMouseLeave = /**
         * @return {?}
         */
        function () {
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.startAutoPlay();
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.startAutoPlay = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.autoPlay) {
                this.stopAutoPlay();
                this.timer = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (!_this.showNext()) {
                        _this.index = -1;
                        _this.showNext();
                    }
                }), this.autoPlayInterval);
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.stopAutoPlay = /**
         * @return {?}
         */
        function () {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.showAtIndex = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.index = index;
            this.show();
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.showNext = /**
         * @return {?}
         */
        function () {
            if (this.canShowNext()) {
                this.index++;
                if (this.index === this.images.length) {
                    this.index = 0;
                }
                this.show();
                return true;
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.showPrev = /**
         * @return {?}
         */
        function () {
            if (this.canShowPrev()) {
                this.index--;
                if (this.index < 0) {
                    this.index = this.images.length - 1;
                }
                this.show();
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.canShowNext = /**
         * @return {?}
         */
        function () {
            if (this.loading) {
                return false;
            }
            else if (this.images) {
                return this.infinityMove || this.index < this.images.length - 1 ? true : false;
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.canShowPrev = /**
         * @return {?}
         */
        function () {
            if (this.loading) {
                return false;
            }
            else if (this.images) {
                return this.infinityMove || this.index > 0 ? true : false;
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.manageFullscreen = /**
         * @return {?}
         */
        function () {
            if (this.fullscreen || this.forceFullscreen) {
                /** @type {?} */
                var doc = (/** @type {?} */ (document));
                if (!doc.fullscreenElement && !doc.mozFullScreenElement
                    && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                    this.openFullscreen();
                }
                else {
                    this.closeFullscreen();
                }
            }
        };
        /**
         * @param {?} image
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.getSafeUrl = /**
         * @param {?} image
         * @return {?}
         */
        function (image) {
            return image.substr(0, 10) === 'data:image' ?
                image : this.sanitization.bypassSecurityTrustUrl(image);
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.zoomIn = /**
         * @return {?}
         */
        function () {
            if (this.canZoomIn()) {
                this.zoomValue += this.zoomStep;
                if (this.zoomValue > this.zoomMax) {
                    this.zoomValue = this.zoomMax;
                }
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.zoomOut = /**
         * @return {?}
         */
        function () {
            if (this.canZoomOut()) {
                this.zoomValue -= this.zoomStep;
                if (this.zoomValue < this.zoomMin) {
                    this.zoomValue = this.zoomMin;
                }
                if (this.zoomValue <= 1) {
                    this.resetPosition();
                }
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.rotateLeft = /**
         * @return {?}
         */
        function () {
            this.rotateValue -= 90;
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.rotateRight = /**
         * @return {?}
         */
        function () {
            this.rotateValue += 90;
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.getTransform = /**
         * @return {?}
         */
        function () {
            return this.sanitization.bypassSecurityTrustStyle('scale(' + this.zoomValue + ') rotate(' + this.rotateValue + 'deg)');
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.canZoomIn = /**
         * @return {?}
         */
        function () {
            return this.zoomValue < this.zoomMax ? true : false;
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.canZoomOut = /**
         * @return {?}
         */
        function () {
            return this.zoomValue > this.zoomMin ? true : false;
        };
        /**
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.canDragOnZoom = /**
         * @return {?}
         */
        function () {
            return this.zoom && this.zoomValue > 1;
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.mouseDownHandler = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (this.canDragOnZoom()) {
                this.initialX = this.getClientX(e);
                this.initialY = this.getClientY(e);
                this.initialLeft = this.positionLeft;
                this.initialTop = this.positionTop;
                this.isMove = true;
                e.preventDefault();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.mouseUpHandler = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.isMove = false;
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.mouseMoveHandler = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (this.isMove) {
                this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
                this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
            }
        };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.getClientX = /**
         * @private
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
        };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.getClientY = /**
         * @private
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.resetPosition = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.zoom) {
                this.positionLeft = 0;
                this.positionTop = 0;
            }
        };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.isKeyboardNext = /**
         * @private
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return e.keyCode === 39 ? true : false;
        };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.isKeyboardPrev = /**
         * @private
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return e.keyCode === 37 ? true : false;
        };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.isKeyboardEsc = /**
         * @private
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return e.keyCode === 27 ? true : false;
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.openFullscreen = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var element = (/** @type {?} */ (document.documentElement));
            if (element.requestFullscreen) {
                element.requestFullscreen();
            }
            else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
            else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            }
            else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.closeFullscreen = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.isFullscreen()) {
                /** @type {?} */
                var doc = (/** @type {?} */ (document));
                if (doc.exitFullscreen) {
                    doc.exitFullscreen();
                }
                else if (doc.msExitFullscreen) {
                    doc.msExitFullscreen();
                }
                else if (doc.mozCancelFullScreen) {
                    doc.mozCancelFullScreen();
                }
                else if (doc.webkitExitFullscreen) {
                    doc.webkitExitFullscreen();
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.isFullscreen = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var doc = (/** @type {?} */ (document));
            return doc.fullscreenElement || doc.webkitFullscreenElement
                || doc.mozFullScreenElement || doc.msFullscreenElement;
        };
        /**
         * @private
         * @param {?=} first
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.show = /**
         * @private
         * @param {?=} first
         * @return {?}
         */
        function (first) {
            var _this = this;
            if (first === void 0) { first = false; }
            this.loading = true;
            this.stopAutoPlay();
            this.onActiveChange.emit(this.index);
            if (first || !this.animation) {
                this._show();
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this._show(); }), 600);
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype._show = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.zoomValue = 1;
            this.rotateValue = 0;
            this.resetPosition();
            this.src = this.getSafeUrl((/** @type {?} */ (this.images[this.index])));
            this.srcIndex = this.index;
            this.description = this.descriptions[this.index];
            this.changeDetectorRef.markForCheck();
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.isLoaded(_this.previewImage.nativeElement)) {
                    _this.loading = false;
                    _this.startAutoPlay();
                    _this.changeDetectorRef.markForCheck();
                }
                else {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        if (_this.loading) {
                            _this.showSpinner = true;
                            _this.changeDetectorRef.markForCheck();
                        }
                    }));
                    _this.previewImage.nativeElement.onload = (/**
                     * @return {?}
                     */
                    function () {
                        _this.loading = false;
                        _this.showSpinner = false;
                        _this.previewImage.nativeElement.onload = null;
                        _this.startAutoPlay();
                        _this.changeDetectorRef.markForCheck();
                    });
                }
            }));
        };
        /**
         * @private
         * @param {?} img
         * @return {?}
         */
        NgxGalleryPreviewComponent.prototype.isLoaded = /**
         * @private
         * @param {?} img
         * @return {?}
         */
        function (img) {
            if (!img.complete) {
                return false;
            }
            if (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0) {
                return false;
            }
            return true;
        };
        NgxGalleryPreviewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-gallery-preview',
                        template: "\n        <ngx-gallery-arrows *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n        <div class=\"ngx-gallery-preview-top\">\n            <div class=\"ngx-gallery-preview-icons\">\n                <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n                <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n                    <i class=\"ngx-gallery-icon-content {{ downloadIcon }}\"></i>\n                </a>\n                <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\" (onClick)=\"zoomOut()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\" (onClick)=\"zoomIn()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (onClick)=\"rotateLeft()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (onClick)=\"rotateRight()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"'ngx-gallery-fullscreen ' + fullscreenIcon\" (onClick)=\"manageFullscreen()\"></ngx-gallery-action>\n                <ngx-gallery-action [icon]=\"'ngx-gallery-close ' + closeIcon\" (onClick)=\"close()\"></ngx-gallery-action>\n            </div>\n        </div>\n        <div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n            <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\" (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n            <div class=\"ngx-gallery-preview-img-wrapper\">\n                <img *ngIf=\"src\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\" (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n                <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"index\" (onChange)=\"showAtIndex($event)\"></ngx-gallery-bullets>\n            </div>\n            <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\" (click)=\"$event.stopPropagation()\"></div>\n        </div>\n    ",
                        styles: [":host(.ngx-gallery-active) { width: 100%; height: 100%; position: fixed; left: 0; top: 0; background: rgba(0, 0, 0, 0.7); z-index: 10000; display: inline-block; } :host { display: none; } :host ::ng-deep .ngx-gallery-arrow { font-size: 50px; } :host ::ng-deep ngx-gallery-bullets { height: 5%; align-items: center; padding: 0px; } .ngx-gallery-preview-img { opacity: 0; max-width: 90%; max-height: 90%; user-select: none; transition: transform .5s; } .ngx-gallery-preview-img.animation { transition: opacity 0.5s linear, transform .5s; } .ngx-gallery-preview-img.ngx-gallery-active { opacity: 1; } .ngx-gallery-preview-img.ngx-gallery-grab { cursor: grab; cursor: -webkit-grab; } .ngx-gallery-icon.ngx-gallery-spinner { font-size: 50px; left: 0; display: inline-block; } :host ::ng-deep .ngx-gallery-preview-top { position: absolute; width: 100%; user-select: none; } :host ::ng-deep .ngx-gallery-preview-icons { float: right; } :host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon { position: relative; margin-right: 10px; margin-top: 10px; font-size: 25px; cursor: pointer; text-decoration: none; } :host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled { cursor: default; opacity: 0.4; } .ngx-spinner-wrapper { width: 50px; height: 50px; display: none; } .ngx-spinner-wrapper.ngx-gallery-active { display: inline-block; } .ngx-gallery-center { position: absolute; left: 0; right: 0; bottom: 0; margin: auto; top: 0; } .ngx-gallery-preview-text { width: 100%; background: rgba(0, 0, 0, 0.7); padding: 10px; text-align: center; color: white; font-size: 16px; flex: 0 1 auto; z-index: 10; } .ngx-gallery-preview-wrapper { width: 100%; height: 100%; display: flex; flex-flow: column; } .ngx-gallery-preview-img-wrapper { flex: 1 1 auto; position: relative; } "]
                    },] }
        ];
        /** @nocollapse */
        NgxGalleryPreviewComponent.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer },
            { type: core.ElementRef },
            { type: NgxGalleryHelperService },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        NgxGalleryPreviewComponent.propDecorators = {
            images: [{ type: core.Input }],
            descriptions: [{ type: core.Input }],
            showDescription: [{ type: core.Input }],
            arrows: [{ type: core.Input }],
            arrowsAutoHide: [{ type: core.Input }],
            swipe: [{ type: core.Input }],
            fullscreen: [{ type: core.Input }],
            forceFullscreen: [{ type: core.Input }],
            closeOnClick: [{ type: core.Input }],
            closeOnEsc: [{ type: core.Input }],
            keyboardNavigation: [{ type: core.Input }],
            arrowPrevIcon: [{ type: core.Input }],
            arrowNextIcon: [{ type: core.Input }],
            closeIcon: [{ type: core.Input }],
            fullscreenIcon: [{ type: core.Input }],
            spinnerIcon: [{ type: core.Input }],
            autoPlay: [{ type: core.Input }],
            autoPlayInterval: [{ type: core.Input }],
            autoPlayPauseOnHover: [{ type: core.Input }],
            infinityMove: [{ type: core.Input }],
            zoom: [{ type: core.Input }],
            zoomStep: [{ type: core.Input }],
            zoomMax: [{ type: core.Input }],
            zoomMin: [{ type: core.Input }],
            zoomInIcon: [{ type: core.Input }],
            zoomOutIcon: [{ type: core.Input }],
            animation: [{ type: core.Input }],
            actions: [{ type: core.Input }],
            rotate: [{ type: core.Input }],
            rotateLeftIcon: [{ type: core.Input }],
            rotateRightIcon: [{ type: core.Input }],
            download: [{ type: core.Input }],
            downloadIcon: [{ type: core.Input }],
            bullets: [{ type: core.Input }],
            onOpen: [{ type: core.Output }],
            onClose: [{ type: core.Output }],
            onActiveChange: [{ type: core.Output }],
            previewImage: [{ type: core.ViewChild, args: ['previewImage',] }],
            onMouseEnter: [{ type: core.HostListener, args: ['mouseenter',] }],
            onMouseLeave: [{ type: core.HostListener, args: ['mouseleave',] }]
        };
        return NgxGalleryPreviewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-image-size.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryImageSize = /** @class */ (function () {
        function NgxGalleryImageSize() {
        }
        NgxGalleryImageSize.Cover = 'cover';
        NgxGalleryImageSize.Contain = 'contain';
        return NgxGalleryImageSize;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-layout.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryLayout = /** @class */ (function () {
        function NgxGalleryLayout() {
        }
        NgxGalleryLayout.ThumbnailsTop = 'thumbnails-top';
        NgxGalleryLayout.ThumbnailsBottom = 'thumbnails-bottom';
        return NgxGalleryLayout;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-action.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryAction = /** @class */ (function () {
        function NgxGalleryAction(action) {
            this.icon = action.icon;
            this.disabled = action.disabled ? action.disabled : false;
            this.titleText = action.titleText ? action.titleText : '';
            this.onClick = action.onClick;
        }
        return NgxGalleryAction;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-options.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryOptions = /** @class */ (function () {
        function NgxGalleryOptions(obj) {
            /** @type {?} */
            var preventDefaults = obj.breakpoint === undefined ? false : true;
            /**
             * @template T
             * @param {?} source
             * @param {?} defaultValue
             * @return {?}
             */
            function use(source, defaultValue) {
                return obj && (source !== undefined || preventDefaults) ? source : defaultValue;
            }
            this.breakpoint = use(obj.breakpoint, undefined);
            this.width = use(obj.width, '500px');
            this.height = use(obj.height, '400px');
            this.fullWidth = use(obj.fullWidth, false);
            this.layout = use(obj.layout, NgxGalleryLayout.ThumbnailsBottom);
            this.startIndex = use(obj.startIndex, 0);
            this.linkTarget = use(obj.linkTarget, '_blank');
            this.lazyLoading = use(obj.lazyLoading, true);
            this.image = use(obj.image, true);
            this.imagePercent = use(obj.imagePercent, 75);
            this.imageArrows = use(obj.imageArrows, true);
            this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);
            this.imageSwipe = use(obj.imageSwipe, false);
            this.imageAnimation = use(obj.imageAnimation, NgxGalleryAnimation.Fade);
            this.imageSize = use(obj.imageSize, NgxGalleryImageSize.Cover);
            this.imageAutoPlay = use(obj.imageAutoPlay, false);
            this.imageAutoPlayInterval = use(obj.imageAutoPlayInterval, 2000);
            this.imageAutoPlayPauseOnHover = use(obj.imageAutoPlayPauseOnHover, false);
            this.imageInfinityMove = use(obj.imageInfinityMove, false);
            if (obj && obj.imageActions && obj.imageActions.length) {
                obj.imageActions = obj.imageActions.map((/**
                 * @param {?} action
                 * @return {?}
                 */
                function (action) { return new NgxGalleryAction(action); }));
            }
            this.imageActions = use(obj.imageActions, []);
            this.imageDescription = use(obj.imageDescription, false);
            this.imageBullets = use(obj.imageBullets, false);
            this.thumbnails = use(obj.thumbnails, true);
            this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
            this.thumbnailsRows = use(obj.thumbnailsRows, 1);
            this.thumbnailsPercent = use(obj.thumbnailsPercent, 25);
            this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
            this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
            this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
            this.thumbnailsSwipe = use(obj.thumbnailsSwipe, false);
            this.thumbnailsMoveSize = use(obj.thumbnailsMoveSize, 1);
            this.thumbnailsOrder = use(obj.thumbnailsOrder, NgxGalleryOrder.Column);
            this.thumbnailsRemainingCount = use(obj.thumbnailsRemainingCount, false);
            this.thumbnailsAsLinks = use(obj.thumbnailsAsLinks, false);
            this.thumbnailsAutoHide = use(obj.thumbnailsAutoHide, false);
            this.thumbnailMargin = use(obj.thumbnailMargin, 10);
            this.thumbnailSize = use(obj.thumbnailSize, NgxGalleryImageSize.Cover);
            if (obj && obj.thumbnailActions && obj.thumbnailActions.length) {
                obj.thumbnailActions = obj.thumbnailActions.map((/**
                 * @param {?} action
                 * @return {?}
                 */
                function (action) { return new NgxGalleryAction(action); }));
            }
            this.thumbnailActions = use(obj.thumbnailActions, []);
            this.preview = use(obj.preview, true);
            this.previewDescription = use(obj.previewDescription, true);
            this.previewArrows = use(obj.previewArrows, true);
            this.previewArrowsAutoHide = use(obj.previewArrowsAutoHide, false);
            this.previewSwipe = use(obj.previewSwipe, false);
            this.previewFullscreen = use(obj.previewFullscreen, false);
            this.previewForceFullscreen = use(obj.previewForceFullscreen, false);
            this.previewCloseOnClick = use(obj.previewCloseOnClick, false);
            this.previewCloseOnEsc = use(obj.previewCloseOnEsc, false);
            this.previewKeyboardNavigation = use(obj.previewKeyboardNavigation, false);
            this.previewAnimation = use(obj.previewAnimation, true);
            this.previewAutoPlay = use(obj.previewAutoPlay, false);
            this.previewAutoPlayInterval = use(obj.previewAutoPlayInterval, 2000);
            this.previewAutoPlayPauseOnHover = use(obj.previewAutoPlayPauseOnHover, false);
            this.previewInfinityMove = use(obj.previewInfinityMove, false);
            this.previewZoom = use(obj.previewZoom, false);
            this.previewZoomStep = use(obj.previewZoomStep, 0.1);
            this.previewZoomMax = use(obj.previewZoomMax, 2);
            this.previewZoomMin = use(obj.previewZoomMin, 0.5);
            this.previewRotate = use(obj.previewRotate, false);
            this.previewDownload = use(obj.previewDownload, false);
            this.previewCustom = use(obj.previewCustom, undefined);
            this.previewBullets = use(obj.previewBullets, false);
            this.arrowPrevIcon = use(obj.arrowPrevIcon, 'fa fa-arrow-circle-left');
            this.arrowNextIcon = use(obj.arrowNextIcon, 'fa fa-arrow-circle-right');
            this.closeIcon = use(obj.closeIcon, 'fa fa-times-circle');
            this.fullscreenIcon = use(obj.fullscreenIcon, 'fa fa-arrows-alt');
            this.spinnerIcon = use(obj.spinnerIcon, 'fa fa-spinner fa-pulse fa-3x fa-fw');
            this.zoomInIcon = use(obj.zoomInIcon, 'fa fa-search-plus');
            this.zoomOutIcon = use(obj.zoomOutIcon, 'fa fa-search-minus');
            this.rotateLeftIcon = use(obj.rotateLeftIcon, 'fa fa-undo');
            this.rotateRightIcon = use(obj.rotateRightIcon, 'fa fa-repeat');
            this.downloadIcon = use(obj.downloadIcon, 'fa fa-arrow-circle-down');
            if (obj && obj.actions && obj.actions.length) {
                obj.actions = obj.actions.map((/**
                 * @param {?} action
                 * @return {?}
                 */
                function (action) { return new NgxGalleryAction(action); }));
            }
            this.actions = use(obj.actions, []);
        }
        return NgxGalleryOptions;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-ordered-image.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryOrderedImage = /** @class */ (function () {
        function NgxGalleryOrderedImage(obj) {
            this.src = obj.src;
            this.index = obj.index;
        }
        return NgxGalleryOrderedImage;
    }());

    var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };
    var NgxGalleryComponent = /** @class */ (function () {
        function NgxGalleryComponent(myElement) {
            this.myElement = myElement;
            this.imagesReady = new core.EventEmitter();
            this.change = new core.EventEmitter();
            this.previewOpen = new core.EventEmitter();
            this.previewClose = new core.EventEmitter();
            this.previewChange = new core.EventEmitter();
            this.oldImagesLength = 0;
            this.selectedIndex = 0;
            this.breakpoint = undefined;
            this.prevBreakpoint = undefined;
        }
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.options = this.options.map((/**
             * @param {?} opt
             * @return {?}
             */
            function (opt) { return new NgxGalleryOptions(opt); }));
            this.sortOptions();
            this.setBreakpoint();
            this.setOptions();
            this.checkFullWidth();
            if (this.currentOptions) {
                this.selectedIndex = (/** @type {?} */ (this.currentOptions.startIndex));
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
        function () {
            if (this.images !== undefined && (this.images.length !== this.oldImagesLength)
                || (this.images !== this.oldImages)) {
                this.oldImagesLength = this.images.length;
                this.oldImages = this.images;
                this.setOptions();
                this.setImages();
                if (this.images && this.images.length) {
                    this.imagesReady.emit();
                }
                if (this.image) {
                    this.image.reset((/** @type {?} */ (this.currentOptions.startIndex)));
                }
                if (this.currentOptions.thumbnailsAutoHide && this.currentOptions.thumbnails
                    && this.images.length <= 1) {
                    this.currentOptions.thumbnails = false;
                    this.currentOptions.imageArrows = false;
                }
                this.resetThumbnails();
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.checkFullWidth();
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.onResize = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.setBreakpoint();
            if (this.prevBreakpoint !== this.breakpoint) {
                this.setOptions();
                this.resetThumbnails();
            }
            if (this.currentOptions && this.currentOptions.fullWidth) {
                if (this.fullWidthTimeout) {
                    clearTimeout(this.fullWidthTimeout);
                }
                this.fullWidthTimeout = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.checkFullWidth();
                }), 200);
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.getImageHeight = /**
         * @return {?}
         */
        function () {
            return (this.currentOptions && this.currentOptions.thumbnails) ?
                this.currentOptions.imagePercent + '%' : '100%';
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.getThumbnailsHeight = /**
         * @return {?}
         */
        function () {
            if (this.currentOptions && this.currentOptions.image) {
                return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
                    + this.currentOptions.thumbnailsMargin + 'px)';
            }
            else {
                return '100%';
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.getThumbnailsMarginTop = /**
         * @return {?}
         */
        function () {
            if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
                return this.currentOptions.thumbnailsMargin + 'px';
            }
            else {
                return '0px';
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.getThumbnailsMarginBottom = /**
         * @return {?}
         */
        function () {
            if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
                return this.currentOptions.thumbnailsMargin + 'px';
            }
            else {
                return '0px';
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryComponent.prototype.openPreview = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this.currentOptions.previewCustom) {
                this.currentOptions.previewCustom(index);
            }
            else {
                this.previewEnabled = true;
                this.preview.open(index);
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.onPreviewOpen = /**
         * @return {?}
         */
        function () {
            this.previewOpen.emit();
            if (this.image && this.image.autoPlay) {
                this.image.stopAutoPlay();
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.onPreviewClose = /**
         * @return {?}
         */
        function () {
            this.previewEnabled = false;
            this.previewClose.emit();
            if (this.image && this.image.autoPlay) {
                this.image.startAutoPlay();
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryComponent.prototype.selectFromImage = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.select(index);
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryComponent.prototype.selectFromThumbnails = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.select(index);
            if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview
                && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
                this.openPreview(this.selectedIndex);
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryComponent.prototype.show = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.select(index);
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.showNext = /**
         * @return {?}
         */
        function () {
            this.image.showNext();
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.showPrev = /**
         * @return {?}
         */
        function () {
            this.image.showPrev();
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.canShowNext = /**
         * @return {?}
         */
        function () {
            if (this.images && this.currentOptions) {
                return (this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1)
                    ? true : false;
            }
            else {
                return false;
            }
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.canShowPrev = /**
         * @return {?}
         */
        function () {
            if (this.images && this.currentOptions) {
                return (this.currentOptions.imageInfinityMove || this.selectedIndex > 0) ? true : false;
            }
            else {
                return false;
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NgxGalleryComponent.prototype.previewSelect = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.previewChange.emit({ index: index, image: this.images[index] });
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.moveThumbnailsRight = /**
         * @return {?}
         */
        function () {
            this.thubmnails.moveRight();
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.moveThumbnailsLeft = /**
         * @return {?}
         */
        function () {
            this.thubmnails.moveLeft();
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.canMoveThumbnailsRight = /**
         * @return {?}
         */
        function () {
            return this.thubmnails.canMoveRight();
        };
        /**
         * @return {?}
         */
        NgxGalleryComponent.prototype.canMoveThumbnailsLeft = /**
         * @return {?}
         */
        function () {
            return this.thubmnails.canMoveLeft();
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryComponent.prototype.resetThumbnails = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.thubmnails) {
                this.thubmnails.reset((/** @type {?} */ (this.currentOptions.startIndex)));
            }
        };
        /**
         * @private
         * @param {?} index
         * @return {?}
         */
        NgxGalleryComponent.prototype.select = /**
         * @private
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.selectedIndex = index;
            this.change.emit({
                index: index,
                image: this.images[index]
            });
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryComponent.prototype.checkFullWidth = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.currentOptions && this.currentOptions.fullWidth) {
                this.width = document.body.clientWidth + 'px';
                this.left = (-(document.body.clientWidth -
                    this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px';
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryComponent.prototype.setImages = /**
         * @private
         * @return {?}
         */
        function () {
            this.smallImages = this.images.map((/**
             * @param {?} img
             * @return {?}
             */
            function (img) { return (/** @type {?} */ (img.small)); }));
            this.mediumImages = this.images.map((/**
             * @param {?} img
             * @param {?} i
             * @return {?}
             */
            function (img, i) { return new NgxGalleryOrderedImage({
                src: img.medium,
                index: i
            }); }));
            this.bigImages = this.images.map((/**
             * @param {?} img
             * @return {?}
             */
            function (img) { return (/** @type {?} */ (img.big)); }));
            this.descriptions = this.images.map((/**
             * @param {?} img
             * @return {?}
             */
            function (img) { return (/** @type {?} */ (img.description)); }));
            this.links = this.images.map((/**
             * @param {?} img
             * @return {?}
             */
            function (img) { return (/** @type {?} */ (img.url)); }));
            this.labels = this.images.map((/**
             * @param {?} img
             * @return {?}
             */
            function (img) { return (/** @type {?} */ (img.label)); }));
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryComponent.prototype.setBreakpoint = /**
         * @private
         * @return {?}
         */
        function () {
            this.prevBreakpoint = this.breakpoint;
            /** @type {?} */
            var breakpoints;
            if (typeof window !== 'undefined') {
                breakpoints = this.options.filter((/**
                 * @param {?} opt
                 * @return {?}
                 */
                function (opt) { return opt.breakpoint >= window.innerWidth; }))
                    .map((/**
                 * @param {?} opt
                 * @return {?}
                 */
                function (opt) { return opt.breakpoint; }));
            }
            if (breakpoints && breakpoints.length) {
                this.breakpoint = breakpoints.pop();
            }
            else {
                this.breakpoint = undefined;
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryComponent.prototype.sortOptions = /**
         * @private
         * @return {?}
         */
        function () {
            this.options = __spreadArrays(this.options.filter((/**
             * @param {?} a
             * @return {?}
             */
            function (a) { return a.breakpoint === undefined; })), this.options
                .filter((/**
             * @param {?} a
             * @return {?}
             */
            function (a) { return a.breakpoint !== undefined; }))
                .sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return b.breakpoint - a.breakpoint; })));
        };
        /**
         * @private
         * @return {?}
         */
        NgxGalleryComponent.prototype.setOptions = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.currentOptions = new NgxGalleryOptions({});
            this.options
                .filter((/**
             * @param {?} opt
             * @return {?}
             */
            function (opt) { return opt.breakpoint === undefined || opt.breakpoint >= _this.breakpoint; }))
                .map((/**
             * @param {?} opt
             * @return {?}
             */
            function (opt) { return _this.combineOptions(_this.currentOptions, opt); }));
            this.width = (/** @type {?} */ (this.currentOptions.width));
            this.height = (/** @type {?} */ (this.currentOptions.height));
        };
        /**
         * @private
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        NgxGalleryComponent.prototype.combineOptions = /**
         * @private
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        function (first, second) {
            Object.keys(second).map((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return first[val] = second[val] !== undefined ? second[val] : first[val]; }));
        };
        NgxGalleryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-gallery',
                        template: "\n    <div class=\"ngx-gallery-layout {{currentOptions?.layout}}\">\n        <ngx-gallery-image *ngIf=\"currentOptions?.image\" [style.height]=\"getImageHeight()\" [images]=\"mediumImages\" [clickable]=\"currentOptions?.preview\" [selectedIndex]=\"selectedIndex\" [arrows]=\"currentOptions?.imageArrows\" [arrowsAutoHide]=\"currentOptions?.imageArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [swipe]=\"currentOptions?.imageSwipe\" [animation]=\"currentOptions?.imageAnimation\" [size]=\"currentOptions?.imageSize\" [autoPlay]=\"currentOptions?.imageAutoPlay\" [autoPlayInterval]=\"currentOptions?.imageAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.imageAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.imageInfinityMove\"  [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.imageActions\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.imageDescription\" [bullets]=\"currentOptions?.imageBullets\" (onClick)=\"openPreview($event)\" (onActiveChange)=\"selectFromImage($event)\"></ngx-gallery-image>\n\n        <ngx-gallery-thumbnails *ngIf=\"currentOptions?.thumbnails\" [style.marginTop]=\"getThumbnailsMarginTop()\" [style.marginBottom]=\"getThumbnailsMarginBottom()\" [style.height]=\"getThumbnailsHeight()\" [images]=\"smallImages\" [links]=\"currentOptions?.thumbnailsAsLinks ? links : []\" [labels]=\"labels\" [linkTarget]=\"currentOptions?.linkTarget\" [selectedIndex]=\"selectedIndex\" [columns]=\"currentOptions?.thumbnailsColumns\" [rows]=\"currentOptions?.thumbnailsRows\" [margin]=\"currentOptions?.thumbnailMargin\" [arrows]=\"currentOptions?.thumbnailsArrows\" [arrowsAutoHide]=\"currentOptions?.thumbnailsArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [clickable]=\"currentOptions?.image || currentOptions?.preview\" [swipe]=\"currentOptions?.thumbnailsSwipe\" [size]=\"currentOptions?.thumbnailSize\" [moveSize]=\"currentOptions?.thumbnailsMoveSize\" [order]=\"currentOptions?.thumbnailsOrder\" [remainingCount]=\"currentOptions?.thumbnailsRemainingCount\" [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.thumbnailActions\"  (onActiveChange)=\"selectFromThumbnails($event)\"></ngx-gallery-thumbnails>\n\n        <ngx-gallery-preview [images]=\"bigImages\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.previewDescription\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [closeIcon]=\"currentOptions?.closeIcon\" [fullscreenIcon]=\"currentOptions?.fullscreenIcon\" [spinnerIcon]=\"currentOptions?.spinnerIcon\" [arrows]=\"currentOptions?.previewArrows\" [arrowsAutoHide]=\"currentOptions?.previewArrowsAutoHide\" [swipe]=\"currentOptions?.previewSwipe\" [fullscreen]=\"currentOptions?.previewFullscreen\" [forceFullscreen]=\"currentOptions?.previewForceFullscreen\" [closeOnClick]=\"currentOptions?.previewCloseOnClick\" [closeOnEsc]=\"currentOptions?.previewCloseOnEsc\" [keyboardNavigation]=\"currentOptions?.previewKeyboardNavigation\" [animation]=\"currentOptions?.previewAnimation\" [autoPlay]=\"currentOptions?.previewAutoPlay\" [autoPlayInterval]=\"currentOptions?.previewAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.previewAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.previewInfinityMove\" [zoom]=\"currentOptions?.previewZoom\" [zoomStep]=\"currentOptions?.previewZoomStep\" [zoomMax]=\"currentOptions?.previewZoomMax\" [zoomMin]=\"currentOptions?.previewZoomMin\" [zoomInIcon]=\"currentOptions?.zoomInIcon\" [zoomOutIcon]=\"currentOptions?.zoomOutIcon\" [actions]=\"currentOptions?.actions\" [rotate]=\"currentOptions?.previewRotate\" [rotateLeftIcon]=\"currentOptions?.rotateLeftIcon\" [rotateRightIcon]=\"currentOptions?.rotateRightIcon\" [download]=\"currentOptions?.previewDownload\" [downloadIcon]=\"currentOptions?.downloadIcon\" [bullets]=\"currentOptions?.previewBullets\" (onClose)=\"onPreviewClose()\" (onOpen)=\"onPreviewOpen()\" (onActiveChange)=\"previewSelect($event)\" [class.ngx-gallery-active]=\"previewEnabled\"></ngx-gallery-preview>\n    </div>\n    ",
                        styles: [":host { display: inline-block; } :host > * { float: left; } :host ::ng-deep * { box-sizing: border-box; } :host ::ng-deep .ngx-gallery-icon { color: white; font-size: 25px; position: absolute; z-index: 2000; display: inline-block; } :host ::ng-deep .ngx-gallery-icon .ngx-gallery-icon-content { display: block; } :host ::ng-deep .ngx-gallery-clickable { cursor: pointer; } :host ::ng-deep .ngx-gallery-icons-wrapper .ngx-gallery-icon { position: relative; margin-right: 5px; margin-top: 5px; font-size: 20px; cursor: pointer; } :host ::ng-deep .ngx-gallery-icons-wrapper { float: right; } :host .ngx-gallery-layout { width: 100%; height: 100%; display: flex; flex-direction: column; } :host .ngx-gallery-layout.thumbnails-top ngx-gallery-image { order: 2; } :host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails { order: 1; } :host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image { order: 1; } :host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails { order: 2; } "],
                        providers: [NgxGalleryHelperService]
                    },] }
        ];
        /** @nocollapse */
        NgxGalleryComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        NgxGalleryComponent.propDecorators = {
            options: [{ type: core.Input }],
            images: [{ type: core.Input }],
            imagesReady: [{ type: core.Output }],
            change: [{ type: core.Output }],
            previewOpen: [{ type: core.Output }],
            previewClose: [{ type: core.Output }],
            previewChange: [{ type: core.Output }],
            preview: [{ type: core.ViewChild, args: [NgxGalleryPreviewComponent,] }],
            image: [{ type: core.ViewChild, args: [NgxGalleryImageComponent,] }],
            thubmnails: [{ type: core.ViewChild, args: [NgxGalleryThumbnailsComponent,] }],
            width: [{ type: core.HostBinding, args: ['style.width',] }],
            height: [{ type: core.HostBinding, args: ['style.height',] }],
            left: [{ type: core.HostBinding, args: ['style.left',] }],
            onResize: [{ type: core.HostListener, args: ['window:resize',] }]
        };
        return NgxGalleryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-gallery-image.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxGalleryImage = /** @class */ (function () {
        function NgxGalleryImage(obj) {
            this.small = obj.small;
            this.medium = obj.medium;
            this.big = obj.big;
            this.description = obj.description;
            this.url = obj.url;
            this.label = obj.label;
        }
        return NgxGalleryImage;
    }());

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var CustomHammerConfig = /** @class */ (function (_super) {
        __extends(CustomHammerConfig, _super);
        function CustomHammerConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.overrides = (/** @type {?} */ ({
                'pinch': { enable: false },
                'rotate': { enable: false }
            }));
            return _this;
        }
        return CustomHammerConfig;
    }(platformBrowser.HammerGestureConfig));
    var NgxGalleryModule = /** @class */ (function () {
        function NgxGalleryModule() {
        }
        NgxGalleryModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            NgxGalleryActionComponent,
                            NgxGalleryArrowsComponent,
                            NgxGalleryBulletsComponent,
                            NgxGalleryImageComponent,
                            NgxGalleryThumbnailsComponent,
                            NgxGalleryPreviewComponent,
                            NgxGalleryComponent
                        ],
                        exports: [
                            NgxGalleryComponent
                        ],
                        providers: [
                            { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
                        ]
                    },] }
        ];
        return NgxGalleryModule;
    }());

    exports.CustomHammerConfig = CustomHammerConfig;
    exports.NgxGalleryModule = NgxGalleryModule;
    exports.NgxGalleryComponent = NgxGalleryComponent;
    exports.NgxGalleryActionComponent = NgxGalleryActionComponent;
    exports.NgxGalleryImageComponent = NgxGalleryImageComponent;
    exports.NgxGalleryThumbnailsComponent = NgxGalleryThumbnailsComponent;
    exports.NgxGalleryPreviewComponent = NgxGalleryPreviewComponent;
    exports.NgxGalleryArrowsComponent = NgxGalleryArrowsComponent;
    exports.NgxGalleryBulletsComponent = NgxGalleryBulletsComponent;
    exports.NgxGalleryOptions = NgxGalleryOptions;
    exports.NgxGalleryImage = NgxGalleryImage;
    exports.NgxGalleryAnimation = NgxGalleryAnimation;
    exports.NgxGalleryHelperService = NgxGalleryHelperService;
    exports.NgxGalleryImageSize = NgxGalleryImageSize;
    exports.NgxGalleryLayout = NgxGalleryLayout;
    exports.NgxGalleryOrder = NgxGalleryOrder;
    exports.NgxGalleryOrderedImage = NgxGalleryOrderedImage;
    exports.NgxGalleryAction = NgxGalleryAction;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
