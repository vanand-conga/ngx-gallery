(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('@angular/platform-browser'),exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define(['@angular/core','@angular/common','@angular/platform-browser','exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.common,global.ng.platformBrowser,global['ngx-gallery'] = {}, global.core, global.common, global.platformBrowser));
}(this, function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, common, platformBrowser) { 
var _c0 = function (a0) { return { "ngx-gallery-active": a0 }; };
function NgxGalleryBulletsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryBulletsComponent_div_0_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var i_r2 = ctx.index; var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.handleChange($event, i_r2); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r2 = ctx.index;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, i_r2 == ctx_r0.active));
} }
function NgxGalleryImageComponent_div_1_ngx_gallery_action_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryImageComponent_div_1_ngx_gallery_action_2_Template_ngx_gallery_action_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var action_r7 = ctx.$implicit; var image_r3 = ɵngcc0.ɵɵnextContext().$implicit; return action_r7.onClick($event, image_r3.index); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r7 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("icon", action_r7.icon)("disabled", action_r7.disabled)("titleText", action_r7.titleText);
} }
function NgxGalleryImageComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryImageComponent_div_1_div_3_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var image_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r6.descriptions[image_r3.index], ɵngcc0.ɵɵsanitizeHtml);
} }
var _c1 = function (a0, a1, a2, a3) { return { "ngx-gallery-active": a0, "ngx-gallery-inactive-left": a1, "ngx-gallery-inactive-right": a2, "ngx-gallery-clickable": a3 }; };
function NgxGalleryImageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryImageComponent_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); var image_r3 = ctx.$implicit; var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.handleClick($event, image_r3.index); });
    ɵngcc0.ɵɵelementStart(1, "div", 4);
    ɵngcc0.ɵɵtemplate(2, NgxGalleryImageComponent_div_1_ngx_gallery_action_2_Template, 1, 3, "ngx-gallery-action", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NgxGalleryImageComponent_div_1_div_3_Template, 1, 1, "div", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var image_r3 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-image", ctx_r0.getSafeUrl(image_r3.src));
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(5, _c1, ctx_r0.selectedIndex == image_r3.index, ctx_r0.selectedIndex > image_r3.index, ctx_r0.selectedIndex < image_r3.index, ctx_r0.clickable));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.actions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showDescription && ctx_r0.descriptions[image_r3.index]);
} }
function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-bullets", 9);
    ɵngcc0.ɵɵlistener("onChange", function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template_ngx_gallery_bullets_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.show($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("count", ctx_r1.images.length)("active", ctx_r1.selectedIndex);
} }
function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-arrows", 10);
    ɵngcc0.ɵɵlistener("onPrevClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onPrevClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.showPrev(); })("onNextClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onNextClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.showNext(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-image-size-", ctx_r2.size, "");
    ɵngcc0.ɵɵproperty("prevDisabled", !ctx_r2.canShowPrev())("nextDisabled", !ctx_r2.canShowNext())("arrowPrevIcon", ctx_r2.arrowPrevIcon)("arrowNextIcon", ctx_r2.arrowNextIcon);
} }
function NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_2_Template_ngx_gallery_action_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var action_r6 = ctx.$implicit; var i_r3 = ɵngcc0.ɵɵnextContext().index; return action_r6.onClick($event, i_r3); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r6 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("icon", action_r6.icon)("disabled", action_r6.disabled)("titleText", action_r6.titleText);
} }
function NgxGalleryThumbnailsComponent_a_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelementStart(1, "span", 9);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("+", ctx_r5.remainingCountValue, "");
} }
var _c2 = function (a0, a1) { return { "ngx-gallery-active": a0, "ngx-gallery-clickable": a1 }; };
function NgxGalleryThumbnailsComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 3);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryThumbnailsComponent_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var i_r3 = ctx.index; var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.handleClick($event, i_r3); });
    ɵngcc0.ɵɵelementStart(1, "div", 4);
    ɵngcc0.ɵɵtemplate(2, NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_2_Template, 1, 3, "ngx-gallery-action", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NgxGalleryThumbnailsComponent_a_2_div_3_Template, 3, 1, "div", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var image_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-image", ctx_r0.getSafeUrl(image_r2))("width", ctx_r0.getThumbnailWidth())("height", ctx_r0.getThumbnailHeight())("left", ctx_r0.getThumbnailLeft(i_r3))("top", ctx_r0.getThumbnailTop(i_r3));
    ɵngcc0.ɵɵproperty("href", ctx_r0.hasLink(i_r3) ? ctx_r0.links[i_r3] : "#", ɵngcc0.ɵɵsanitizeUrl)("target", ctx_r0.linkTarget)("ngClass", ɵngcc0.ɵɵpureFunction2(16, _c2, i_r3 == ctx_r0.selectedIndex, ctx_r0.clickable));
    ɵngcc0.ɵɵattribute("aria-label", ctx_r0.labels[i_r3]);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.actions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.remainingCount && ctx_r0.remainingCountValue && i_r3 == ctx_r0.rows * ctx_r0.columns - 1);
} }
function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-arrows", 10);
    ɵngcc0.ɵɵlistener("onPrevClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onPrevClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.moveLeft(); })("onNextClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onNextClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.moveRight(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prevDisabled", !ctx_r1.canMoveLeft())("nextDisabled", !ctx_r1.canMoveRight())("arrowPrevIcon", ctx_r1.arrowPrevIcon)("arrowNextIcon", ctx_r1.arrowNextIcon);
} }
var _c3 = ["previewImage"];
function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-arrows", 15);
    ɵngcc0.ɵɵlistener("onPrevClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_onPrevClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.showPrev(); })("onNextClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_onNextClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.showNext(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prevDisabled", !ctx_r0.canShowPrev())("nextDisabled", !ctx_r0.canShowNext())("arrowPrevIcon", ctx_r0.arrowPrevIcon)("arrowNextIcon", ctx_r0.arrowNextIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_3_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 16);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_3_Template_ngx_gallery_action_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var action_r14 = ctx.$implicit; var ctx_r15 = ɵngcc0.ɵɵnextContext(); return action_r14.onClick($event, ctx_r15.index); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r14 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("icon", action_r14.icon)("disabled", action_r14.disabled)("titleText", action_r14.titleText);
} }
function NgxGalleryPreviewComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 17);
    ɵngcc0.ɵɵelement(1, "i");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("href", ctx_r2.src, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx_r2.downloadIcon, "");
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 18);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); var ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.zoomOut(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r3.zoomOutIcon)("disabled", !ctx_r3.canZoomOut());
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_6_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 18);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_6_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); var ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.zoomIn(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r4.zoomInIcon)("disabled", !ctx_r4.canZoomIn());
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.rotateLeft(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r5.rotateLeftIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template(rf, ctx) { if (rf & 1) {
    var _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r24); var ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.rotateRight(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r6.rotateRightIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template(rf, ctx) { if (rf & 1) {
    var _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r26); var ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.manageFullscreen(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", "ngx-gallery-fullscreen " + ctx_r7.fullscreenIcon);
} }
function NgxGalleryPreviewComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    var _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 19, 20);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryPreviewComponent_img_15_Template_img_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); return $event.stopPropagation(); })("mouseenter", function NgxGalleryPreviewComponent_img_15_Template_img_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r29); var ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.imageMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_img_15_Template_img_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r29); var ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.imageMouseLeave(); })("mousedown", function NgxGalleryPreviewComponent_img_15_Template_img_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); var ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.mouseDownHandler($event); })("touchstart", function NgxGalleryPreviewComponent_img_15_Template_img_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); var ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.mouseDownHandler($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transform", ctx_r8.getTransform())("left", ctx_r8.positionLeft + "px")("top", ctx_r8.positionTop + "px");
    ɵngcc0.ɵɵclassProp("ngx-gallery-active", !ctx_r8.loading)("animation", ctx_r8.animation)("ngx-gallery-grab", ctx_r8.canDragOnZoom());
    ɵngcc0.ɵɵproperty("src", ctx_r8.src, ɵngcc0.ɵɵsanitizeUrl);
} }
function NgxGalleryPreviewComponent_ngx_gallery_bullets_16_Template(rf, ctx) { if (rf & 1) {
    var _r35 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-bullets", 21);
    ɵngcc0.ɵɵlistener("onChange", function NgxGalleryPreviewComponent_ngx_gallery_bullets_16_Template_ngx_gallery_bullets_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r35); var ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.showAtIndex($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("count", ctx_r9.images.length)("active", ctx_r9.index);
} }
function NgxGalleryPreviewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryPreviewComponent_div_17_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r10.description, ɵngcc0.ɵɵsanitizeHtml);
} }
function NgxGalleryComponent_ngx_gallery_image_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-image", 3);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.openPreview($event); })("onActiveChange", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_onActiveChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.selectFromImage($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("height", ctx_r0.getImageHeight());
    ɵngcc0.ɵɵproperty("images", ctx_r0.mediumImages)("clickable", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.preview)("selectedIndex", ctx_r0.selectedIndex)("arrows", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrows)("arrowsAutoHide", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrowsAutoHide)("arrowPrevIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowNextIcon)("swipe", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSwipe)("animation", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAnimation)("size", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSize)("autoPlay", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlay)("autoPlayInterval", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayInterval)("autoPlayPauseOnHover", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayPauseOnHover)("infinityMove", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageInfinityMove)("lazyLoading", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.lazyLoading)("actions", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageActions)("descriptions", ctx_r0.descriptions)("showDescription", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageDescription)("bullets", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageBullets);
} }
var _c4 = function () { return []; };
function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-thumbnails", 4);
    ɵngcc0.ɵɵlistener("onActiveChange", function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template_ngx_gallery_thumbnails_onActiveChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.selectFromThumbnails($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("margin-top", ctx_r1.getThumbnailsMarginTop())("margin-bottom", ctx_r1.getThumbnailsMarginBottom())("height", ctx_r1.getThumbnailsHeight());
    ɵngcc0.ɵɵproperty("images", ctx_r1.smallImages)("links", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsAsLinks) ? ctx_r1.links : ɵngcc0.ɵɵpureFunction0(26, _c4))("labels", ctx_r1.labels)("linkTarget", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.linkTarget)("selectedIndex", ctx_r1.selectedIndex)("columns", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsColumns)("rows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRows)("margin", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailMargin)("arrows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrows)("arrowsAutoHide", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrowsAutoHide)("arrowPrevIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowNextIcon)("clickable", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.image) || (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.preview))("swipe", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsSwipe)("size", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailSize)("moveSize", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsMoveSize)("order", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsOrder)("remainingCount", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRemainingCount)("lazyLoading", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.lazyLoading)("actions", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailActions);
} }
'use strict';

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
        NgxGalleryActionComponent.propDecorators = {
            icon: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            titleText: [{ type: core.Input }],
            onClick: [{ type: core.Output }]
        };
NgxGalleryActionComponent.ɵfac = function NgxGalleryActionComponent_Factory(t) { return new (t || NgxGalleryActionComponent)(); };
NgxGalleryActionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryActionComponent, selectors: [["ngx-gallery-action"]], inputs: { disabled: "disabled", titleText: "titleText", icon: "icon" }, outputs: { onClick: "onClick" }, decls: 2, vars: 6, consts: [["aria-hidden", "true", 1, "ngx-gallery-icon", 3, "title", "click"]], template: function NgxGalleryActionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function NgxGalleryActionComponent_Template_div_click_0_listener($event) { return ctx.handleClick($event); });
        ɵngcc0.ɵɵelement(1, "i");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ngx-gallery-icon-disabled", ctx.disabled);
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.titleText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.icon, "");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryActionComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-action',
                template: "\n        <div class=\"ngx-gallery-icon\" [class.ngx-gallery-icon-disabled]=\"disabled\"\n            aria-hidden=\"true\"\n            title=\"{{ titleText }}\"\n            (click)=\"handleClick($event)\">\n                <i class=\"ngx-gallery-icon-content {{ icon }}\"></i>\n        </div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { disabled: [{
            type: core.Input
        }], titleText: [{
            type: core.Input
        }], onClick: [{
            type: core.Output
        }], icon: [{
            type: core.Input
        }] }); })();
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
        NgxGalleryArrowsComponent.propDecorators = {
            prevDisabled: [{ type: core.Input }],
            nextDisabled: [{ type: core.Input }],
            arrowPrevIcon: [{ type: core.Input }],
            arrowNextIcon: [{ type: core.Input }],
            onPrevClick: [{ type: core.Output }],
            onNextClick: [{ type: core.Output }]
        };
NgxGalleryArrowsComponent.ɵfac = function NgxGalleryArrowsComponent_Factory(t) { return new (t || NgxGalleryArrowsComponent)(); };
NgxGalleryArrowsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryArrowsComponent, selectors: [["ngx-gallery-arrows"]], inputs: { prevDisabled: "prevDisabled", nextDisabled: "nextDisabled", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon" }, outputs: { onPrevClick: "onPrevClick", onNextClick: "onNextClick" }, decls: 6, vars: 10, consts: [[1, "ngx-gallery-arrow-wrapper", "ngx-gallery-arrow-left"], ["aria-hidden", "true", 1, "ngx-gallery-icon", "ngx-gallery-arrow", 3, "click"], [1, "ngx-gallery-arrow-wrapper", "ngx-gallery-arrow-right"]], template: function NgxGalleryArrowsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵlistener("click", function NgxGalleryArrowsComponent_Template_div_click_1_listener() { return ctx.handlePrevClick(); });
        ɵngcc0.ɵɵelement(2, "i");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 1);
        ɵngcc0.ɵɵlistener("click", function NgxGalleryArrowsComponent_Template_div_click_4_listener() { return ctx.handleNextClick(); });
        ɵngcc0.ɵɵelement(5, "i");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ngx-gallery-disabled", ctx.prevDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.arrowPrevIcon, "");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("ngx-gallery-disabled", ctx.nextDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.arrowNextIcon, "");
    } }, styles: [".ngx-gallery-arrow-wrapper[_ngcontent-%COMP%] { position: absolute; height: 100%; width: 1px; display: table; z-index: 2000; table-layout: fixed; } .ngx-gallery-arrow-left[_ngcontent-%COMP%] { left: 0px; } .ngx-gallery-arrow-right[_ngcontent-%COMP%] { right: 0px; } .ngx-gallery-arrow[_ngcontent-%COMP%] { top: 50%; transform: translateY(-50%); cursor: pointer; } .ngx-gallery-arrow.ngx-gallery-disabled[_ngcontent-%COMP%] { opacity: 0.6; cursor: default; } .ngx-gallery-arrow-left[_ngcontent-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%] { left: 10px; } .ngx-gallery-arrow-right[_ngcontent-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%] { right: 10px; }"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryArrowsComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-arrows',
                template: "\n        <div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-left\">\n            <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handlePrevClick()\" [class.ngx-gallery-disabled]=\"prevDisabled\">\n                <i class=\"ngx-gallery-icon-content {{arrowPrevIcon}}\"></i>\n            </div>\n        </div>\n        <div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-right\">\n            <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handleNextClick()\" [class.ngx-gallery-disabled]=\"nextDisabled\">\n                <i class=\"ngx-gallery-icon-content {{arrowNextIcon}}\"></i>\n            </div>\n        </div>\n    ",
                styles: [".ngx-gallery-arrow-wrapper { position: absolute; height: 100%; width: 1px; display: table; z-index: 2000; table-layout: fixed; } .ngx-gallery-arrow-left { left: 0px; } .ngx-gallery-arrow-right { right: 0px; } .ngx-gallery-arrow { top: 50%; transform: translateY(-50%); cursor: pointer; } .ngx-gallery-arrow.ngx-gallery-disabled { opacity: 0.6; cursor: default; } .ngx-gallery-arrow-left .ngx-gallery-arrow { left: 10px; } .ngx-gallery-arrow-right .ngx-gallery-arrow { right: 10px; } "]
            }]
    }], function () { return []; }, { onPrevClick: [{
            type: core.Output
        }], onNextClick: [{
            type: core.Output
        }], prevDisabled: [{
            type: core.Input
        }], nextDisabled: [{
            type: core.Input
        }], arrowPrevIcon: [{
            type: core.Input
        }], arrowNextIcon: [{
            type: core.Input
        }] }); })();
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
        NgxGalleryBulletsComponent.propDecorators = {
            count: [{ type: core.Input }],
            active: [{ type: core.Input }],
            onChange: [{ type: core.Output }]
        };
NgxGalleryBulletsComponent.ɵfac = function NgxGalleryBulletsComponent_Factory(t) { return new (t || NgxGalleryBulletsComponent)(); };
NgxGalleryBulletsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryBulletsComponent, selectors: [["ngx-gallery-bullets"]], inputs: { active: "active", count: "count" }, outputs: { onChange: "onChange" }, decls: 1, vars: 1, consts: [["class", "ngx-gallery-bullet", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ngx-gallery-bullet", 3, "ngClass", "click"]], template: function NgxGalleryBulletsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgxGalleryBulletsComponent_div_0_Template, 1, 3, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.getBullets());
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass], styles: ["[_nghost-%COMP%] { position: absolute; z-index: 2000; display: inline-flex; left: 50%; transform: translateX(-50%); bottom: 0px; padding: 10px; } .ngx-gallery-bullet[_ngcontent-%COMP%] { width: 10px; height: 10px; border-radius: 50%; cursor: pointer; background: white; } .ngx-gallery-bullet[_ngcontent-%COMP%]:not(:first-child) { margin-left: 5px; } .ngx-gallery-bullet[_ngcontent-%COMP%]:hover, .ngx-gallery-bullet.ngx-gallery-active[_ngcontent-%COMP%] { background: black; }"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryBulletsComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-bullets',
                template: "\n        <div class=\"ngx-gallery-bullet\" *ngFor=\"let bullet of getBullets(); let i = index;\" (click)=\"handleChange($event, i)\" [ngClass]=\"{ 'ngx-gallery-active': i == active }\"></div>\n    ",
                styles: [":host { position: absolute; z-index: 2000; display: inline-flex; left: 50%; transform: translateX(-50%); bottom: 0px; padding: 10px; } .ngx-gallery-bullet { width: 10px; height: 10px; border-radius: 50%; cursor: pointer; background: white; } .ngx-gallery-bullet:not(:first-child) { margin-left: 5px; } .ngx-gallery-bullet:hover, .ngx-gallery-bullet.ngx-gallery-active { background: black; } "]
            }]
    }], function () { return []; }, { active: [{
            type: core.Input
        }], onChange: [{
            type: core.Output
        }], count: [{
            type: core.Input
        }] }); })();
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
        /** @nocollapse */
        NgxGalleryHelperService.ctorParameters = function () { return [
            { type: core.Renderer2 }
        ]; };
NgxGalleryHelperService.ɵfac = function NgxGalleryHelperService_Factory(t) { return new (t || NgxGalleryHelperService)(ɵngcc0.ɵɵinject(ɵngcc0.Renderer2)); };
NgxGalleryHelperService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgxGalleryHelperService, factory: function (t) { return NgxGalleryHelperService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryHelperService, [{
        type: core.Injectable
    }], function () { return [{ type: ɵngcc0.Renderer2 }]; }, null); })();
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
NgxGalleryImageComponent.ɵfac = function NgxGalleryImageComponent_Factory(t) { return new (t || NgxGalleryImageComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgxGalleryHelperService)); };
NgxGalleryImageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryImageComponent, selectors: [["ngx-gallery-image"]], hostBindings: function NgxGalleryImageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NgxGalleryImageComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function NgxGalleryImageComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { arrows: "arrows", selectedIndex: "selectedIndex", images: "images", clickable: "clickable", arrowsAutoHide: "arrowsAutoHide", swipe: "swipe", animation: "animation", size: "size", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon", autoPlay: "autoPlay", autoPlayInterval: "autoPlayInterval", autoPlayPauseOnHover: "autoPlayPauseOnHover", infinityMove: "infinityMove", lazyLoading: "lazyLoading", actions: "actions", descriptions: "descriptions", showDescription: "showDescription", bullets: "bullets" }, outputs: { onClick: "onClick", onActiveChange: "onActiveChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["class", "ngx-gallery-image", 3, "ngClass", "background-image", "click", 4, "ngFor", "ngForOf"], [3, "count", "active", "onChange", 4, "ngIf"], [3, "class", "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick", 4, "ngIf"], [1, "ngx-gallery-image", 3, "ngClass", "click"], [1, "ngx-gallery-icons-wrapper"], [3, "icon", "disabled", "titleText", "onClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-image-text", 3, "innerHTML", "click", 4, "ngIf"], [3, "icon", "disabled", "titleText", "onClick"], [1, "ngx-gallery-image-text", 3, "innerHTML", "click"], [3, "count", "active", "onChange"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick"]], template: function NgxGalleryImageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, NgxGalleryImageComponent_div_1_Template, 4, 10, "div", 0);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, NgxGalleryImageComponent_ngx_gallery_bullets_2_Template, 1, 2, "ngx-gallery-bullets", 1);
        ɵngcc0.ɵɵtemplate(3, NgxGalleryImageComponent_ngx_gallery_arrows_3_Template, 1, 7, "ngx-gallery-arrows", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("ngx-gallery-image-wrapper ngx-gallery-animation-", ctx.animation, " ngx-gallery-image-size-", ctx.size, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.getImages());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.bullets);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.arrows);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgClass, NgxGalleryActionComponent, NgxGalleryBulletsComponent, NgxGalleryArrowsComponent], styles: ["[_nghost-%COMP%] { width: 100%; display: inline-block; position: relative; } .ngx-gallery-image-wrapper[_ngcontent-%COMP%] { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; overflow: hidden; } .ngx-gallery-image[_ngcontent-%COMP%] { background-position: center; background-repeat: no-repeat; height: 100%; width: 100%; position: absolute; top: 0px; } .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%] { z-index: 1000; } .ngx-gallery-image-size-cover[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%] { background-size: cover; } .ngx-gallery-image-size-contain[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%] { background-size: contain; } .ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%] { left: 0px; opacity: 0; transition: 0.5s ease-in-out; } .ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%] { opacity: 1; } .ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%] { transition: 0.5s ease-in-out; } .ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%] { left: 0px; } .ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-inactive-left[_ngcontent-%COMP%] { left: -100%; } .ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-inactive-right[_ngcontent-%COMP%] { left: 100%; } .ngx-gallery-animation-rotate[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%] { transition: 1s ease; transform: scale(3.5, 3.5) rotate(90deg); left: 0px; opacity: 0; } .ngx-gallery-animation-rotate[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%] { transform: scale(1, 1) rotate(0deg); opacity: 1; } .ngx-gallery-animation-zoom[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%] { transition: 1s ease; transform: scale(2.5, 2.5); left: 0px; opacity: 0; } .ngx-gallery-animation-zoom[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%] { transform: scale(1, 1); opacity: 1; } .ngx-gallery-image-text[_ngcontent-%COMP%] { width: 100%; background: rgba(0, 0, 0, 0.7); padding: 10px; text-align: center; color: white; font-size: 16px; position: absolute; bottom: 0px; z-index: 10; }"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryImageComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-image',
                template: "\n        <div class=\"ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}\">\n            <div class=\"ngx-gallery-image\" *ngFor=\"let image of getImages(); let i = index;\" [ngClass]=\"{ 'ngx-gallery-active': selectedIndex == image.index, 'ngx-gallery-inactive-left': selectedIndex > image.index, 'ngx-gallery-inactive-right': selectedIndex < image.index, 'ngx-gallery-clickable': clickable }\" [style.background-image]=\"getSafeUrl(image.src)\" (click)=\"handleClick($event, image.index)\">\n                <div class=\"ngx-gallery-icons-wrapper\">\n                    <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n                </div>\n                <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\" [innerHTML]=\"descriptions[image.index]\" (click)=\"$event.stopPropagation()\"></div>\n            </div>\n        </div>\n        <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"selectedIndex\" (onChange)=\"show($event)\"></ngx-gallery-bullets>\n        <ngx-gallery-arrows class=\"ngx-gallery-image-size-{{size}}\" *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    ",
                styles: [":host { width: 100%; display: inline-block; position: relative; } .ngx-gallery-image-wrapper { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; overflow: hidden; } .ngx-gallery-image { background-position: center; background-repeat: no-repeat; height: 100%; width: 100%; position: absolute; top: 0px; } .ngx-gallery-image.ngx-gallery-active { z-index: 1000; } .ngx-gallery-image-size-cover .ngx-gallery-image { background-size: cover; } .ngx-gallery-image-size-contain .ngx-gallery-image { background-size: contain; } .ngx-gallery-animation-fade .ngx-gallery-image { left: 0px; opacity: 0; transition: 0.5s ease-in-out; } .ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active { opacity: 1; } .ngx-gallery-animation-slide .ngx-gallery-image { transition: 0.5s ease-in-out; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-active { left: 0px; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-left { left: -100%; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-right { left: 100%; } .ngx-gallery-animation-rotate .ngx-gallery-image { transition: 1s ease; transform: scale(3.5, 3.5) rotate(90deg); left: 0px; opacity: 0; } .ngx-gallery-animation-rotate .ngx-gallery-image.ngx-gallery-active { transform: scale(1, 1) rotate(0deg); opacity: 1; } .ngx-gallery-animation-zoom .ngx-gallery-image { transition: 1s ease; transform: scale(2.5, 2.5); left: 0px; opacity: 0; } .ngx-gallery-animation-zoom .ngx-gallery-image.ngx-gallery-active { transform: scale(1, 1); opacity: 1; } .ngx-gallery-image-text { width: 100%; background: rgba(0, 0, 0, 0.7); padding: 10px; text-align: center; color: white; font-size: 16px; position: absolute; bottom: 0px; z-index: 10; } "]
            }]
    }], function () { return [{ type: ɵngcc2.DomSanitizer }, { type: ɵngcc0.ElementRef }, { type: NgxGalleryHelperService }]; }, { onClick: [{
            type: core.Output
        }], onActiveChange: [{
            type: core.Output
        }], arrows: [{
            type: core.Input
        }], onMouseEnter: [{
            type: core.HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: core.HostListener,
            args: ['mouseleave']
        }], selectedIndex: [{
            type: core.Input
        }], images: [{
            type: core.Input
        }], clickable: [{
            type: core.Input
        }], arrowsAutoHide: [{
            type: core.Input
        }], swipe: [{
            type: core.Input
        }], animation: [{
            type: core.Input
        }], size: [{
            type: core.Input
        }], arrowPrevIcon: [{
            type: core.Input
        }], arrowNextIcon: [{
            type: core.Input
        }], autoPlay: [{
            type: core.Input
        }], autoPlayInterval: [{
            type: core.Input
        }], autoPlayPauseOnHover: [{
            type: core.Input
        }], infinityMove: [{
            type: core.Input
        }], lazyLoading: [{
            type: core.Input
        }], actions: [{
            type: core.Input
        }], descriptions: [{
            type: core.Input
        }], showDescription: [{
            type: core.Input
        }], bullets: [{
            type: core.Input
        }] }); })();
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
NgxGalleryThumbnailsComponent.ɵfac = function NgxGalleryThumbnailsComponent_Factory(t) { return new (t || NgxGalleryThumbnailsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgxGalleryHelperService)); };
NgxGalleryThumbnailsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryThumbnailsComponent, selectors: [["ngx-gallery-thumbnails"]], hostBindings: function NgxGalleryThumbnailsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NgxGalleryThumbnailsComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function NgxGalleryThumbnailsComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { selectedIndex: "selectedIndex", images: "images", links: "links", labels: "labels", linkTarget: "linkTarget", columns: "columns", rows: "rows", arrows: "arrows", arrowsAutoHide: "arrowsAutoHide", margin: "margin", clickable: "clickable", swipe: "swipe", size: "size", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon", moveSize: "moveSize", order: "order", remainingCount: "remainingCount", lazyLoading: "lazyLoading", actions: "actions" }, outputs: { onActiveChange: "onActiveChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 9, consts: [[1, "ngx-gallery-thumbnails"], ["class", "ngx-gallery-thumbnail", 3, "href", "target", "background-image", "width", "height", "left", "top", "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick", 4, "ngIf"], [1, "ngx-gallery-thumbnail", 3, "href", "target", "ngClass", "click"], [1, "ngx-gallery-icons-wrapper"], [3, "icon", "disabled", "titleText", "onClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-remaining-count-overlay", 4, "ngIf"], [3, "icon", "disabled", "titleText", "onClick"], [1, "ngx-gallery-remaining-count-overlay"], [1, "ngx-gallery-remaining-count"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick"]], template: function NgxGalleryThumbnailsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵtemplate(2, NgxGalleryThumbnailsComponent_a_2_Template, 4, 19, "a", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template, 1, 4, "ngx-gallery-arrows", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-", ctx.size, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("transform", "translateX(" + ctx.thumbnailsLeft + ")")("margin-left", ctx.thumbnailsMarginLeft);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.getImages());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.canShowArrows());
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgClass, NgxGalleryActionComponent, NgxGalleryArrowsComponent], styles: ["[_nghost-%COMP%] { width: 100%; display: inline-block; position: relative; } .ngx-gallery-thumbnails-wrapper[_ngcontent-%COMP%] { width: 100%; height: 100%; position: absolute; overflow: hidden; } .ngx-gallery-thumbnails[_ngcontent-%COMP%] { height: 100%; width: 100%; position: absolute; left: 0px; transform: translateX(0); transition: transform 0.5s ease-in-out; will-change: transform; } .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%] { position: absolute; height: 100%; background-position: center; background-repeat: no-repeat; text-decoration: none; } .ngx-gallery-thumbnail-size-cover[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%] { background-size: cover; } .ngx-gallery-thumbnail-size-contain[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%] { background-size: contain; } .ngx-gallery-remaining-count-overlay[_ngcontent-%COMP%] { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; background-color: rgba(0, 0, 0, 0.4); } .ngx-gallery-remaining-count[_ngcontent-%COMP%] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 30px; }"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryThumbnailsComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-thumbnails',
                template: "\n    <div class=\"ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}\">\n        <div class=\"ngx-gallery-thumbnails\" [style.transform]=\"'translateX(' + thumbnailsLeft + ')'\" [style.marginLeft]=\"thumbnailsMarginLeft\">\n            <a [href]=\"hasLink(i) ? links[i] : '#'\" [target]=\"linkTarget\" class=\"ngx-gallery-thumbnail\" *ngFor=\"let image of getImages(); let i = index;\" [style.background-image]=\"getSafeUrl(image)\" (click)=\"handleClick($event, i)\" [style.width]=\"getThumbnailWidth()\" [style.height]=\"getThumbnailHeight()\" [style.left]=\"getThumbnailLeft(i)\" [style.top]=\"getThumbnailTop(i)\" [ngClass]=\"{ 'ngx-gallery-active': i == selectedIndex, 'ngx-gallery-clickable': clickable }\" [attr.aria-label]=\"labels[i]\">\n                <div class=\"ngx-gallery-icons-wrapper\">\n                    <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, i)\"></ngx-gallery-action>\n                </div>\n                <div class=\"ngx-gallery-remaining-count-overlay\" *ngIf=\"remainingCount && remainingCountValue && (i == (rows * columns) - 1)\">\n                    <span class=\"ngx-gallery-remaining-count\">+{{remainingCountValue}}</span>\n                </div>\n            </a>\n        </div>\n    </div>\n    <ngx-gallery-arrows *ngIf=\"canShowArrows()\" (onPrevClick)=\"moveLeft()\" (onNextClick)=\"moveRight()\" [prevDisabled]=\"!canMoveLeft()\" [nextDisabled]=\"!canMoveRight()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    ",
                styles: [":host { width: 100%; display: inline-block; position: relative; } .ngx-gallery-thumbnails-wrapper { width: 100%; height: 100%; position: absolute; overflow: hidden; } .ngx-gallery-thumbnails { height: 100%; width: 100%; position: absolute; left: 0px; transform: translateX(0); transition: transform 0.5s ease-in-out; will-change: transform; } .ngx-gallery-thumbnails .ngx-gallery-thumbnail { position: absolute; height: 100%; background-position: center; background-repeat: no-repeat; text-decoration: none; } .ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail { background-size: cover; } .ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail { background-size: contain; } .ngx-gallery-remaining-count-overlay { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; background-color: rgba(0, 0, 0, 0.4); } .ngx-gallery-remaining-count { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 30px; } "]
            }]
    }], function () { return [{ type: ɵngcc2.DomSanitizer }, { type: ɵngcc0.ElementRef }, { type: NgxGalleryHelperService }]; }, { onActiveChange: [{
            type: core.Output
        }], onMouseEnter: [{
            type: core.HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: core.HostListener,
            args: ['mouseleave']
        }], selectedIndex: [{
            type: core.Input
        }], images: [{
            type: core.Input
        }], links: [{
            type: core.Input
        }], labels: [{
            type: core.Input
        }], linkTarget: [{
            type: core.Input
        }], columns: [{
            type: core.Input
        }], rows: [{
            type: core.Input
        }], arrows: [{
            type: core.Input
        }], arrowsAutoHide: [{
            type: core.Input
        }], margin: [{
            type: core.Input
        }], clickable: [{
            type: core.Input
        }], swipe: [{
            type: core.Input
        }], size: [{
            type: core.Input
        }], arrowPrevIcon: [{
            type: core.Input
        }], arrowNextIcon: [{
            type: core.Input
        }], moveSize: [{
            type: core.Input
        }], order: [{
            type: core.Input
        }], remainingCount: [{
            type: core.Input
        }], lazyLoading: [{
            type: core.Input
        }], actions: [{
            type: core.Input
        }] }); })();
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
NgxGalleryPreviewComponent.ɵfac = function NgxGalleryPreviewComponent_Factory(t) { return new (t || NgxGalleryPreviewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgxGalleryHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NgxGalleryPreviewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryPreviewComponent, selectors: [["ngx-gallery-preview"]], viewQuery: function NgxGalleryPreviewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.previewImage = _t.first);
    } }, hostBindings: function NgxGalleryPreviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NgxGalleryPreviewComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { arrows: "arrows", images: "images", descriptions: "descriptions", showDescription: "showDescription", arrowsAutoHide: "arrowsAutoHide", swipe: "swipe", fullscreen: "fullscreen", forceFullscreen: "forceFullscreen", closeOnClick: "closeOnClick", closeOnEsc: "closeOnEsc", keyboardNavigation: "keyboardNavigation", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon", closeIcon: "closeIcon", fullscreenIcon: "fullscreenIcon", spinnerIcon: "spinnerIcon", autoPlay: "autoPlay", autoPlayInterval: "autoPlayInterval", autoPlayPauseOnHover: "autoPlayPauseOnHover", infinityMove: "infinityMove", zoom: "zoom", zoomStep: "zoomStep", zoomMax: "zoomMax", zoomMin: "zoomMin", zoomInIcon: "zoomInIcon", zoomOutIcon: "zoomOutIcon", animation: "animation", actions: "actions", rotate: "rotate", rotateLeftIcon: "rotateLeftIcon", rotateRightIcon: "rotateRightIcon", download: "download", downloadIcon: "downloadIcon", bullets: "bullets" }, outputs: { onOpen: "onOpen", onClose: "onClose", onActiveChange: "onActiveChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 18, vars: 17, consts: [[3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick", 4, "ngIf"], [1, "ngx-gallery-preview-top"], [1, "ngx-gallery-preview-icons"], [3, "icon", "disabled", "titleText", "onClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-icon", "aria-hidden", "true", "download", "", 3, "href", 4, "ngIf"], [3, "icon", "disabled", "onClick", 4, "ngIf"], [3, "icon", "onClick", 4, "ngIf"], [3, "icon", "onClick"], [1, "ngx-spinner-wrapper", "ngx-gallery-center"], ["aria-hidden", "true"], [1, "ngx-gallery-preview-wrapper", 3, "click", "mouseup", "mousemove", "touchend", "touchmove"], [1, "ngx-gallery-preview-img-wrapper"], ["class", "ngx-gallery-preview-img ngx-gallery-center", 3, "src", "ngx-gallery-active", "animation", "ngx-gallery-grab", "transform", "left", "top", "click", "mouseenter", "mouseleave", "mousedown", "touchstart", 4, "ngIf"], [3, "count", "active", "onChange", 4, "ngIf"], ["class", "ngx-gallery-preview-text", 3, "innerHTML", "click", 4, "ngIf"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick"], [3, "icon", "disabled", "titleText", "onClick"], ["aria-hidden", "true", "download", "", 1, "ngx-gallery-icon", 3, "href"], [3, "icon", "disabled", "onClick"], [1, "ngx-gallery-preview-img", "ngx-gallery-center", 3, "src", "click", "mouseenter", "mouseleave", "mousedown", "touchstart"], ["previewImage", ""], [3, "count", "active", "onChange"], [1, "ngx-gallery-preview-text", 3, "innerHTML", "click"]], template: function NgxGalleryPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template, 1, 4, "ngx-gallery-arrows", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NgxGalleryPreviewComponent_ngx_gallery_action_3_Template, 1, 3, "ngx-gallery-action", 3);
        ɵngcc0.ɵɵtemplate(4, NgxGalleryPreviewComponent_a_4_Template, 2, 4, "a", 4);
        ɵngcc0.ɵɵtemplate(5, NgxGalleryPreviewComponent_ngx_gallery_action_5_Template, 1, 2, "ngx-gallery-action", 5);
        ɵngcc0.ɵɵtemplate(6, NgxGalleryPreviewComponent_ngx_gallery_action_6_Template, 1, 2, "ngx-gallery-action", 5);
        ɵngcc0.ɵɵtemplate(7, NgxGalleryPreviewComponent_ngx_gallery_action_7_Template, 1, 1, "ngx-gallery-action", 6);
        ɵngcc0.ɵɵtemplate(8, NgxGalleryPreviewComponent_ngx_gallery_action_8_Template, 1, 1, "ngx-gallery-action", 6);
        ɵngcc0.ɵɵtemplate(9, NgxGalleryPreviewComponent_ngx_gallery_action_9_Template, 1, 1, "ngx-gallery-action", 6);
        ɵngcc0.ɵɵelementStart(10, "ngx-gallery-action", 7);
        ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_Template_ngx_gallery_action_onClick_10_listener() { return ctx.close(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 8);
        ɵngcc0.ɵɵelement(12, "i", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "div", 10);
        ɵngcc0.ɵɵlistener("click", function NgxGalleryPreviewComponent_Template_div_click_13_listener() { return ctx.closeOnClick && ctx.close(); })("mouseup", function NgxGalleryPreviewComponent_Template_div_mouseup_13_listener($event) { return ctx.mouseUpHandler($event); })("mousemove", function NgxGalleryPreviewComponent_Template_div_mousemove_13_listener($event) { return ctx.mouseMoveHandler($event); })("touchend", function NgxGalleryPreviewComponent_Template_div_touchend_13_listener($event) { return ctx.mouseUpHandler($event); })("touchmove", function NgxGalleryPreviewComponent_Template_div_touchmove_13_listener($event) { return ctx.mouseMoveHandler($event); });
        ɵngcc0.ɵɵelementStart(14, "div", 11);
        ɵngcc0.ɵɵtemplate(15, NgxGalleryPreviewComponent_img_15_Template, 2, 13, "img", 12);
        ɵngcc0.ɵɵtemplate(16, NgxGalleryPreviewComponent_ngx_gallery_bullets_16_Template, 1, 2, "ngx-gallery-bullets", 13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(17, NgxGalleryPreviewComponent_div_17_Template, 1, 1, "div", 14);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.arrows);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.actions);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.download && ctx.src);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.zoom);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.zoom);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.rotate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.rotate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.fullscreen);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", "ngx-gallery-close " + ctx.closeIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ngx-gallery-active", ctx.showSpinner);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-icon ngx-gallery-spinner ", ctx.spinnerIcon, "");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.src);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.bullets);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showDescription && ctx.description);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, NgxGalleryActionComponent, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent], styles: [".ngx-gallery-active[_nghost-%COMP%] { width: 100%; height: 100%; position: fixed; left: 0; top: 0; background: rgba(0, 0, 0, 0.7); z-index: 10000; display: inline-block; } [_nghost-%COMP%] { display: none; } [_nghost-%COMP%]     .ngx-gallery-arrow { font-size: 50px; } [_nghost-%COMP%]     ngx-gallery-bullets { height: 5%; align-items: center; padding: 0px; } .ngx-gallery-preview-img[_ngcontent-%COMP%] { opacity: 0; max-width: 90%; max-height: 90%; user-select: none; transition: transform .5s; } .ngx-gallery-preview-img.animation[_ngcontent-%COMP%] { transition: opacity 0.5s linear, transform .5s; } .ngx-gallery-preview-img.ngx-gallery-active[_ngcontent-%COMP%] { opacity: 1; } .ngx-gallery-preview-img.ngx-gallery-grab[_ngcontent-%COMP%] { cursor: grab; cursor: -webkit-grab; } .ngx-gallery-icon.ngx-gallery-spinner[_ngcontent-%COMP%] { font-size: 50px; left: 0; display: inline-block; } [_nghost-%COMP%]     .ngx-gallery-preview-top { position: absolute; width: 100%; user-select: none; } [_nghost-%COMP%]     .ngx-gallery-preview-icons { float: right; } [_nghost-%COMP%]     .ngx-gallery-preview-icons .ngx-gallery-icon { position: relative; margin-right: 10px; margin-top: 10px; font-size: 25px; cursor: pointer; text-decoration: none; } [_nghost-%COMP%]     .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled { cursor: default; opacity: 0.4; } .ngx-spinner-wrapper[_ngcontent-%COMP%] { width: 50px; height: 50px; display: none; } .ngx-spinner-wrapper.ngx-gallery-active[_ngcontent-%COMP%] { display: inline-block; } .ngx-gallery-center[_ngcontent-%COMP%] { position: absolute; left: 0; right: 0; bottom: 0; margin: auto; top: 0; } .ngx-gallery-preview-text[_ngcontent-%COMP%] { width: 100%; background: rgba(0, 0, 0, 0.7); padding: 10px; text-align: center; color: white; font-size: 16px; flex: 0 1 auto; z-index: 10; } .ngx-gallery-preview-wrapper[_ngcontent-%COMP%] { width: 100%; height: 100%; display: flex; flex-flow: column; } .ngx-gallery-preview-img-wrapper[_ngcontent-%COMP%] { flex: 1 1 auto; position: relative; }"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryPreviewComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-preview',
                template: "\n        <ngx-gallery-arrows *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n        <div class=\"ngx-gallery-preview-top\">\n            <div class=\"ngx-gallery-preview-icons\">\n                <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n                <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n                    <i class=\"ngx-gallery-icon-content {{ downloadIcon }}\"></i>\n                </a>\n                <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\" (onClick)=\"zoomOut()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\" (onClick)=\"zoomIn()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (onClick)=\"rotateLeft()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (onClick)=\"rotateRight()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"'ngx-gallery-fullscreen ' + fullscreenIcon\" (onClick)=\"manageFullscreen()\"></ngx-gallery-action>\n                <ngx-gallery-action [icon]=\"'ngx-gallery-close ' + closeIcon\" (onClick)=\"close()\"></ngx-gallery-action>\n            </div>\n        </div>\n        <div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n            <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\" (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n            <div class=\"ngx-gallery-preview-img-wrapper\">\n                <img *ngIf=\"src\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\" (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n                <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"index\" (onChange)=\"showAtIndex($event)\"></ngx-gallery-bullets>\n            </div>\n            <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\" (click)=\"$event.stopPropagation()\"></div>\n        </div>\n    ",
                styles: [":host(.ngx-gallery-active) { width: 100%; height: 100%; position: fixed; left: 0; top: 0; background: rgba(0, 0, 0, 0.7); z-index: 10000; display: inline-block; } :host { display: none; } :host ::ng-deep .ngx-gallery-arrow { font-size: 50px; } :host ::ng-deep ngx-gallery-bullets { height: 5%; align-items: center; padding: 0px; } .ngx-gallery-preview-img { opacity: 0; max-width: 90%; max-height: 90%; user-select: none; transition: transform .5s; } .ngx-gallery-preview-img.animation { transition: opacity 0.5s linear, transform .5s; } .ngx-gallery-preview-img.ngx-gallery-active { opacity: 1; } .ngx-gallery-preview-img.ngx-gallery-grab { cursor: grab; cursor: -webkit-grab; } .ngx-gallery-icon.ngx-gallery-spinner { font-size: 50px; left: 0; display: inline-block; } :host ::ng-deep .ngx-gallery-preview-top { position: absolute; width: 100%; user-select: none; } :host ::ng-deep .ngx-gallery-preview-icons { float: right; } :host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon { position: relative; margin-right: 10px; margin-top: 10px; font-size: 25px; cursor: pointer; text-decoration: none; } :host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled { cursor: default; opacity: 0.4; } .ngx-spinner-wrapper { width: 50px; height: 50px; display: none; } .ngx-spinner-wrapper.ngx-gallery-active { display: inline-block; } .ngx-gallery-center { position: absolute; left: 0; right: 0; bottom: 0; margin: auto; top: 0; } .ngx-gallery-preview-text { width: 100%; background: rgba(0, 0, 0, 0.7); padding: 10px; text-align: center; color: white; font-size: 16px; flex: 0 1 auto; z-index: 10; } .ngx-gallery-preview-wrapper { width: 100%; height: 100%; display: flex; flex-flow: column; } .ngx-gallery-preview-img-wrapper { flex: 1 1 auto; position: relative; } "]
            }]
    }], function () { return [{ type: ɵngcc2.DomSanitizer }, { type: ɵngcc0.ElementRef }, { type: NgxGalleryHelperService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { onOpen: [{
            type: core.Output
        }], onClose: [{
            type: core.Output
        }], onActiveChange: [{
            type: core.Output
        }], arrows: [{
            type: core.Input
        }], onMouseEnter: [{
            type: core.HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: core.HostListener,
            args: ['mouseleave']
        }], images: [{
            type: core.Input
        }], descriptions: [{
            type: core.Input
        }], showDescription: [{
            type: core.Input
        }], arrowsAutoHide: [{
            type: core.Input
        }], swipe: [{
            type: core.Input
        }], fullscreen: [{
            type: core.Input
        }], forceFullscreen: [{
            type: core.Input
        }], closeOnClick: [{
            type: core.Input
        }], closeOnEsc: [{
            type: core.Input
        }], keyboardNavigation: [{
            type: core.Input
        }], arrowPrevIcon: [{
            type: core.Input
        }], arrowNextIcon: [{
            type: core.Input
        }], closeIcon: [{
            type: core.Input
        }], fullscreenIcon: [{
            type: core.Input
        }], spinnerIcon: [{
            type: core.Input
        }], autoPlay: [{
            type: core.Input
        }], autoPlayInterval: [{
            type: core.Input
        }], autoPlayPauseOnHover: [{
            type: core.Input
        }], infinityMove: [{
            type: core.Input
        }], zoom: [{
            type: core.Input
        }], zoomStep: [{
            type: core.Input
        }], zoomMax: [{
            type: core.Input
        }], zoomMin: [{
            type: core.Input
        }], zoomInIcon: [{
            type: core.Input
        }], zoomOutIcon: [{
            type: core.Input
        }], animation: [{
            type: core.Input
        }], actions: [{
            type: core.Input
        }], rotate: [{
            type: core.Input
        }], rotateLeftIcon: [{
            type: core.Input
        }], rotateRightIcon: [{
            type: core.Input
        }], download: [{
            type: core.Input
        }], downloadIcon: [{
            type: core.Input
        }], bullets: [{
            type: core.Input
        }], previewImage: [{
            type: core.ViewChild,
            args: ['previewImage']
        }] }); })();
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
NgxGalleryComponent.ɵfac = function NgxGalleryComponent_Factory(t) { return new (t || NgxGalleryComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NgxGalleryComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryComponent, selectors: [["ngx-gallery"]], viewQuery: function NgxGalleryComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NgxGalleryPreviewComponent, true);
        ɵngcc0.ɵɵviewQuery(NgxGalleryImageComponent, true);
        ɵngcc0.ɵɵviewQuery(NgxGalleryThumbnailsComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.preview = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.image = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.thubmnails = _t.first);
    } }, hostVars: 6, hostBindings: function NgxGalleryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function NgxGalleryComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.width)("left", ctx.left)("height", ctx.height);
    } }, inputs: { options: "options", images: "images" }, outputs: { imagesReady: "imagesReady", change: "change", previewOpen: "previewOpen", previewClose: "previewClose", previewChange: "previewChange" }, features: [ɵngcc0.ɵɵProvidersFeature([NgxGalleryHelperService])], decls: 4, vars: 41, consts: [[3, "height", "images", "clickable", "selectedIndex", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "swipe", "animation", "size", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "lazyLoading", "actions", "descriptions", "showDescription", "bullets", "onClick", "onActiveChange", 4, "ngIf"], [3, "marginTop", "marginBottom", "height", "images", "links", "labels", "linkTarget", "selectedIndex", "columns", "rows", "margin", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "clickable", "swipe", "size", "moveSize", "order", "remainingCount", "lazyLoading", "actions", "onActiveChange", 4, "ngIf"], [3, "images", "descriptions", "showDescription", "arrowPrevIcon", "arrowNextIcon", "closeIcon", "fullscreenIcon", "spinnerIcon", "arrows", "arrowsAutoHide", "swipe", "fullscreen", "forceFullscreen", "closeOnClick", "closeOnEsc", "keyboardNavigation", "animation", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "zoom", "zoomStep", "zoomMax", "zoomMin", "zoomInIcon", "zoomOutIcon", "actions", "rotate", "rotateLeftIcon", "rotateRightIcon", "download", "downloadIcon", "bullets", "onClose", "onOpen", "onActiveChange"], [3, "images", "clickable", "selectedIndex", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "swipe", "animation", "size", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "lazyLoading", "actions", "descriptions", "showDescription", "bullets", "onClick", "onActiveChange"], [3, "images", "links", "labels", "linkTarget", "selectedIndex", "columns", "rows", "margin", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "clickable", "swipe", "size", "moveSize", "order", "remainingCount", "lazyLoading", "actions", "onActiveChange"]], template: function NgxGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, NgxGalleryComponent_ngx_gallery_image_1_Template, 1, 21, "ngx-gallery-image", 0);
        ɵngcc0.ɵɵtemplate(2, NgxGalleryComponent_ngx_gallery_thumbnails_2_Template, 1, 27, "ngx-gallery-thumbnails", 1);
        ɵngcc0.ɵɵelementStart(3, "ngx-gallery-preview", 2);
        ɵngcc0.ɵɵlistener("onClose", function NgxGalleryComponent_Template_ngx_gallery_preview_onClose_3_listener() { return ctx.onPreviewClose(); })("onOpen", function NgxGalleryComponent_Template_ngx_gallery_preview_onOpen_3_listener() { return ctx.onPreviewOpen(); })("onActiveChange", function NgxGalleryComponent_Template_ngx_gallery_preview_onActiveChange_3_listener($event) { return ctx.previewSelect($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-layout ", ctx.currentOptions == null ? null : ctx.currentOptions.layout, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.currentOptions == null ? null : ctx.currentOptions.image);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.currentOptions == null ? null : ctx.currentOptions.thumbnails);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ngx-gallery-active", ctx.previewEnabled);
        ɵngcc0.ɵɵproperty("images", ctx.bigImages)("descriptions", ctx.descriptions)("showDescription", ctx.currentOptions == null ? null : ctx.currentOptions.previewDescription)("arrowPrevIcon", ctx.currentOptions == null ? null : ctx.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx.currentOptions == null ? null : ctx.currentOptions.arrowNextIcon)("closeIcon", ctx.currentOptions == null ? null : ctx.currentOptions.closeIcon)("fullscreenIcon", ctx.currentOptions == null ? null : ctx.currentOptions.fullscreenIcon)("spinnerIcon", ctx.currentOptions == null ? null : ctx.currentOptions.spinnerIcon)("arrows", ctx.currentOptions == null ? null : ctx.currentOptions.previewArrows)("arrowsAutoHide", ctx.currentOptions == null ? null : ctx.currentOptions.previewArrowsAutoHide)("swipe", ctx.currentOptions == null ? null : ctx.currentOptions.previewSwipe)("fullscreen", ctx.currentOptions == null ? null : ctx.currentOptions.previewFullscreen)("forceFullscreen", ctx.currentOptions == null ? null : ctx.currentOptions.previewForceFullscreen)("closeOnClick", ctx.currentOptions == null ? null : ctx.currentOptions.previewCloseOnClick)("closeOnEsc", ctx.currentOptions == null ? null : ctx.currentOptions.previewCloseOnEsc)("keyboardNavigation", ctx.currentOptions == null ? null : ctx.currentOptions.previewKeyboardNavigation)("animation", ctx.currentOptions == null ? null : ctx.currentOptions.previewAnimation)("autoPlay", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlay)("autoPlayInterval", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlayInterval)("autoPlayPauseOnHover", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlayPauseOnHover)("infinityMove", ctx.currentOptions == null ? null : ctx.currentOptions.previewInfinityMove)("zoom", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoom)("zoomStep", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomStep)("zoomMax", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomMax)("zoomMin", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomMin)("zoomInIcon", ctx.currentOptions == null ? null : ctx.currentOptions.zoomInIcon)("zoomOutIcon", ctx.currentOptions == null ? null : ctx.currentOptions.zoomOutIcon)("actions", ctx.currentOptions == null ? null : ctx.currentOptions.actions)("rotate", ctx.currentOptions == null ? null : ctx.currentOptions.previewRotate)("rotateLeftIcon", ctx.currentOptions == null ? null : ctx.currentOptions.rotateLeftIcon)("rotateRightIcon", ctx.currentOptions == null ? null : ctx.currentOptions.rotateRightIcon)("download", ctx.currentOptions == null ? null : ctx.currentOptions.previewDownload)("downloadIcon", ctx.currentOptions == null ? null : ctx.currentOptions.downloadIcon)("bullets", ctx.currentOptions == null ? null : ctx.currentOptions.previewBullets);
    } }, directives: [ɵngcc1.NgIf, NgxGalleryPreviewComponent, NgxGalleryImageComponent, NgxGalleryThumbnailsComponent], styles: ["[_nghost-%COMP%] { display: inline-block; } [_nghost-%COMP%]    > *[_ngcontent-%COMP%] { float: left; } [_nghost-%COMP%]     * { box-sizing: border-box; } [_nghost-%COMP%]     .ngx-gallery-icon { color: white; font-size: 25px; position: absolute; z-index: 2000; display: inline-block; } [_nghost-%COMP%]     .ngx-gallery-icon .ngx-gallery-icon-content { display: block; } [_nghost-%COMP%]     .ngx-gallery-clickable { cursor: pointer; } [_nghost-%COMP%]     .ngx-gallery-icons-wrapper .ngx-gallery-icon { position: relative; margin-right: 5px; margin-top: 5px; font-size: 20px; cursor: pointer; } [_nghost-%COMP%]     .ngx-gallery-icons-wrapper { float: right; } [_nghost-%COMP%]   .ngx-gallery-layout[_ngcontent-%COMP%] { width: 100%; height: 100%; display: flex; flex-direction: column; } [_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-top[_ngcontent-%COMP%]   ngx-gallery-image[_ngcontent-%COMP%] { order: 2; } [_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-top[_ngcontent-%COMP%]   ngx-gallery-thumbnails[_ngcontent-%COMP%] { order: 1; } [_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-bottom[_ngcontent-%COMP%]   ngx-gallery-image[_ngcontent-%COMP%] { order: 1; } [_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-bottom[_ngcontent-%COMP%]   ngx-gallery-thumbnails[_ngcontent-%COMP%] { order: 2; }"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery',
                template: "\n    <div class=\"ngx-gallery-layout {{currentOptions?.layout}}\">\n        <ngx-gallery-image *ngIf=\"currentOptions?.image\" [style.height]=\"getImageHeight()\" [images]=\"mediumImages\" [clickable]=\"currentOptions?.preview\" [selectedIndex]=\"selectedIndex\" [arrows]=\"currentOptions?.imageArrows\" [arrowsAutoHide]=\"currentOptions?.imageArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [swipe]=\"currentOptions?.imageSwipe\" [animation]=\"currentOptions?.imageAnimation\" [size]=\"currentOptions?.imageSize\" [autoPlay]=\"currentOptions?.imageAutoPlay\" [autoPlayInterval]=\"currentOptions?.imageAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.imageAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.imageInfinityMove\"  [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.imageActions\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.imageDescription\" [bullets]=\"currentOptions?.imageBullets\" (onClick)=\"openPreview($event)\" (onActiveChange)=\"selectFromImage($event)\"></ngx-gallery-image>\n\n        <ngx-gallery-thumbnails *ngIf=\"currentOptions?.thumbnails\" [style.marginTop]=\"getThumbnailsMarginTop()\" [style.marginBottom]=\"getThumbnailsMarginBottom()\" [style.height]=\"getThumbnailsHeight()\" [images]=\"smallImages\" [links]=\"currentOptions?.thumbnailsAsLinks ? links : []\" [labels]=\"labels\" [linkTarget]=\"currentOptions?.linkTarget\" [selectedIndex]=\"selectedIndex\" [columns]=\"currentOptions?.thumbnailsColumns\" [rows]=\"currentOptions?.thumbnailsRows\" [margin]=\"currentOptions?.thumbnailMargin\" [arrows]=\"currentOptions?.thumbnailsArrows\" [arrowsAutoHide]=\"currentOptions?.thumbnailsArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [clickable]=\"currentOptions?.image || currentOptions?.preview\" [swipe]=\"currentOptions?.thumbnailsSwipe\" [size]=\"currentOptions?.thumbnailSize\" [moveSize]=\"currentOptions?.thumbnailsMoveSize\" [order]=\"currentOptions?.thumbnailsOrder\" [remainingCount]=\"currentOptions?.thumbnailsRemainingCount\" [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.thumbnailActions\"  (onActiveChange)=\"selectFromThumbnails($event)\"></ngx-gallery-thumbnails>\n\n        <ngx-gallery-preview [images]=\"bigImages\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.previewDescription\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [closeIcon]=\"currentOptions?.closeIcon\" [fullscreenIcon]=\"currentOptions?.fullscreenIcon\" [spinnerIcon]=\"currentOptions?.spinnerIcon\" [arrows]=\"currentOptions?.previewArrows\" [arrowsAutoHide]=\"currentOptions?.previewArrowsAutoHide\" [swipe]=\"currentOptions?.previewSwipe\" [fullscreen]=\"currentOptions?.previewFullscreen\" [forceFullscreen]=\"currentOptions?.previewForceFullscreen\" [closeOnClick]=\"currentOptions?.previewCloseOnClick\" [closeOnEsc]=\"currentOptions?.previewCloseOnEsc\" [keyboardNavigation]=\"currentOptions?.previewKeyboardNavigation\" [animation]=\"currentOptions?.previewAnimation\" [autoPlay]=\"currentOptions?.previewAutoPlay\" [autoPlayInterval]=\"currentOptions?.previewAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.previewAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.previewInfinityMove\" [zoom]=\"currentOptions?.previewZoom\" [zoomStep]=\"currentOptions?.previewZoomStep\" [zoomMax]=\"currentOptions?.previewZoomMax\" [zoomMin]=\"currentOptions?.previewZoomMin\" [zoomInIcon]=\"currentOptions?.zoomInIcon\" [zoomOutIcon]=\"currentOptions?.zoomOutIcon\" [actions]=\"currentOptions?.actions\" [rotate]=\"currentOptions?.previewRotate\" [rotateLeftIcon]=\"currentOptions?.rotateLeftIcon\" [rotateRightIcon]=\"currentOptions?.rotateRightIcon\" [download]=\"currentOptions?.previewDownload\" [downloadIcon]=\"currentOptions?.downloadIcon\" [bullets]=\"currentOptions?.previewBullets\" (onClose)=\"onPreviewClose()\" (onOpen)=\"onPreviewOpen()\" (onActiveChange)=\"previewSelect($event)\" [class.ngx-gallery-active]=\"previewEnabled\"></ngx-gallery-preview>\n    </div>\n    ",
                styles: [":host { display: inline-block; } :host > * { float: left; } :host ::ng-deep * { box-sizing: border-box; } :host ::ng-deep .ngx-gallery-icon { color: white; font-size: 25px; position: absolute; z-index: 2000; display: inline-block; } :host ::ng-deep .ngx-gallery-icon .ngx-gallery-icon-content { display: block; } :host ::ng-deep .ngx-gallery-clickable { cursor: pointer; } :host ::ng-deep .ngx-gallery-icons-wrapper .ngx-gallery-icon { position: relative; margin-right: 5px; margin-top: 5px; font-size: 20px; cursor: pointer; } :host ::ng-deep .ngx-gallery-icons-wrapper { float: right; } :host .ngx-gallery-layout { width: 100%; height: 100%; display: flex; flex-direction: column; } :host .ngx-gallery-layout.thumbnails-top ngx-gallery-image { order: 2; } :host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails { order: 1; } :host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image { order: 1; } :host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails { order: 2; } "],
                providers: [NgxGalleryHelperService]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { imagesReady: [{
            type: core.Output
        }], change: [{
            type: core.Output
        }], previewOpen: [{
            type: core.Output
        }], previewClose: [{
            type: core.Output
        }], previewChange: [{
            type: core.Output
        }], options: [{
            type: core.Input
        }], onResize: [{
            type: core.HostListener,
            args: ['window:resize']
        }], width: [{
            type: core.HostBinding,
            args: ['style.width']
        }], left: [{
            type: core.HostBinding,
            args: ['style.left']
        }], height: [{
            type: core.HostBinding,
            args: ['style.height']
        }], images: [{
            type: core.Input
        }], preview: [{
            type: core.ViewChild,
            args: [NgxGalleryPreviewComponent]
        }], image: [{
            type: core.ViewChild,
            args: [NgxGalleryImageComponent]
        }], thubmnails: [{
            type: core.ViewChild,
            args: [NgxGalleryThumbnailsComponent]
        }] }); })();
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
CustomHammerConfig.ɵfac = function CustomHammerConfig_Factory(t) { return ɵCustomHammerConfig_BaseFactory(t || CustomHammerConfig); };
CustomHammerConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CustomHammerConfig, factory: function (t) { return CustomHammerConfig.ɵfac(t); } });
var ɵCustomHammerConfig_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(CustomHammerConfig);
        return CustomHammerConfig;
    }(platformBrowser.HammerGestureConfig));
    var NgxGalleryModule = /** @class */ (function () {
        function NgxGalleryModule() {
        }
NgxGalleryModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxGalleryModule });
NgxGalleryModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxGalleryModule_Factory(t) { return new (t || NgxGalleryModule)(); }, providers: [
        { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
    ], imports: [[
            common.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxGalleryModule, { declarations: [NgxGalleryActionComponent, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent, NgxGalleryImageComponent, NgxGalleryThumbnailsComponent, NgxGalleryPreviewComponent, NgxGalleryComponent], imports: [ɵngcc1.CommonModule], exports: [NgxGalleryComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryModule, [{
        type: core.NgModule,
        args: [{
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
            }]
    }], function () { return []; }, null); })();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnkudW1kLmpzIiwic291cmNlcyI6WyJuZ3gtZ2FsbGVyeS51bWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7b0tBQzJFO3VIQUNsQjtnR0FDbkI7dUNBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBMkJsRCxBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBK0JBLEFBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBbUNBLEFBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQStHQSxBQUdBOzs7Ozs7Ozs7MEVBSUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQStTSCxBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBK0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQSthQSxBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQStCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBK3FCQSxBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQWtEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFpckJBLEFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUdBMkNEOzs7OztTQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKSwgcmVxdWlyZSgnQGFuZ3VsYXIvY29tbW9uJyksIHJlcXVpcmUoJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInKSkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAnQGFuZ3VsYXIvY29yZScsICdAYW5ndWxhci9jb21tb24nLCAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlciddLCBmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbFsnbmd4LWdhbGxlcnknXSA9IHt9LCBnbG9iYWwuY29yZSwgZ2xvYmFsLmNvbW1vbiwgZ2xvYmFsLnBsYXRmb3JtQnJvd3NlcikpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgY29yZSwgY29tbW9uLCBwbGF0Zm9ybUJyb3dzZXIpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqXG4gICAgICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gICAgICogR2VuZXJhdGVkIGZyb206IG5neC1nYWxsZXJ5LWFjdGlvbi5jb21wb25lbnQudHNcbiAgICAgKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXF1aXJlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gICAgICovXG4gICAgdmFyIE5neEdhbGxlcnlBY3Rpb25Db21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE5neEdhbGxlcnlBY3Rpb25Db21wb25lbnQoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRpdGxlVGV4dCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrID0gbmV3IGNvcmUuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXZlbnRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlBY3Rpb25Db21wb25lbnQucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXZlbnRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9O1xuICAgICAgICBOZ3hHYWxsZXJ5QWN0aW9uQ29tcG9uZW50LmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IGNvcmUuQ29tcG9uZW50LCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeS1hY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuZ3gtZ2FsbGVyeS1pY29uXFxcIiBbY2xhc3Mubmd4LWdhbGxlcnktaWNvbi1kaXNhYmxlZF09XFxcImRpc2FibGVkXFxcIlxcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgIHRpdGxlPVxcXCJ7eyB0aXRsZVRleHQgfX1cXFwiXFxuICAgICAgICAgICAgKGNsaWNrKT1cXFwiaGFuZGxlQ2xpY2soJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJuZ3gtZ2FsbGVyeS1pY29uLWNvbnRlbnQge3sgaWNvbiB9fVxcXCI+PC9pPlxcbiAgICAgICAgPC9kaXY+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNvcmUuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9XG4gICAgICAgIF07XG4gICAgICAgIE5neEdhbGxlcnlBY3Rpb25Db21wb25lbnQucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICBpY29uOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICB0aXRsZVRleHQ6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBvbkNsaWNrOiBbeyB0eXBlOiBjb3JlLk91dHB1dCB9XVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTmd4R2FsbGVyeUFjdGlvbkNvbXBvbmVudDtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gICAgICogR2VuZXJhdGVkIGZyb206IG5neC1nYWxsZXJ5LWFycm93cy5jb21wb25lbnQudHNcbiAgICAgKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXF1aXJlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gICAgICovXG4gICAgdmFyIE5neEdhbGxlcnlBcnJvd3NDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE5neEdhbGxlcnlBcnJvd3NDb21wb25lbnQoKSB7XG4gICAgICAgICAgICB0aGlzLm9uUHJldkNsaWNrID0gbmV3IGNvcmUuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLm9uTmV4dENsaWNrID0gbmV3IGNvcmUuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5QXJyb3dzQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVQcmV2Q2xpY2sgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub25QcmV2Q2xpY2suZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlBcnJvd3NDb21wb25lbnQucHJvdG90eXBlLmhhbmRsZU5leHRDbGljayA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vbk5leHRDbGljay5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIE5neEdhbGxlcnlBcnJvd3NDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogY29yZS5Db21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LWFycm93cycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LWFycm93LXdyYXBwZXIgbmd4LWdhbGxlcnktYXJyb3ctbGVmdFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmd4LWdhbGxlcnktaWNvbiBuZ3gtZ2FsbGVyeS1hcnJvd1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImhhbmRsZVByZXZDbGljaygpXFxcIiBbY2xhc3Mubmd4LWdhbGxlcnktZGlzYWJsZWRdPVxcXCJwcmV2RGlzYWJsZWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibmd4LWdhbGxlcnktaWNvbi1jb250ZW50IHt7YXJyb3dQcmV2SWNvbn19XFxcIj48L2k+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LWFycm93LXdyYXBwZXIgbmd4LWdhbGxlcnktYXJyb3ctcmlnaHRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LWljb24gbmd4LWdhbGxlcnktYXJyb3dcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJoYW5kbGVOZXh0Q2xpY2soKVxcXCIgW2NsYXNzLm5neC1nYWxsZXJ5LWRpc2FibGVkXT1cXFwibmV4dERpc2FibGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LWljb24tY29udGVudCB7e2Fycm93TmV4dEljb259fVxcXCI+PC9pPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBbXCIubmd4LWdhbGxlcnktYXJyb3ctd3JhcHBlciB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMXB4OyBkaXNwbGF5OiB0YWJsZTsgei1pbmRleDogMjAwMDsgdGFibGUtbGF5b3V0OiBmaXhlZDsgfSAubmd4LWdhbGxlcnktYXJyb3ctbGVmdCB7IGxlZnQ6IDBweDsgfSAubmd4LWdhbGxlcnktYXJyb3ctcmlnaHQgeyByaWdodDogMHB4OyB9IC5uZ3gtZ2FsbGVyeS1hcnJvdyB7IHRvcDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IGN1cnNvcjogcG9pbnRlcjsgfSAubmd4LWdhbGxlcnktYXJyb3cubmd4LWdhbGxlcnktZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjY7IGN1cnNvcjogZGVmYXVsdDsgfSAubmd4LWdhbGxlcnktYXJyb3ctbGVmdCAubmd4LWdhbGxlcnktYXJyb3cgeyBsZWZ0OiAxMHB4OyB9IC5uZ3gtZ2FsbGVyeS1hcnJvdy1yaWdodCAubmd4LWdhbGxlcnktYXJyb3cgeyByaWdodDogMTBweDsgfSBcIl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH1cbiAgICAgICAgXTtcbiAgICAgICAgTmd4R2FsbGVyeUFycm93c0NvbXBvbmVudC5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgIHByZXZEaXNhYmxlZDogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIG5leHREaXNhYmxlZDogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGFycm93UHJldkljb246IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBhcnJvd05leHRJY29uOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgb25QcmV2Q2xpY2s6IFt7IHR5cGU6IGNvcmUuT3V0cHV0IH1dLFxuICAgICAgICAgICAgb25OZXh0Q2xpY2s6IFt7IHR5cGU6IGNvcmUuT3V0cHV0IH1dXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBOZ3hHYWxsZXJ5QXJyb3dzQ29tcG9uZW50O1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAgICAgKiBHZW5lcmF0ZWQgZnJvbTogbmd4LWdhbGxlcnktYnVsbGV0cy5jb21wb25lbnQudHNcbiAgICAgKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXF1aXJlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gICAgICovXG4gICAgdmFyIE5neEdhbGxlcnlCdWxsZXRzQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBOZ3hHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudCgpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gMDtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgY29yZS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlCdWxsZXRzQ29tcG9uZW50LnByb3RvdHlwZS5nZXRCdWxsZXRzID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkodGhpcy5jb3VudCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGV2ZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlCdWxsZXRzQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVDaGFuZ2UgPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBldmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZXZlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgICAgICB9O1xuICAgICAgICBOZ3hHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBjb3JlLkNvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbmd4LWdhbGxlcnktYnVsbGV0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LWJ1bGxldFxcXCIgKm5nRm9yPVxcXCJsZXQgYnVsbGV0IG9mIGdldEJ1bGxldHMoKTsgbGV0IGkgPSBpbmRleDtcXFwiIChjbGljayk9XFxcImhhbmRsZUNoYW5nZSgkZXZlbnQsIGkpXFxcIiBbbmdDbGFzc109XFxcInsgJ25neC1nYWxsZXJ5LWFjdGl2ZSc6IGkgPT0gYWN0aXZlIH1cXFwiPjwvZGl2PlxcbiAgICBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogW1wiOmhvc3QgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDIwMDA7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgYm90dG9tOiAwcHg7IHBhZGRpbmc6IDEwcHg7IH0gLm5neC1nYWxsZXJ5LWJ1bGxldCB7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6IDEwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgY3Vyc29yOiBwb2ludGVyOyBiYWNrZ3JvdW5kOiB3aGl0ZTsgfSAubmd4LWdhbGxlcnktYnVsbGV0Om5vdCg6Zmlyc3QtY2hpbGQpIHsgbWFyZ2luLWxlZnQ6IDVweDsgfSAubmd4LWdhbGxlcnktYnVsbGV0OmhvdmVyLCAubmd4LWdhbGxlcnktYnVsbGV0Lm5neC1nYWxsZXJ5LWFjdGl2ZSB7IGJhY2tncm91bmQ6IGJsYWNrOyB9IFwiXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfVxuICAgICAgICBdO1xuICAgICAgICBOZ3hHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudC5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgIGNvdW50OiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgYWN0aXZlOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgb25DaGFuZ2U6IFt7IHR5cGU6IGNvcmUuT3V0cHV0IH1dXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBOZ3hHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudDtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gICAgICogR2VuZXJhdGVkIGZyb206IG5neC1nYWxsZXJ5LWhlbHBlci5zZXJ2aWNlLnRzXG4gICAgICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGNvbnN0YW50UHJvcGVydHksZXh0cmFSZXF1aXJlLG1pc3NpbmdPdmVycmlkZSxtaXNzaW5nUmVxdWlyZSxtaXNzaW5nUmV0dXJuLHVudXNlZFByaXZhdGVNZW1iZXJzLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICAgICAqL1xuICAgIHZhciBOZ3hHYWxsZXJ5SGVscGVyU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UocmVuZGVyZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuc3dpcGVIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBzdGF0dXNcbiAgICAgICAgICogQHBhcmFtIHs/fSBlbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gaWRcbiAgICAgICAgICogQHBhcmFtIHs/fSBuZXh0SGFuZGxlclxuICAgICAgICAgKiBAcGFyYW0gez99IHByZXZIYW5kbGVyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5SGVscGVyU2VydmljZS5wcm90b3R5cGUubWFuYWdlU3dpcGUgPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBzdGF0dXNcbiAgICAgICAgICogQHBhcmFtIHs/fSBlbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gaWRcbiAgICAgICAgICogQHBhcmFtIHs/fSBuZXh0SGFuZGxlclxuICAgICAgICAgKiBAcGFyYW0gez99IHByZXZIYW5kbGVyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoc3RhdHVzLCBlbGVtZW50LCBpZCwgbmV4dEhhbmRsZXIsIHByZXZIYW5kbGVyKSB7XG4gICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldFN3aXBlSGFuZGxlcnMoaWQpO1xuICAgICAgICAgICAgLy8gc3dpcGVsZWZ0IGFuZCBzd2lwZXJpZ2h0IGFyZSBhdmFpbGFibGUgb25seSBpZiBoYW1tZXJqcyBpcyBpbmNsdWRlZFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzICYmICFoYW5kbGVycykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXBlSGFuZGxlcnMuc2V0KGlkLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzd2lwZWxlZnQnLCAoLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXh0SGFuZGxlcigpOyB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzd2lwZXJpZ2h0JywgKC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJldkhhbmRsZXIoKTsgfSkpXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghc3RhdHVzICYmIGhhbmRsZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLm1hcCgoLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7P30gaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIoKTsgfSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVN3aXBlSGFuZGxlcnMoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdXJsXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5SGVscGVyU2VydmljZS5wcm90b3R5cGUudmFsaWRhdGVVcmwgPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgIGlmICh1cmwucmVwbGFjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cmwucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJyUyMCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcJycsICdnJyksICclMjcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGltYWdlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5SGVscGVyU2VydmljZS5wcm90b3R5cGUuZ2V0QmFja2dyb3VuZFVybCA9IC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGltYWdlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiAndXJsKFxcJycgKyB0aGlzLnZhbGlkYXRlVXJsKGltYWdlKSArICdcXCcpJztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7P30gaWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRTd2lwZUhhbmRsZXJzID0gLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7P30gaWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3dpcGVIYW5kbGVycy5nZXQoaWQpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/fSBpZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UucHJvdG90eXBlLnJlbW92ZVN3aXBlSGFuZGxlcnMgPSAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/fSBpZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICB0aGlzLnN3aXBlSGFuZGxlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfTtcbiAgICAgICAgTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogY29yZS5JbmplY3RhYmxlIH1cbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBjb3JlLlJlbmRlcmVyMiB9XG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBOZ3hHYWxsZXJ5SGVscGVyU2VydmljZTtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gICAgICogR2VuZXJhdGVkIGZyb206IG5neC1nYWxsZXJ5LWFuaW1hdGlvbi5tb2RlbC50c1xuICAgICAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JlcXVpcmUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAgICAgKi9cbiAgICB2YXIgTmd4R2FsbGVyeUFuaW1hdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTmd4R2FsbGVyeUFuaW1hdGlvbigpIHtcbiAgICAgICAgfVxuICAgICAgICBOZ3hHYWxsZXJ5QW5pbWF0aW9uLkZhZGUgPSAnZmFkZSc7XG4gICAgICAgIE5neEdhbGxlcnlBbmltYXRpb24uU2xpZGUgPSAnc2xpZGUnO1xuICAgICAgICBOZ3hHYWxsZXJ5QW5pbWF0aW9uLlJvdGF0ZSA9ICdyb3RhdGUnO1xuICAgICAgICBOZ3hHYWxsZXJ5QW5pbWF0aW9uLlpvb20gPSAnem9vbSc7XG4gICAgICAgIHJldHVybiBOZ3hHYWxsZXJ5QW5pbWF0aW9uO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAgICAgKiBHZW5lcmF0ZWQgZnJvbTogbmd4LWdhbGxlcnktaW1hZ2UuY29tcG9uZW50LnRzXG4gICAgICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGNvbnN0YW50UHJvcGVydHksZXh0cmFSZXF1aXJlLG1pc3NpbmdPdmVycmlkZSxtaXNzaW5nUmVxdWlyZSxtaXNzaW5nUmV0dXJuLHVudXNlZFByaXZhdGVNZW1iZXJzLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICAgICAqL1xuICAgIHZhciBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudChzYW5pdGl6YXRpb24sIGVsZW1lbnRSZWYsIGhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2FuaXRpemF0aW9uID0gc2FuaXRpemF0aW9uO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICAgICAgICAgIHRoaXMuaGVscGVyU2VydmljZSA9IGhlbHBlclNlcnZpY2U7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2sgPSBuZXcgY29yZS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UgPSBuZXcgY29yZS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuY2FuQ2hhbmdlSW1hZ2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXJyb3dzICYmIHRoaXMuYXJyb3dzQXV0b0hpZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1BsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNoYW5nZXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGNoYW5nZXNbJ3N3aXBlJ10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlbHBlclNlcnZpY2UubWFuYWdlU3dpcGUodGhpcy5zd2lwZSwgdGhpcy5lbGVtZW50UmVmLCAnaW1hZ2UnLCAoLyoqXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zaG93TmV4dCgpOyB9KSwgKC8qKlxuICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2hvd1ByZXYoKTsgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudC5wcm90b3R5cGUub25Nb3VzZUVudGVyID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcnJvd3NBdXRvSGlkZSAmJiAhdGhpcy5hcnJvd3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93cyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvUGxheSAmJiB0aGlzLmF1dG9QbGF5UGF1c2VPbkhvdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQucHJvdG90eXBlLm9uTW91c2VMZWF2ZSA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXJyb3dzQXV0b0hpZGUgJiYgdGhpcy5hcnJvd3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1BsYXkgJiYgdGhpcy5hdXRvUGxheVBhdXNlT25Ib3Zlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50LnByb3RvdHlwZS5yZXNldCA9IC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudC5wcm90b3R5cGUuZ2V0SW1hZ2VzID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGF6eUxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ZXNfMSA9IFt0aGlzLnNlbGVjdGVkSW5kZXhdO1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgICAgICB2YXIgcHJldkluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICBpZiAocHJldkluZGV4ID09PSAtMSAmJiB0aGlzLmluZmluaXR5TW92ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleGVzXzEucHVzaCh0aGlzLmltYWdlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJldkluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlc18xLnB1c2gocHJldkluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgICAgIHZhciBuZXh0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5kZXggPT0gdGhpcy5pbWFnZXMubGVuZ3RoICYmIHRoaXMuaW5maW5pdHlNb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ZXNfMS5wdXNoKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0SW5kZXggPCB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlc18xLnB1c2gobmV4dEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzLmZpbHRlcigoLyoqXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHs/fSBpbWdcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gez99IGlcbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpbWcsIGkpIHsgcmV0dXJuIGluZGV4ZXNfMS5pbmRleE9mKGkpICE9IC0xOyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50LnByb3RvdHlwZS5zdGFydEF1dG9QbGF5ID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5zaG93TmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2hvd05leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSwgdGhpcy5hdXRvUGxheUludGVydmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQucHJvdG90eXBlLnN0b3BBdXRvUGxheSA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBldmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXZlbnRcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2thYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoaW5kZXgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQucHJvdG90eXBlLnNob3cgPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zZXRDaGFuZ2VUaW1lb3V0KCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50LnByb3RvdHlwZS5zaG93TmV4dCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FuU2hvd05leHQoKSAmJiB0aGlzLmNhbkNoYW5nZUltYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2hhbmdlVGltZW91dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudC5wcm90b3R5cGUuc2hvd1ByZXYgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhblNob3dQcmV2KCkgJiYgdGhpcy5jYW5DaGFuZ2VJbWFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleC0tO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2hhbmdlVGltZW91dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudC5wcm90b3R5cGUuc2V0Q2hhbmdlVGltZW91dCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY2FuQ2hhbmdlSW1hZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gMTAwMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gTmd4R2FsbGVyeUFuaW1hdGlvbi5TbGlkZVxuICAgICAgICAgICAgICAgIHx8IHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLkZhZGUpIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2FuQ2hhbmdlSW1hZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfSksIHRpbWVvdXQpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudC5wcm90b3R5cGUuY2FuU2hvd05leHQgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluZmluaXR5TW92ZSB8fCB0aGlzLnNlbGVjdGVkSW5kZXggPCB0aGlzLmltYWdlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudC5wcm90b3R5cGUuY2FuU2hvd1ByZXYgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluZmluaXR5TW92ZSB8fCB0aGlzLnNlbGVjdGVkSW5kZXggPiAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbWFnZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50LnByb3RvdHlwZS5nZXRTYWZlVXJsID0gLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW1hZ2VcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemF0aW9uLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh0aGlzLmhlbHBlclNlcnZpY2UuZ2V0QmFja2dyb3VuZFVybChpbWFnZSkpO1xuICAgICAgICB9O1xuICAgICAgICBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogY29yZS5Db21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LWltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmd4LWdhbGxlcnktaW1hZ2Utd3JhcHBlciBuZ3gtZ2FsbGVyeS1hbmltYXRpb24te3thbmltYXRpb259fSBuZ3gtZ2FsbGVyeS1pbWFnZS1zaXplLXt7c2l6ZX19XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuZ3gtZ2FsbGVyeS1pbWFnZVxcXCIgKm5nRm9yPVxcXCJsZXQgaW1hZ2Ugb2YgZ2V0SW1hZ2VzKCk7IGxldCBpID0gaW5kZXg7XFxcIiBbbmdDbGFzc109XFxcInsgJ25neC1nYWxsZXJ5LWFjdGl2ZSc6IHNlbGVjdGVkSW5kZXggPT0gaW1hZ2UuaW5kZXgsICduZ3gtZ2FsbGVyeS1pbmFjdGl2ZS1sZWZ0Jzogc2VsZWN0ZWRJbmRleCA+IGltYWdlLmluZGV4LCAnbmd4LWdhbGxlcnktaW5hY3RpdmUtcmlnaHQnOiBzZWxlY3RlZEluZGV4IDwgaW1hZ2UuaW5kZXgsICduZ3gtZ2FsbGVyeS1jbGlja2FibGUnOiBjbGlja2FibGUgfVxcXCIgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVxcXCJnZXRTYWZlVXJsKGltYWdlLnNyYylcXFwiIChjbGljayk9XFxcImhhbmRsZUNsaWNrKCRldmVudCwgaW1hZ2UuaW5kZXgpXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmd4LWdhbGxlcnktaWNvbnMtd3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0Zvcj1cXFwibGV0IGFjdGlvbiBvZiBhY3Rpb25zXFxcIiBbaWNvbl09XFxcImFjdGlvbi5pY29uXFxcIiBbZGlzYWJsZWRdPVxcXCJhY3Rpb24uZGlzYWJsZWRcXFwiIFt0aXRsZVRleHRdPVxcXCJhY3Rpb24udGl0bGVUZXh0XFxcIiAob25DbGljayk9XFxcImFjdGlvbi5vbkNsaWNrKCRldmVudCwgaW1hZ2UuaW5kZXgpXFxcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LWltYWdlLXRleHRcXFwiICpuZ0lmPVxcXCJzaG93RGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb25zW2ltYWdlLmluZGV4XVxcXCIgW2lubmVySFRNTF09XFxcImRlc2NyaXB0aW9uc1tpbWFnZS5pbmRleF1cXFwiIChjbGljayk9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxuZ3gtZ2FsbGVyeS1idWxsZXRzICpuZ0lmPVxcXCJidWxsZXRzXFxcIiBbY291bnRdPVxcXCJpbWFnZXMubGVuZ3RoXFxcIiBbYWN0aXZlXT1cXFwic2VsZWN0ZWRJbmRleFxcXCIgKG9uQ2hhbmdlKT1cXFwic2hvdygkZXZlbnQpXFxcIj48L25neC1nYWxsZXJ5LWJ1bGxldHM+XFxuICAgICAgICA8bmd4LWdhbGxlcnktYXJyb3dzIGNsYXNzPVxcXCJuZ3gtZ2FsbGVyeS1pbWFnZS1zaXplLXt7c2l6ZX19XFxcIiAqbmdJZj1cXFwiYXJyb3dzXFxcIiAob25QcmV2Q2xpY2spPVxcXCJzaG93UHJldigpXFxcIiAob25OZXh0Q2xpY2spPVxcXCJzaG93TmV4dCgpXFxcIiBbcHJldkRpc2FibGVkXT1cXFwiIWNhblNob3dQcmV2KClcXFwiIFtuZXh0RGlzYWJsZWRdPVxcXCIhY2FuU2hvd05leHQoKVxcXCIgW2Fycm93UHJldkljb25dPVxcXCJhcnJvd1ByZXZJY29uXFxcIiBbYXJyb3dOZXh0SWNvbl09XFxcImFycm93TmV4dEljb25cXFwiPjwvbmd4LWdhbGxlcnktYXJyb3dzPlxcbiAgICBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogW1wiOmhvc3QgeyB3aWR0aDogMTAwJTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gLm5neC1nYWxsZXJ5LWltYWdlLXdyYXBwZXIgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDBweDsgdG9wOiAwcHg7IG92ZXJmbG93OiBoaWRkZW47IH0gLm5neC1nYWxsZXJ5LWltYWdlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMHB4OyB9IC5uZ3gtZ2FsbGVyeS1pbWFnZS5uZ3gtZ2FsbGVyeS1hY3RpdmUgeyB6LWluZGV4OiAxMDAwOyB9IC5uZ3gtZ2FsbGVyeS1pbWFnZS1zaXplLWNvdmVyIC5uZ3gtZ2FsbGVyeS1pbWFnZSB7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH0gLm5neC1nYWxsZXJ5LWltYWdlLXNpemUtY29udGFpbiAubmd4LWdhbGxlcnktaW1hZ2UgeyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH0gLm5neC1nYWxsZXJ5LWFuaW1hdGlvbi1mYWRlIC5uZ3gtZ2FsbGVyeS1pbWFnZSB7IGxlZnQ6IDBweDsgb3BhY2l0eTogMDsgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDsgfSAubmd4LWdhbGxlcnktYW5pbWF0aW9uLWZhZGUgLm5neC1nYWxsZXJ5LWltYWdlLm5neC1nYWxsZXJ5LWFjdGl2ZSB7IG9wYWNpdHk6IDE7IH0gLm5neC1nYWxsZXJ5LWFuaW1hdGlvbi1zbGlkZSAubmd4LWdhbGxlcnktaW1hZ2UgeyB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0OyB9IC5uZ3gtZ2FsbGVyeS1hbmltYXRpb24tc2xpZGUgLm5neC1nYWxsZXJ5LWltYWdlLm5neC1nYWxsZXJ5LWFjdGl2ZSB7IGxlZnQ6IDBweDsgfSAubmd4LWdhbGxlcnktYW5pbWF0aW9uLXNsaWRlIC5uZ3gtZ2FsbGVyeS1pbWFnZS5uZ3gtZ2FsbGVyeS1pbmFjdGl2ZS1sZWZ0IHsgbGVmdDogLTEwMCU7IH0gLm5neC1nYWxsZXJ5LWFuaW1hdGlvbi1zbGlkZSAubmd4LWdhbGxlcnktaW1hZ2Uubmd4LWdhbGxlcnktaW5hY3RpdmUtcmlnaHQgeyBsZWZ0OiAxMDAlOyB9IC5uZ3gtZ2FsbGVyeS1hbmltYXRpb24tcm90YXRlIC5uZ3gtZ2FsbGVyeS1pbWFnZSB7IHRyYW5zaXRpb246IDFzIGVhc2U7IHRyYW5zZm9ybTogc2NhbGUoMy41LCAzLjUpIHJvdGF0ZSg5MGRlZyk7IGxlZnQ6IDBweDsgb3BhY2l0eTogMDsgfSAubmd4LWdhbGxlcnktYW5pbWF0aW9uLXJvdGF0ZSAubmd4LWdhbGxlcnktaW1hZ2Uubmd4LWdhbGxlcnktYWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSByb3RhdGUoMGRlZyk7IG9wYWNpdHk6IDE7IH0gLm5neC1nYWxsZXJ5LWFuaW1hdGlvbi16b29tIC5uZ3gtZ2FsbGVyeS1pbWFnZSB7IHRyYW5zaXRpb246IDFzIGVhc2U7IHRyYW5zZm9ybTogc2NhbGUoMi41LCAyLjUpOyBsZWZ0OiAwcHg7IG9wYWNpdHk6IDA7IH0gLm5neC1nYWxsZXJ5LWFuaW1hdGlvbi16b29tIC5uZ3gtZ2FsbGVyeS1pbWFnZS5uZ3gtZ2FsbGVyeS1hY3RpdmUgeyB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpOyBvcGFjaXR5OiAxOyB9IC5uZ3gtZ2FsbGVyeS1pbWFnZS10ZXh0IHsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTsgcGFkZGluZzogMTBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogMTZweDsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDBweDsgei1pbmRleDogMTA7IH0gXCJdXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9XG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IHBsYXRmb3JtQnJvd3Nlci5Eb21TYW5pdGl6ZXIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogY29yZS5FbGVtZW50UmVmIH0sXG4gICAgICAgICAgICB7IHR5cGU6IE5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlIH1cbiAgICAgICAgXTsgfTtcbiAgICAgICAgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50LnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgaW1hZ2VzOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgY2xpY2thYmxlOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGFycm93czogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGFycm93c0F1dG9IaWRlOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgc3dpcGU6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBhbmltYXRpb246IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBzaXplOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgYXJyb3dQcmV2SWNvbjogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGFycm93TmV4dEljb246IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBhdXRvUGxheTogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGF1dG9QbGF5SW50ZXJ2YWw6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBhdXRvUGxheVBhdXNlT25Ib3ZlcjogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGluZmluaXR5TW92ZTogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGxhenlMb2FkaW5nOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgYWN0aW9uczogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uczogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIHNob3dEZXNjcmlwdGlvbjogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGJ1bGxldHM6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBvbkNsaWNrOiBbeyB0eXBlOiBjb3JlLk91dHB1dCB9XSxcbiAgICAgICAgICAgIG9uQWN0aXZlQ2hhbmdlOiBbeyB0eXBlOiBjb3JlLk91dHB1dCB9XSxcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcjogW3sgdHlwZTogY29yZS5Ib3N0TGlzdGVuZXIsIGFyZ3M6IFsnbW91c2VlbnRlcicsXSB9XSxcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogW3sgdHlwZTogY29yZS5Ib3N0TGlzdGVuZXIsIGFyZ3M6IFsnbW91c2VsZWF2ZScsXSB9XVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50O1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAgICAgKiBHZW5lcmF0ZWQgZnJvbTogbmd4LWdhbGxlcnktb3JkZXIubW9kZWwudHNcbiAgICAgKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXF1aXJlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gICAgICovXG4gICAgdmFyIE5neEdhbGxlcnlPcmRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTmd4R2FsbGVyeU9yZGVyKCkge1xuICAgICAgICB9XG4gICAgICAgIE5neEdhbGxlcnlPcmRlci5Db2x1bW4gPSAxO1xuICAgICAgICBOZ3hHYWxsZXJ5T3JkZXIuUm93ID0gMjtcbiAgICAgICAgTmd4R2FsbGVyeU9yZGVyLlBhZ2UgPSAzO1xuICAgICAgICByZXR1cm4gTmd4R2FsbGVyeU9yZGVyO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAgICAgKiBHZW5lcmF0ZWQgZnJvbTogbmd4LWdhbGxlcnktdGh1bWJuYWlscy5jb21wb25lbnQudHNcbiAgICAgKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXF1aXJlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gICAgICovXG4gICAgdmFyIE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudChzYW5pdGl6YXRpb24sIGVsZW1lbnRSZWYsIGhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2FuaXRpemF0aW9uID0gc2FuaXRpemF0aW9uO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICAgICAgICAgIHRoaXMuaGVscGVyU2VydmljZSA9IGhlbHBlclNlcnZpY2U7XG4gICAgICAgICAgICB0aGlzLm1pblN0b3BJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZlQ2hhbmdlID0gbmV3IGNvcmUuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzWydzZWxlY3RlZEluZGV4J10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5kZXgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFuZ2VzWydzd2lwZSddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWxwZXJTZXJ2aWNlLm1hbmFnZVN3aXBlKHRoaXMuc3dpcGUsIHRoaXMuZWxlbWVudFJlZiwgJ3RodW1ibmFpbHMnLCAoLyoqXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5tb3ZlUmlnaHQoKTsgfSksICgvKipcbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm1vdmVMZWZ0KCk7IH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtYWluaW5nQ291bnRWYWx1ZSA9IHRoaXMuaW1hZ2VzLmxlbmd0aCAtICh0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50LnByb3RvdHlwZS5vbk1vdXNlRW50ZXIgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VlbnRlciA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQucHJvdG90eXBlLm9uTW91c2VMZWF2ZSA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZWVudGVyID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudC5wcm90b3R5cGUucmVzZXQgPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbmRleCgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50LnByb3RvdHlwZS5nZXRJbWFnZXMgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdDb3VudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5zbGljZSgwLCB0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5sYXp5TG9hZGluZyAmJiB0aGlzLm9yZGVyICE9IE5neEdhbGxlcnlPcmRlci5Sb3cpIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgdmFyIHN0b3BJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3JkZXIgPT09IE5neEdhbGxlcnlPcmRlci5Db2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcEluZGV4ID0gKHRoaXMuaW5kZXggKyB0aGlzLmNvbHVtbnMgKyB0aGlzLm1vdmVTaXplKSAqIHRoaXMucm93cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5vcmRlciA9PT0gTmd4R2FsbGVyeU9yZGVyLlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcEluZGV4ID0gdGhpcy5pbmRleCArICgodGhpcy5jb2x1bW5zICogdGhpcy5yb3dzKSAqIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RvcEluZGV4IDw9IHRoaXMubWluU3RvcEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3BJbmRleCA9IHRoaXMubWluU3RvcEluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taW5TdG9wSW5kZXggPSBzdG9wSW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5zbGljZSgwLCBzdG9wSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBldmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudC5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBldmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZXZlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzTGluayhpbmRleCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWN0aXZlQ2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudC5wcm90b3R5cGUuaGFzTGluayA9IC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpbmtzICYmIHRoaXMubGlua3MubGVuZ3RoICYmIHRoaXMubGlua3NbaW5kZXhdKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50LnByb3RvdHlwZS5tb3ZlUmlnaHQgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbk1vdmVSaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0aGlzLm1vdmVTaXplO1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgICAgICB2YXIgbWF4SW5kZXggPSB0aGlzLmdldE1heEluZGV4KCkgLSB0aGlzLmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPiBtYXhJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gbWF4SW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGh1bWJuYWlsc1Bvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQucHJvdG90eXBlLm1vdmVMZWZ0ID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlTGVmdCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCAtPSB0aGlzLm1vdmVTaXplO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaHVtYm5haWxzUG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudC5wcm90b3R5cGUuY2FuTW92ZVJpZ2h0ID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmRleCArIHRoaXMuY29sdW1ucyA8IHRoaXMuZ2V0TWF4SW5kZXgoKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudC5wcm90b3R5cGUuY2FuTW92ZUxlZnQgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZGV4ICE9PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQucHJvdG90eXBlLmdldFRodW1ibmFpbExlZnQgPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICB2YXIgY2FsY3VsYXRlZEluZGV4O1xuICAgICAgICAgICAgaWYgKHRoaXMub3JkZXIgPT09IE5neEdhbGxlcnlPcmRlci5Db2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5yb3dzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMub3JkZXIgPT09IE5neEdhbGxlcnlPcmRlci5QYWdlKSB7XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlZEluZGV4ID0gKGluZGV4ICUgdGhpcy5jb2x1bW5zKSArIChNYXRoLmZsb29yKGluZGV4IC8gKHRoaXMucm93cyAqIHRoaXMuY29sdW1ucykpICogdGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMub3JkZXIgPT0gTmd4R2FsbGVyeU9yZGVyLlJvdyAmJiB0aGlzLnJlbWFpbmluZ0NvdW50KSB7XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlZEluZGV4ID0gaW5kZXggJSB0aGlzLmNvbHVtbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkSW5kZXggPSBpbmRleCAlIE1hdGguY2VpbCh0aGlzLmltYWdlcy5sZW5ndGggLyB0aGlzLnJvd3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGh1bWJuYWlsUG9zaXRpb24oY2FsY3VsYXRlZEluZGV4LCB0aGlzLmNvbHVtbnMpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQucHJvdG90eXBlLmdldFRodW1ibmFpbFRvcCA9IC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgIHZhciBjYWxjdWxhdGVkSW5kZXg7XG4gICAgICAgICAgICBpZiAodGhpcy5vcmRlciA9PT0gTmd4R2FsbGVyeU9yZGVyLkNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRJbmRleCA9IGluZGV4ICUgdGhpcy5yb3dzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5vcmRlciA9PT0gTmd4R2FsbGVyeU9yZGVyLlBhZ2UpIHtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5jb2x1bW5zKSAtIChNYXRoLmZsb29yKGluZGV4IC8gKHRoaXMucm93cyAqIHRoaXMuY29sdW1ucykpICogdGhpcy5yb3dzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMub3JkZXIgPT0gTmd4R2FsbGVyeU9yZGVyLlJvdyAmJiB0aGlzLnJlbWFpbmluZ0NvdW50KSB7XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlZEluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gTWF0aC5jZWlsKHRoaXMuaW1hZ2VzLmxlbmd0aCAvIHRoaXMucm93cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGh1bWJuYWlsUG9zaXRpb24oY2FsY3VsYXRlZEluZGV4LCB0aGlzLnJvd3MpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50LnByb3RvdHlwZS5nZXRUaHVtYm5haWxXaWR0aCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGh1bWJuYWlsRGltZW5zaW9uKHRoaXMuY29sdW1ucyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQucHJvdG90eXBlLmdldFRodW1ibmFpbEhlaWdodCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGh1bWJuYWlsRGltZW5zaW9uKHRoaXMucm93cyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQucHJvdG90eXBlLnNldFRodW1ibmFpbHNQb3NpdGlvbiA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzTGVmdCA9IC0oKDEwMCAvIHRoaXMuY29sdW1ucykgKiB0aGlzLmluZGV4KSArICclJztcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc01hcmdpbkxlZnQgPSAtKCh0aGlzLm1hcmdpbiAtICgoKHRoaXMuY29sdW1ucyAtIDEpXG4gICAgICAgICAgICAgICAgKiB0aGlzLm1hcmdpbikgLyB0aGlzLmNvbHVtbnMpKSAqIHRoaXMuaW5kZXgpICsgJ3B4JztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudC5wcm90b3R5cGUuc2V0RGVmYXVsdFBvc2l0aW9uID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNMZWZ0ID0gJzBweCc7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNNYXJnaW5MZWZ0ID0gJzBweCc7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQucHJvdG90eXBlLmNhblNob3dBcnJvd3MgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbWFpbmluZ0NvdW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hcnJvd3MgJiYgdGhpcy5pbWFnZXMgJiYgdGhpcy5pbWFnZXMubGVuZ3RoID4gdGhpcy5nZXRWaXNpYmxlQ291bnQoKVxuICAgICAgICAgICAgICAgICYmICghdGhpcy5hcnJvd3NBdXRvSGlkZSB8fCB0aGlzLm1vdXNlZW50ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQucHJvdG90eXBlLnZhbGlkYXRlSW5kZXggPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgICAgICB2YXIgbmV3SW5kZXggPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3JkZXIgPT09IE5neEdhbGxlcnlPcmRlci5Db2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBNYXRoLmZsb29yKHRoaXMuc2VsZWN0ZWRJbmRleCAvIHRoaXMucm93cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleCAlIE1hdGguY2VpbCh0aGlzLmltYWdlcy5sZW5ndGggLyB0aGlzLnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXdJbmRleCA8IHRoaXMuaW5kZXggfHwgbmV3SW5kZXggPj0gdGhpcy5pbmRleCArIHRoaXMuY29sdW1ucykge1xuICAgICAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhJbmRleCA9IHRoaXMuZ2V0TWF4SW5kZXgoKSAtIHRoaXMuY29sdW1ucztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IG5ld0luZGV4ID4gbWF4SW5kZXggPyBtYXhJbmRleCA6IG5ld0luZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRodW1ibmFpbHNQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW1hZ2VcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50LnByb3RvdHlwZS5nZXRTYWZlVXJsID0gLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW1hZ2VcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemF0aW9uLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh0aGlzLmhlbHBlclNlcnZpY2UuZ2V0QmFja2dyb3VuZFVybChpbWFnZSkpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcGFyYW0gez99IGNvdW50XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0VGh1bWJuYWlsUG9zaXRpb24gPSAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcGFyYW0gez99IGNvdW50XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoaW5kZXgsIGNvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTYWZlU3R5bGUoJ2NhbGMoJyArICgoMTAwIC8gY291bnQpICogaW5kZXgpICsgJyUgKyAnXG4gICAgICAgICAgICAgICAgKyAoKHRoaXMubWFyZ2luIC0gKCgoY291bnQgLSAxKSAqIHRoaXMubWFyZ2luKSAvIGNvdW50KSkgKiBpbmRleCkgKyAncHgpJyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gez99IGNvdW50XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0VGh1bWJuYWlsRGltZW5zaW9uID0gLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7P30gY291bnRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChjb3VudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWFyZ2luICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2FmZVN0eWxlKCdjYWxjKCcgKyAoMTAwIC8gY291bnQpICsgJyUgLSAnXG4gICAgICAgICAgICAgICAgICAgICsgKCgoY291bnQgLSAxKSAqIHRoaXMubWFyZ2luKSAvIGNvdW50KSArICdweCknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFNhZmVTdHlsZSgnY2FsYygnICsgKDEwMCAvIGNvdW50KSArICclICsgMXB4KScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50LnByb3RvdHlwZS5nZXRNYXhJbmRleCA9IC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3JkZXIgPT0gTmd4R2FsbGVyeU9yZGVyLlBhZ2UpIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgdmFyIG1heEluZGV4ID0gKE1hdGguZmxvb3IodGhpcy5pbWFnZXMubGVuZ3RoIC8gdGhpcy5nZXRWaXNpYmxlQ291bnQoKSkgKiB0aGlzLmNvbHVtbnMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcy5sZW5ndGggJSB0aGlzLmdldFZpc2libGVDb3VudCgpID4gdGhpcy5jb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heEluZGV4ICs9IHRoaXMuY29sdW1ucztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1heEluZGV4ICs9IHRoaXMuaW1hZ2VzLmxlbmd0aCAlIHRoaXMuZ2V0VmlzaWJsZUNvdW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtYXhJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5pbWFnZXMubGVuZ3RoIC8gdGhpcy5yb3dzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0VmlzaWJsZUNvdW50ID0gLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW5zICogdGhpcy5yb3dzO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQucHJvdG90eXBlLmdldFNhZmVTdHlsZSA9IC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbml0aXphdGlvbi5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBjb3JlLkNvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbmd4LWdhbGxlcnktdGh1bWJuYWlscycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmd4LWdhbGxlcnktdGh1bWJuYWlscy13cmFwcGVyIG5neC1nYWxsZXJ5LXRodW1ibmFpbC1zaXplLXt7c2l6ZX19XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LXRodW1ibmFpbHNcXFwiIFtzdHlsZS50cmFuc2Zvcm1dPVxcXCIndHJhbnNsYXRlWCgnICsgdGh1bWJuYWlsc0xlZnQgKyAnKSdcXFwiIFtzdHlsZS5tYXJnaW5MZWZ0XT1cXFwidGh1bWJuYWlsc01hcmdpbkxlZnRcXFwiPlxcbiAgICAgICAgICAgIDxhIFtocmVmXT1cXFwiaGFzTGluayhpKSA/IGxpbmtzW2ldIDogJyMnXFxcIiBbdGFyZ2V0XT1cXFwibGlua1RhcmdldFxcXCIgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LXRodW1ibmFpbFxcXCIgKm5nRm9yPVxcXCJsZXQgaW1hZ2Ugb2YgZ2V0SW1hZ2VzKCk7IGxldCBpID0gaW5kZXg7XFxcIiBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XFxcImdldFNhZmVVcmwoaW1hZ2UpXFxcIiAoY2xpY2spPVxcXCJoYW5kbGVDbGljaygkZXZlbnQsIGkpXFxcIiBbc3R5bGUud2lkdGhdPVxcXCJnZXRUaHVtYm5haWxXaWR0aCgpXFxcIiBbc3R5bGUuaGVpZ2h0XT1cXFwiZ2V0VGh1bWJuYWlsSGVpZ2h0KClcXFwiIFtzdHlsZS5sZWZ0XT1cXFwiZ2V0VGh1bWJuYWlsTGVmdChpKVxcXCIgW3N0eWxlLnRvcF09XFxcImdldFRodW1ibmFpbFRvcChpKVxcXCIgW25nQ2xhc3NdPVxcXCJ7ICduZ3gtZ2FsbGVyeS1hY3RpdmUnOiBpID09IHNlbGVjdGVkSW5kZXgsICduZ3gtZ2FsbGVyeS1jbGlja2FibGUnOiBjbGlja2FibGUgfVxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcImxhYmVsc1tpXVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LWljb25zLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1nYWxsZXJ5LWFjdGlvbiAqbmdGb3I9XFxcImxldCBhY3Rpb24gb2YgYWN0aW9uc1xcXCIgW2ljb25dPVxcXCJhY3Rpb24uaWNvblxcXCIgW2Rpc2FibGVkXT1cXFwiYWN0aW9uLmRpc2FibGVkXFxcIiBbdGl0bGVUZXh0XT1cXFwiYWN0aW9uLnRpdGxlVGV4dFxcXCIgKG9uQ2xpY2spPVxcXCJhY3Rpb24ub25DbGljaygkZXZlbnQsIGkpXFxcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LXJlbWFpbmluZy1jb3VudC1vdmVybGF5XFxcIiAqbmdJZj1cXFwicmVtYWluaW5nQ291bnQgJiYgcmVtYWluaW5nQ291bnRWYWx1ZSAmJiAoaSA9PSAocm93cyAqIGNvbHVtbnMpIC0gMSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5neC1nYWxsZXJ5LXJlbWFpbmluZy1jb3VudFxcXCI+K3t7cmVtYWluaW5nQ291bnRWYWx1ZX19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxuZ3gtZ2FsbGVyeS1hcnJvd3MgKm5nSWY9XFxcImNhblNob3dBcnJvd3MoKVxcXCIgKG9uUHJldkNsaWNrKT1cXFwibW92ZUxlZnQoKVxcXCIgKG9uTmV4dENsaWNrKT1cXFwibW92ZVJpZ2h0KClcXFwiIFtwcmV2RGlzYWJsZWRdPVxcXCIhY2FuTW92ZUxlZnQoKVxcXCIgW25leHREaXNhYmxlZF09XFxcIiFjYW5Nb3ZlUmlnaHQoKVxcXCIgW2Fycm93UHJldkljb25dPVxcXCJhcnJvd1ByZXZJY29uXFxcIiBbYXJyb3dOZXh0SWNvbl09XFxcImFycm93TmV4dEljb25cXFwiPjwvbmd4LWdhbGxlcnktYXJyb3dzPlxcbiAgICBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogW1wiOmhvc3QgeyB3aWR0aDogMTAwJTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gLm5neC1nYWxsZXJ5LXRodW1ibmFpbHMtd3JhcHBlciB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgb3ZlcmZsb3c6IGhpZGRlbjsgfSAubmd4LWdhbGxlcnktdGh1bWJuYWlscyB7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMHB4OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0OyB3aWxsLWNoYW5nZTogdHJhbnNmb3JtOyB9IC5uZ3gtZ2FsbGVyeS10aHVtYm5haWxzIC5uZ3gtZ2FsbGVyeS10aHVtYm5haWwgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH0gLm5neC1nYWxsZXJ5LXRodW1ibmFpbC1zaXplLWNvdmVyIC5uZ3gtZ2FsbGVyeS10aHVtYm5haWxzIC5uZ3gtZ2FsbGVyeS10aHVtYm5haWwgeyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9IC5uZ3gtZ2FsbGVyeS10aHVtYm5haWwtc2l6ZS1jb250YWluIC5uZ3gtZ2FsbGVyeS10aHVtYm5haWxzIC5uZ3gtZ2FsbGVyeS10aHVtYm5haWwgeyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH0gLm5neC1nYWxsZXJ5LXJlbWFpbmluZy1jb3VudC1vdmVybGF5IHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwcHg7IHRvcDogMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IH0gLm5neC1nYWxsZXJ5LXJlbWFpbmluZy1jb3VudCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IGNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOiAzMHB4OyB9IFwiXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfVxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IHBsYXRmb3JtQnJvd3Nlci5Eb21TYW5pdGl6ZXIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogY29yZS5FbGVtZW50UmVmIH0sXG4gICAgICAgICAgICB7IHR5cGU6IE5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlIH1cbiAgICAgICAgXTsgfTtcbiAgICAgICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICBpbWFnZXM6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBsaW5rczogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGxhYmVsczogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGxpbmtUYXJnZXQ6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBjb2x1bW5zOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgcm93czogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGFycm93czogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGFycm93c0F1dG9IaWRlOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgbWFyZ2luOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIHN3aXBlOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgc2l6ZTogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGFycm93UHJldkljb246IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBhcnJvd05leHRJY29uOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgbW92ZVNpemU6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBvcmRlcjogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIHJlbWFpbmluZ0NvdW50OiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgbGF6eUxvYWRpbmc6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBhY3Rpb25zOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgb25BY3RpdmVDaGFuZ2U6IFt7IHR5cGU6IGNvcmUuT3V0cHV0IH1dLFxuICAgICAgICAgICAgb25Nb3VzZUVudGVyOiBbeyB0eXBlOiBjb3JlLkhvc3RMaXN0ZW5lciwgYXJnczogWydtb3VzZWVudGVyJyxdIH1dLFxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlOiBbeyB0eXBlOiBjb3JlLkhvc3RMaXN0ZW5lciwgYXJnczogWydtb3VzZWxlYXZlJyxdIH1dXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudDtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gICAgICogR2VuZXJhdGVkIGZyb206IG5neC1nYWxsZXJ5LXByZXZpZXcuY29tcG9uZW50LnRzXG4gICAgICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGNvbnN0YW50UHJvcGVydHksZXh0cmFSZXF1aXJlLG1pc3NpbmdPdmVycmlkZSxtaXNzaW5nUmVxdWlyZSxtaXNzaW5nUmV0dXJuLHVudXNlZFByaXZhdGVNZW1iZXJzLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICAgICAqL1xuICAgIHZhciBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQoc2FuaXRpemF0aW9uLCBlbGVtZW50UmVmLCBoZWxwZXJTZXJ2aWNlLCByZW5kZXJlciwgY2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuc2FuaXRpemF0aW9uID0gc2FuaXRpemF0aW9uO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICAgICAgICAgIHRoaXMuaGVscGVyU2VydmljZSA9IGhlbHBlclNlcnZpY2U7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmID0gY2hhbmdlRGV0ZWN0b3JSZWY7XG4gICAgICAgICAgICB0aGlzLnNob3dTcGlubmVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uTGVmdCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uVG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMuem9vbVZhbHVlID0gMTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVWYWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMub25PcGVuID0gbmV3IGNvcmUuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UgPSBuZXcgY29yZS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UgPSBuZXcgY29yZS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxYID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFkgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsTGVmdCA9IDA7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxUb3AgPSAwO1xuICAgICAgICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXJyb3dzICYmIHRoaXMuYXJyb3dzQXV0b0hpZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzWydzd2lwZSddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWxwZXJTZXJ2aWNlLm1hbmFnZVN3aXBlKHRoaXMuc3dpcGUsIHRoaXMuZWxlbWVudFJlZiwgJ3ByZXZpZXcnLCAoLyoqXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zaG93TmV4dCgpOyB9KSwgKC8qKlxuICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2hvd1ByZXYoKTsgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5RG93bkxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUub25Nb3VzZUVudGVyID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcnJvd3NBdXRvSGlkZSAmJiAhdGhpcy5hcnJvd3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93cyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvdG90eXBlLm9uTW91c2VMZWF2ZSA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXJyb3dzQXV0b0hpZGUgJiYgdGhpcy5hcnJvd3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycm93cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUub25LZXlEb3duID0gLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtleWJvYXJkTmF2aWdhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0tleWJvYXJkUHJldihlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNLZXlib2FyZE5leHQoZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbG9zZU9uRXNjICYmIHRoaXMuaXNLZXlib2FyZEVzYyhlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvdG90eXBlLm9wZW4gPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5vbk9wZW4uZW1pdCgpO1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93KHRydWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9yY2VGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmtleURvd25MaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFwid2luZG93XCIsIFwia2V5ZG93blwiLCAoLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IGVcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5vbktleURvd24oZSk7IH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuY2xvc2UgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5rZXlEb3duTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleURvd25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LnByb3RvdHlwZS5pbWFnZU1vdXNlRW50ZXIgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXlQYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LnByb3RvdHlwZS5pbWFnZU1vdXNlTGVhdmUgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXlQYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuc3RhcnRBdXRvUGxheSA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9QbGF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoLyoqXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuc2hvd05leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNob3dOZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgdGhpcy5hdXRvUGxheUludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuc3RvcEF1dG9QbGF5ID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LnByb3RvdHlwZS5zaG93QXRJbmRleCA9IC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LnByb3RvdHlwZS5zaG93TmV4dCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FuU2hvd05leHQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbmRleCA9PT0gdGhpcy5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuc2hvd1ByZXYgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhblNob3dQcmV2KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4LS07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLmltYWdlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuY2FuU2hvd05leHQgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluZmluaXR5TW92ZSB8fCB0aGlzLmluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuY2FuU2hvd1ByZXYgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluZmluaXR5TW92ZSB8fCB0aGlzLmluZGV4ID4gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUubWFuYWdlRnVsbHNjcmVlbiA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZnVsbHNjcmVlbiB8fCB0aGlzLmZvcmNlRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgICAgICB2YXIgZG9jID0gKC8qKiBAdHlwZSB7P30gKi8gKGRvY3VtZW50KSk7XG4gICAgICAgICAgICAgICAgaWYgKCFkb2MuZnVsbHNjcmVlbkVsZW1lbnQgJiYgIWRvYy5tb3pGdWxsU2NyZWVuRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAmJiAhZG9jLndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50ICYmICFkb2MubXNGdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5GdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW1hZ2VcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LnByb3RvdHlwZS5nZXRTYWZlVXJsID0gLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW1hZ2VcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGltYWdlLnN1YnN0cigwLCAxMCkgPT09ICdkYXRhOmltYWdlJyA/XG4gICAgICAgICAgICAgICAgaW1hZ2UgOiB0aGlzLnNhbml0aXphdGlvbi5ieXBhc3NTZWN1cml0eVRydXN0VXJsKGltYWdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuem9vbUluID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5ab29tSW4oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuem9vbVZhbHVlICs9IHRoaXMuem9vbVN0ZXA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuem9vbVZhbHVlID4gdGhpcy56b29tTWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbVZhbHVlID0gdGhpcy56b29tTWF4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuem9vbU91dCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FuWm9vbU91dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b29tVmFsdWUgLT0gdGhpcy56b29tU3RlcDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy56b29tVmFsdWUgPCB0aGlzLnpvb21NaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tVmFsdWUgPSB0aGlzLnpvb21NaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnpvb21WYWx1ZSA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUucm90YXRlTGVmdCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVWYWx1ZSAtPSA5MDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUucm90YXRlUmlnaHQgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlVmFsdWUgKz0gOTA7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvdG90eXBlLmdldFRyYW5zZm9ybSA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemF0aW9uLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgnc2NhbGUoJyArIHRoaXMuem9vbVZhbHVlICsgJykgcm90YXRlKCcgKyB0aGlzLnJvdGF0ZVZhbHVlICsgJ2RlZyknKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuY2FuWm9vbUluID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy56b29tVmFsdWUgPCB0aGlzLnpvb21NYXggPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvdG90eXBlLmNhblpvb21PdXQgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnpvb21WYWx1ZSA+IHRoaXMuem9vbU1pbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuY2FuRHJhZ09uWm9vbSA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuem9vbSAmJiB0aGlzLnpvb21WYWx1ZSA+IDE7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LnByb3RvdHlwZS5tb3VzZURvd25IYW5kbGVyID0gLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkRyYWdPblpvb20oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFggPSB0aGlzLmdldENsaWVudFgoZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsWSA9IHRoaXMuZ2V0Q2xpZW50WShlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxMZWZ0ID0gdGhpcy5wb3NpdGlvbkxlZnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsVG9wID0gdGhpcy5wb3NpdGlvblRvcDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUubW91c2VVcEhhbmRsZXIgPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvdG90eXBlLm1vdXNlTW92ZUhhbmRsZXIgPSAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkxlZnQgPSB0aGlzLmluaXRpYWxMZWZ0ICsgKHRoaXMuZ2V0Q2xpZW50WChlKSAtIHRoaXMuaW5pdGlhbFgpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25Ub3AgPSB0aGlzLmluaXRpYWxUb3AgKyAodGhpcy5nZXRDbGllbnRZKGUpIC0gdGhpcy5pbml0aWFsWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gez99IGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LnByb3RvdHlwZS5nZXRDbGllbnRYID0gLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7P30gZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA/IGUudG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/fSBlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0Q2xpZW50WSA9IC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gez99IGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUucmVzZXRQb3NpdGlvbiA9IC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuem9vbSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25MZWZ0ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7P30gZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvdG90eXBlLmlzS2V5Ym9hcmROZXh0ID0gLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7P30gZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmtleUNvZGUgPT09IDM5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/fSBlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5wcm90b3R5cGUuaXNLZXlib2FyZFByZXYgPSAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/fSBlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUua2V5Q29kZSA9PT0gMzcgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gez99IGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LnByb3RvdHlwZS5pc0tleWJvYXJkRXNjID0gLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7P30gZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmtleUNvZGUgPT09IDI3ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LnByb3RvdHlwZS5vcGVuRnVsbHNjcmVlbiA9IC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAoLyoqIEB0eXBlIHs/fSAqLyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvdG90eXBlLmNsb3NlRnVsbHNjcmVlbiA9IC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNGdWxsc2NyZWVuKCkpIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgdmFyIGRvYyA9ICgvKiogQHR5cGUgez99ICovIChkb2N1bWVudCkpO1xuICAgICAgICAgICAgICAgIGlmIChkb2MuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jLmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvYy5tc0V4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvYy5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvYy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvYy5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvYy53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgICAgICAgICBkb2Mud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvdG90eXBlLmlzRnVsbHNjcmVlbiA9IC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgdmFyIGRvYyA9ICgvKiogQHR5cGUgez99ICovIChkb2N1bWVudCkpO1xuICAgICAgICAgICAgcmV0dXJuIGRvYy5mdWxsc2NyZWVuRWxlbWVudCB8fCBkb2Mud2Via2l0RnVsbHNjcmVlbkVsZW1lbnRcbiAgICAgICAgICAgICAgICB8fCBkb2MubW96RnVsbFNjcmVlbkVsZW1lbnQgfHwgZG9jLm1zRnVsbHNjcmVlbkVsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBmaXJzdFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvdG90eXBlLnNob3cgPSAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gZmlyc3RcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChmaXJzdCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmIChmaXJzdCA9PT0gdm9pZCAwKSB7IGZpcnN0ID0gZmFsc2U7IH1cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0b3BBdXRvUGxheSgpO1xuICAgICAgICAgICAgdGhpcy5vbkFjdGl2ZUNoYW5nZS5lbWl0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGZpcnN0IHx8ICF0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKC8qKlxuICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX3Nob3coKTsgfSksIDYwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvdG90eXBlLl9zaG93ID0gLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy56b29tVmFsdWUgPSAxO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVWYWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc3JjID0gdGhpcy5nZXRTYWZlVXJsKCgvKiogQHR5cGUgez99ICovICh0aGlzLmltYWdlc1t0aGlzLmluZGV4XSkpKTtcbiAgICAgICAgICAgIHRoaXMuc3JjSW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb25zW3RoaXMuaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc0xvYWRlZChfdGhpcy5wcmV2aWV3SW1hZ2UubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdGFydEF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMubG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNob3dTcGlubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcmV2aWV3SW1hZ2UubmF0aXZlRWxlbWVudC5vbmxvYWQgPSAoLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zaG93U3Bpbm5lciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJldmlld0ltYWdlLm5hdGl2ZUVsZW1lbnQub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gez99IGltZ1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvdG90eXBlLmlzTG9hZGVkID0gLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW1nXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgICBpZiAoIWltZy5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW1nLm5hdHVyYWxXaWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgaW1nLm5hdHVyYWxXaWR0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBjb3JlLkNvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbmd4LWdhbGxlcnktcHJldmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxuZ3gtZ2FsbGVyeS1hcnJvd3MgKm5nSWY9XFxcImFycm93c1xcXCIgKG9uUHJldkNsaWNrKT1cXFwic2hvd1ByZXYoKVxcXCIgKG9uTmV4dENsaWNrKT1cXFwic2hvd05leHQoKVxcXCIgW3ByZXZEaXNhYmxlZF09XFxcIiFjYW5TaG93UHJldigpXFxcIiBbbmV4dERpc2FibGVkXT1cXFwiIWNhblNob3dOZXh0KClcXFwiIFthcnJvd1ByZXZJY29uXT1cXFwiYXJyb3dQcmV2SWNvblxcXCIgW2Fycm93TmV4dEljb25dPVxcXCJhcnJvd05leHRJY29uXFxcIj48L25neC1nYWxsZXJ5LWFycm93cz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LXByZXZpZXctdG9wXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuZ3gtZ2FsbGVyeS1wcmV2aWV3LWljb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgPG5neC1nYWxsZXJ5LWFjdGlvbiAqbmdGb3I9XFxcImxldCBhY3Rpb24gb2YgYWN0aW9uc1xcXCIgW2ljb25dPVxcXCJhY3Rpb24uaWNvblxcXCIgW2Rpc2FibGVkXT1cXFwiYWN0aW9uLmRpc2FibGVkXFxcIiBbdGl0bGVUZXh0XT1cXFwiYWN0aW9uLnRpdGxlVGV4dFxcXCIgKG9uQ2xpY2spPVxcXCJhY3Rpb24ub25DbGljaygkZXZlbnQsIGluZGV4KVxcXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XFxuICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCJkb3dubG9hZCAmJiBzcmNcXFwiIFtocmVmXT1cXFwic3JjXFxcIiBjbGFzcz1cXFwibmd4LWdhbGxlcnktaWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGRvd25sb2FkPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LWljb24tY29udGVudCB7eyBkb3dubG9hZEljb24gfX1cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0lmPVxcXCJ6b29tXFxcIiBbaWNvbl09XFxcInpvb21PdXRJY29uXFxcIiBbZGlzYWJsZWRdPVxcXCIhY2FuWm9vbU91dCgpXFxcIiAob25DbGljayk9XFxcInpvb21PdXQoKVxcXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XFxuICAgICAgICAgICAgICAgIDxuZ3gtZ2FsbGVyeS1hY3Rpb24gKm5nSWY9XFxcInpvb21cXFwiIFtpY29uXT1cXFwiem9vbUluSWNvblxcXCIgW2Rpc2FibGVkXT1cXFwiIWNhblpvb21JbigpXFxcIiAob25DbGljayk9XFxcInpvb21JbigpXFxcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cXG4gICAgICAgICAgICAgICAgPG5neC1nYWxsZXJ5LWFjdGlvbiAqbmdJZj1cXFwicm90YXRlXFxcIiBbaWNvbl09XFxcInJvdGF0ZUxlZnRJY29uXFxcIiAob25DbGljayk9XFxcInJvdGF0ZUxlZnQoKVxcXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XFxuICAgICAgICAgICAgICAgIDxuZ3gtZ2FsbGVyeS1hY3Rpb24gKm5nSWY9XFxcInJvdGF0ZVxcXCIgW2ljb25dPVxcXCJyb3RhdGVSaWdodEljb25cXFwiIChvbkNsaWNrKT1cXFwicm90YXRlUmlnaHQoKVxcXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XFxuICAgICAgICAgICAgICAgIDxuZ3gtZ2FsbGVyeS1hY3Rpb24gKm5nSWY9XFxcImZ1bGxzY3JlZW5cXFwiIFtpY29uXT1cXFwiJ25neC1nYWxsZXJ5LWZ1bGxzY3JlZW4gJyArIGZ1bGxzY3JlZW5JY29uXFxcIiAob25DbGljayk9XFxcIm1hbmFnZUZ1bGxzY3JlZW4oKVxcXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XFxuICAgICAgICAgICAgICAgIDxuZ3gtZ2FsbGVyeS1hY3Rpb24gW2ljb25dPVxcXCInbmd4LWdhbGxlcnktY2xvc2UgJyArIGNsb3NlSWNvblxcXCIgKG9uQ2xpY2spPVxcXCJjbG9zZSgpXFxcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmd4LXNwaW5uZXItd3JhcHBlciBuZ3gtZ2FsbGVyeS1jZW50ZXJcXFwiIFtjbGFzcy5uZ3gtZ2FsbGVyeS1hY3RpdmVdPVxcXCJzaG93U3Bpbm5lclxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LWljb24gbmd4LWdhbGxlcnktc3Bpbm5lciB7e3NwaW5uZXJJY29ufX1cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5neC1nYWxsZXJ5LXByZXZpZXctd3JhcHBlclxcXCIgKGNsaWNrKT1cXFwiY2xvc2VPbkNsaWNrICYmIGNsb3NlKClcXFwiIChtb3VzZXVwKT1cXFwibW91c2VVcEhhbmRsZXIoJGV2ZW50KVxcXCIgKG1vdXNlbW92ZSk9XFxcIm1vdXNlTW92ZUhhbmRsZXIoJGV2ZW50KVxcXCIgKHRvdWNoZW5kKT1cXFwibW91c2VVcEhhbmRsZXIoJGV2ZW50KVxcXCIgKHRvdWNobW92ZSk9XFxcIm1vdXNlTW92ZUhhbmRsZXIoJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmd4LWdhbGxlcnktcHJldmlldy1pbWctd3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XFxcInNyY1xcXCIgI3ByZXZpZXdJbWFnZSBjbGFzcz1cXFwibmd4LWdhbGxlcnktcHJldmlldy1pbWcgbmd4LWdhbGxlcnktY2VudGVyXFxcIiBbc3JjXT1cXFwic3JjXFxcIiAoY2xpY2spPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiIChtb3VzZWVudGVyKT1cXFwiaW1hZ2VNb3VzZUVudGVyKClcXFwiIChtb3VzZWxlYXZlKT1cXFwiaW1hZ2VNb3VzZUxlYXZlKClcXFwiIChtb3VzZWRvd24pPVxcXCJtb3VzZURvd25IYW5kbGVyKCRldmVudClcXFwiICh0b3VjaHN0YXJ0KT1cXFwibW91c2VEb3duSGFuZGxlcigkZXZlbnQpXFxcIiBbY2xhc3Mubmd4LWdhbGxlcnktYWN0aXZlXT1cXFwiIWxvYWRpbmdcXFwiIFtjbGFzcy5hbmltYXRpb25dPVxcXCJhbmltYXRpb25cXFwiIFtjbGFzcy5uZ3gtZ2FsbGVyeS1ncmFiXT1cXFwiY2FuRHJhZ09uWm9vbSgpXFxcIiBbc3R5bGUudHJhbnNmb3JtXT1cXFwiZ2V0VHJhbnNmb3JtKClcXFwiIFtzdHlsZS5sZWZ0XT1cXFwicG9zaXRpb25MZWZ0ICsgJ3B4J1xcXCIgW3N0eWxlLnRvcF09XFxcInBvc2l0aW9uVG9wICsgJ3B4J1xcXCIvPlxcbiAgICAgICAgICAgICAgICA8bmd4LWdhbGxlcnktYnVsbGV0cyAqbmdJZj1cXFwiYnVsbGV0c1xcXCIgW2NvdW50XT1cXFwiaW1hZ2VzLmxlbmd0aFxcXCIgW2FjdGl2ZV09XFxcImluZGV4XFxcIiAob25DaGFuZ2UpPVxcXCJzaG93QXRJbmRleCgkZXZlbnQpXFxcIj48L25neC1nYWxsZXJ5LWJ1bGxldHM+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmd4LWdhbGxlcnktcHJldmlldy10ZXh0XFxcIiAqbmdJZj1cXFwic2hvd0Rlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uXFxcIiBbaW5uZXJIVE1MXT1cXFwiZGVzY3JpcHRpb25cXFwiIChjbGljayk9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IFtcIjpob3N0KC5uZ3gtZ2FsbGVyeS1hY3RpdmUpIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgcG9zaXRpb246IGZpeGVkOyBsZWZ0OiAwOyB0b3A6IDA7IGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTsgei1pbmRleDogMTAwMDA7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfSA6aG9zdCB7IGRpc3BsYXk6IG5vbmU7IH0gOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeS1hcnJvdyB7IGZvbnQtc2l6ZTogNTBweDsgfSA6aG9zdCA6Om5nLWRlZXAgbmd4LWdhbGxlcnktYnVsbGV0cyB7IGhlaWdodDogNSU7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHBhZGRpbmc6IDBweDsgfSAubmd4LWdhbGxlcnktcHJldmlldy1pbWcgeyBvcGFjaXR5OiAwOyBtYXgtd2lkdGg6IDkwJTsgbWF4LWhlaWdodDogOTAlOyB1c2VyLXNlbGVjdDogbm9uZTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41czsgfSAubmd4LWdhbGxlcnktcHJldmlldy1pbWcuYW5pbWF0aW9uIHsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhciwgdHJhbnNmb3JtIC41czsgfSAubmd4LWdhbGxlcnktcHJldmlldy1pbWcubmd4LWdhbGxlcnktYWN0aXZlIHsgb3BhY2l0eTogMTsgfSAubmd4LWdhbGxlcnktcHJldmlldy1pbWcubmd4LWdhbGxlcnktZ3JhYiB7IGN1cnNvcjogZ3JhYjsgY3Vyc29yOiAtd2Via2l0LWdyYWI7IH0gLm5neC1nYWxsZXJ5LWljb24ubmd4LWdhbGxlcnktc3Bpbm5lciB7IGZvbnQtc2l6ZTogNTBweDsgbGVmdDogMDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9IDpob3N0IDo6bmctZGVlcCAubmd4LWdhbGxlcnktcHJldmlldy10b3AgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyB1c2VyLXNlbGVjdDogbm9uZTsgfSA6aG9zdCA6Om5nLWRlZXAgLm5neC1nYWxsZXJ5LXByZXZpZXctaWNvbnMgeyBmbG9hdDogcmlnaHQ7IH0gOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeS1wcmV2aWV3LWljb25zIC5uZ3gtZ2FsbGVyeS1pY29uIHsgcG9zaXRpb246IHJlbGF0aXZlOyBtYXJnaW4tcmlnaHQ6IDEwcHg7IG1hcmdpbi10b3A6IDEwcHg7IGZvbnQtc2l6ZTogMjVweDsgY3Vyc29yOiBwb2ludGVyOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH0gOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeS1wcmV2aWV3LWljb25zIC5uZ3gtZ2FsbGVyeS1pY29uLm5neC1nYWxsZXJ5LWljb24tZGlzYWJsZWQgeyBjdXJzb3I6IGRlZmF1bHQ7IG9wYWNpdHk6IDAuNDsgfSAubmd4LXNwaW5uZXItd3JhcHBlciB7IHdpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7IGRpc3BsYXk6IG5vbmU7IH0gLm5neC1zcGlubmVyLXdyYXBwZXIubmd4LWdhbGxlcnktYWN0aXZlIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9IC5uZ3gtZ2FsbGVyeS1jZW50ZXIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IG1hcmdpbjogYXV0bzsgdG9wOiAwOyB9IC5uZ3gtZ2FsbGVyeS1wcmV2aWV3LXRleHQgeyB3aWR0aDogMTAwJTsgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpOyBwYWRkaW5nOiAxMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOiAxNnB4OyBmbGV4OiAwIDEgYXV0bzsgei1pbmRleDogMTA7IH0gLm5neC1nYWxsZXJ5LXByZXZpZXctd3JhcHBlciB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uOyB9IC5uZ3gtZ2FsbGVyeS1wcmV2aWV3LWltZy13cmFwcGVyIHsgZmxleDogMSAxIGF1dG87IHBvc2l0aW9uOiByZWxhdGl2ZTsgfSBcIl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH1cbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBwbGF0Zm9ybUJyb3dzZXIuRG9tU2FuaXRpemVyIH0sXG4gICAgICAgICAgICB7IHR5cGU6IGNvcmUuRWxlbWVudFJlZiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBOZ3hHYWxsZXJ5SGVscGVyU2VydmljZSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBjb3JlLlJlbmRlcmVyMiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBjb3JlLkNoYW5nZURldGVjdG9yUmVmIH1cbiAgICAgICAgXTsgfTtcbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICBpbWFnZXM6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbnM6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBzaG93RGVzY3JpcHRpb246IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBhcnJvd3M6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBhcnJvd3NBdXRvSGlkZTogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIHN3aXBlOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGZvcmNlRnVsbHNjcmVlbjogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGNsb3NlT25Fc2M6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBrZXlib2FyZE5hdmlnYXRpb246IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBhcnJvd1ByZXZJY29uOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgYXJyb3dOZXh0SWNvbjogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGNsb3NlSWNvbjogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5JY29uOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgc3Bpbm5lckljb246IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBhdXRvUGxheTogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGF1dG9QbGF5SW50ZXJ2YWw6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBhdXRvUGxheVBhdXNlT25Ib3ZlcjogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIGluZmluaXR5TW92ZTogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIHpvb206IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICB6b29tU3RlcDogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIHpvb21NYXg6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICB6b29tTWluOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgem9vbUluSWNvbjogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIHpvb21PdXRJY29uOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgYWN0aW9uczogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIHJvdGF0ZTogW3sgdHlwZTogY29yZS5JbnB1dCB9XSxcbiAgICAgICAgICAgIHJvdGF0ZUxlZnRJY29uOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgcm90YXRlUmlnaHRJY29uOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgZG93bmxvYWQ6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBkb3dubG9hZEljb246IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBidWxsZXRzOiBbeyB0eXBlOiBjb3JlLklucHV0IH1dLFxuICAgICAgICAgICAgb25PcGVuOiBbeyB0eXBlOiBjb3JlLk91dHB1dCB9XSxcbiAgICAgICAgICAgIG9uQ2xvc2U6IFt7IHR5cGU6IGNvcmUuT3V0cHV0IH1dLFxuICAgICAgICAgICAgb25BY3RpdmVDaGFuZ2U6IFt7IHR5cGU6IGNvcmUuT3V0cHV0IH1dLFxuICAgICAgICAgICAgcHJldmlld0ltYWdlOiBbeyB0eXBlOiBjb3JlLlZpZXdDaGlsZCwgYXJnczogWydwcmV2aWV3SW1hZ2UnLF0gfV0sXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI6IFt7IHR5cGU6IGNvcmUuSG9zdExpc3RlbmVyLCBhcmdzOiBbJ21vdXNlZW50ZXInLF0gfV0sXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU6IFt7IHR5cGU6IGNvcmUuSG9zdExpc3RlbmVyLCBhcmdzOiBbJ21vdXNlbGVhdmUnLF0gfV1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50O1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAgICAgKiBHZW5lcmF0ZWQgZnJvbTogbmd4LWdhbGxlcnktaW1hZ2Utc2l6ZS5tb2RlbC50c1xuICAgICAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JlcXVpcmUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAgICAgKi9cbiAgICB2YXIgTmd4R2FsbGVyeUltYWdlU2l6ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTmd4R2FsbGVyeUltYWdlU2l6ZSgpIHtcbiAgICAgICAgfVxuICAgICAgICBOZ3hHYWxsZXJ5SW1hZ2VTaXplLkNvdmVyID0gJ2NvdmVyJztcbiAgICAgICAgTmd4R2FsbGVyeUltYWdlU2l6ZS5Db250YWluID0gJ2NvbnRhaW4nO1xuICAgICAgICByZXR1cm4gTmd4R2FsbGVyeUltYWdlU2l6ZTtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gICAgICogR2VuZXJhdGVkIGZyb206IG5neC1nYWxsZXJ5LWxheW91dC5tb2RlbC50c1xuICAgICAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JlcXVpcmUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAgICAgKi9cbiAgICB2YXIgTmd4R2FsbGVyeUxheW91dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTmd4R2FsbGVyeUxheW91dCgpIHtcbiAgICAgICAgfVxuICAgICAgICBOZ3hHYWxsZXJ5TGF5b3V0LlRodW1ibmFpbHNUb3AgPSAndGh1bWJuYWlscy10b3AnO1xuICAgICAgICBOZ3hHYWxsZXJ5TGF5b3V0LlRodW1ibmFpbHNCb3R0b20gPSAndGh1bWJuYWlscy1ib3R0b20nO1xuICAgICAgICByZXR1cm4gTmd4R2FsbGVyeUxheW91dDtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gICAgICogR2VuZXJhdGVkIGZyb206IG5neC1nYWxsZXJ5LWFjdGlvbi5tb2RlbC50c1xuICAgICAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JlcXVpcmUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAgICAgKi9cbiAgICB2YXIgTmd4R2FsbGVyeUFjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTmd4R2FsbGVyeUFjdGlvbihhY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IGFjdGlvbi5pY29uO1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGFjdGlvbi5kaXNhYmxlZCA/IGFjdGlvbi5kaXNhYmxlZCA6IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50aXRsZVRleHQgPSBhY3Rpb24udGl0bGVUZXh0ID8gYWN0aW9uLnRpdGxlVGV4dCA6ICcnO1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrID0gYWN0aW9uLm9uQ2xpY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5neEdhbGxlcnlBY3Rpb247XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICAgICAqIEdlbmVyYXRlZCBmcm9tOiBuZ3gtZ2FsbGVyeS1vcHRpb25zLm1vZGVsLnRzXG4gICAgICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGNvbnN0YW50UHJvcGVydHksZXh0cmFSZXF1aXJlLG1pc3NpbmdPdmVycmlkZSxtaXNzaW5nUmVxdWlyZSxtaXNzaW5nUmV0dXJuLHVudXNlZFByaXZhdGVNZW1iZXJzLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICAgICAqL1xuICAgIHZhciBOZ3hHYWxsZXJ5T3B0aW9ucyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTmd4R2FsbGVyeU9wdGlvbnMob2JqKSB7XG4gICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICB2YXIgcHJldmVudERlZmF1bHRzID0gb2JqLmJyZWFrcG9pbnQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHRlbXBsYXRlIFRcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gc291cmNlXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IGRlZmF1bHRWYWx1ZVxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gdXNlKHNvdXJjZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiAoc291cmNlICE9PSB1bmRlZmluZWQgfHwgcHJldmVudERlZmF1bHRzKSA/IHNvdXJjZSA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IHVzZShvYmouYnJlYWtwb2ludCwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB1c2Uob2JqLndpZHRoLCAnNTAwcHgnKTtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdXNlKG9iai5oZWlnaHQsICc0MDBweCcpO1xuICAgICAgICAgICAgdGhpcy5mdWxsV2lkdGggPSB1c2Uob2JqLmZ1bGxXaWR0aCwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQgPSB1c2Uob2JqLmxheW91dCwgTmd4R2FsbGVyeUxheW91dC5UaHVtYm5haWxzQm90dG9tKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IHVzZShvYmouc3RhcnRJbmRleCwgMCk7XG4gICAgICAgICAgICB0aGlzLmxpbmtUYXJnZXQgPSB1c2Uob2JqLmxpbmtUYXJnZXQsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIHRoaXMubGF6eUxvYWRpbmcgPSB1c2Uob2JqLmxhenlMb2FkaW5nLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSB1c2Uob2JqLmltYWdlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VQZXJjZW50ID0gdXNlKG9iai5pbWFnZVBlcmNlbnQsIDc1KTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VBcnJvd3MgPSB1c2Uob2JqLmltYWdlQXJyb3dzLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VBcnJvd3NBdXRvSGlkZSA9IHVzZShvYmouaW1hZ2VBcnJvd3NBdXRvSGlkZSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZVN3aXBlID0gdXNlKG9iai5pbWFnZVN3aXBlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmltYWdlQW5pbWF0aW9uID0gdXNlKG9iai5pbWFnZUFuaW1hdGlvbiwgTmd4R2FsbGVyeUFuaW1hdGlvbi5GYWRlKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTaXplID0gdXNlKG9iai5pbWFnZVNpemUsIE5neEdhbGxlcnlJbWFnZVNpemUuQ292ZXIpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZUF1dG9QbGF5ID0gdXNlKG9iai5pbWFnZUF1dG9QbGF5LCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmltYWdlQXV0b1BsYXlJbnRlcnZhbCA9IHVzZShvYmouaW1hZ2VBdXRvUGxheUludGVydmFsLCAyMDAwKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VBdXRvUGxheVBhdXNlT25Ib3ZlciA9IHVzZShvYmouaW1hZ2VBdXRvUGxheVBhdXNlT25Ib3ZlciwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZUluZmluaXR5TW92ZSA9IHVzZShvYmouaW1hZ2VJbmZpbml0eU1vdmUsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChvYmogJiYgb2JqLmltYWdlQWN0aW9ucyAmJiBvYmouaW1hZ2VBY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG9iai5pbWFnZUFjdGlvbnMgPSBvYmouaW1hZ2VBY3Rpb25zLm1hcCgoLyoqXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHs/fSBhY3Rpb25cbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIG5ldyBOZ3hHYWxsZXJ5QWN0aW9uKGFjdGlvbik7IH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW1hZ2VBY3Rpb25zID0gdXNlKG9iai5pbWFnZUFjdGlvbnMsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VEZXNjcmlwdGlvbiA9IHVzZShvYmouaW1hZ2VEZXNjcmlwdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZUJ1bGxldHMgPSB1c2Uob2JqLmltYWdlQnVsbGV0cywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzID0gdXNlKG9iai50aHVtYm5haWxzLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc0NvbHVtbnMgPSB1c2Uob2JqLnRodW1ibmFpbHNDb2x1bW5zLCA0KTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1Jvd3MgPSB1c2Uob2JqLnRodW1ibmFpbHNSb3dzLCAxKTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc1BlcmNlbnQgPSB1c2Uob2JqLnRodW1ibmFpbHNQZXJjZW50LCAyNSk7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNNYXJnaW4gPSB1c2Uob2JqLnRodW1ibmFpbHNNYXJnaW4sIDEwKTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc0Fycm93cyA9IHVzZShvYmoudGh1bWJuYWlsc0Fycm93cywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNBcnJvd3NBdXRvSGlkZSA9IHVzZShvYmoudGh1bWJuYWlsc0Fycm93c0F1dG9IaWRlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNTd2lwZSA9IHVzZShvYmoudGh1bWJuYWlsc1N3aXBlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNNb3ZlU2l6ZSA9IHVzZShvYmoudGh1bWJuYWlsc01vdmVTaXplLCAxKTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc09yZGVyID0gdXNlKG9iai50aHVtYm5haWxzT3JkZXIsIE5neEdhbGxlcnlPcmRlci5Db2x1bW4pO1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzUmVtYWluaW5nQ291bnQgPSB1c2Uob2JqLnRodW1ibmFpbHNSZW1haW5pbmdDb3VudCwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzQXNMaW5rcyA9IHVzZShvYmoudGh1bWJuYWlsc0FzTGlua3MsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsc0F1dG9IaWRlID0gdXNlKG9iai50aHVtYm5haWxzQXV0b0hpZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsTWFyZ2luID0gdXNlKG9iai50aHVtYm5haWxNYXJnaW4sIDEwKTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsU2l6ZSA9IHVzZShvYmoudGh1bWJuYWlsU2l6ZSwgTmd4R2FsbGVyeUltYWdlU2l6ZS5Db3Zlcik7XG4gICAgICAgICAgICBpZiAob2JqICYmIG9iai50aHVtYm5haWxBY3Rpb25zICYmIG9iai50aHVtYm5haWxBY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG9iai50aHVtYm5haWxBY3Rpb25zID0gb2JqLnRodW1ibmFpbEFjdGlvbnMubWFwKCgvKipcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gez99IGFjdGlvblxuICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gbmV3IE5neEdhbGxlcnlBY3Rpb24oYWN0aW9uKTsgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxBY3Rpb25zID0gdXNlKG9iai50aHVtYm5haWxBY3Rpb25zLCBbXSk7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXcgPSB1c2Uob2JqLnByZXZpZXcsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3RGVzY3JpcHRpb24gPSB1c2Uob2JqLnByZXZpZXdEZXNjcmlwdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdBcnJvd3MgPSB1c2Uob2JqLnByZXZpZXdBcnJvd3MsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3QXJyb3dzQXV0b0hpZGUgPSB1c2Uob2JqLnByZXZpZXdBcnJvd3NBdXRvSGlkZSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3U3dpcGUgPSB1c2Uob2JqLnByZXZpZXdTd2lwZSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3RnVsbHNjcmVlbiA9IHVzZShvYmoucHJldmlld0Z1bGxzY3JlZW4sIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlld0ZvcmNlRnVsbHNjcmVlbiA9IHVzZShvYmoucHJldmlld0ZvcmNlRnVsbHNjcmVlbiwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3Q2xvc2VPbkNsaWNrID0gdXNlKG9iai5wcmV2aWV3Q2xvc2VPbkNsaWNrLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdDbG9zZU9uRXNjID0gdXNlKG9iai5wcmV2aWV3Q2xvc2VPbkVzYywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3S2V5Ym9hcmROYXZpZ2F0aW9uID0gdXNlKG9iai5wcmV2aWV3S2V5Ym9hcmROYXZpZ2F0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdBbmltYXRpb24gPSB1c2Uob2JqLnByZXZpZXdBbmltYXRpb24sIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3QXV0b1BsYXkgPSB1c2Uob2JqLnByZXZpZXdBdXRvUGxheSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3QXV0b1BsYXlJbnRlcnZhbCA9IHVzZShvYmoucHJldmlld0F1dG9QbGF5SW50ZXJ2YWwsIDIwMDApO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3QXV0b1BsYXlQYXVzZU9uSG92ZXIgPSB1c2Uob2JqLnByZXZpZXdBdXRvUGxheVBhdXNlT25Ib3ZlciwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW5maW5pdHlNb3ZlID0gdXNlKG9iai5wcmV2aWV3SW5maW5pdHlNb3ZlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdab29tID0gdXNlKG9iai5wcmV2aWV3Wm9vbSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3Wm9vbVN0ZXAgPSB1c2Uob2JqLnByZXZpZXdab29tU3RlcCwgMC4xKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlld1pvb21NYXggPSB1c2Uob2JqLnByZXZpZXdab29tTWF4LCAyKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlld1pvb21NaW4gPSB1c2Uob2JqLnByZXZpZXdab29tTWluLCAwLjUpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3Um90YXRlID0gdXNlKG9iai5wcmV2aWV3Um90YXRlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdEb3dubG9hZCA9IHVzZShvYmoucHJldmlld0Rvd25sb2FkLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdDdXN0b20gPSB1c2Uob2JqLnByZXZpZXdDdXN0b20sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdCdWxsZXRzID0gdXNlKG9iai5wcmV2aWV3QnVsbGV0cywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5hcnJvd1ByZXZJY29uID0gdXNlKG9iai5hcnJvd1ByZXZJY29uLCAnZmEgZmEtYXJyb3ctY2lyY2xlLWxlZnQnKTtcbiAgICAgICAgICAgIHRoaXMuYXJyb3dOZXh0SWNvbiA9IHVzZShvYmouYXJyb3dOZXh0SWNvbiwgJ2ZhIGZhLWFycm93LWNpcmNsZS1yaWdodCcpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZUljb24gPSB1c2Uob2JqLmNsb3NlSWNvbiwgJ2ZhIGZhLXRpbWVzLWNpcmNsZScpO1xuICAgICAgICAgICAgdGhpcy5mdWxsc2NyZWVuSWNvbiA9IHVzZShvYmouZnVsbHNjcmVlbkljb24sICdmYSBmYS1hcnJvd3MtYWx0Jyk7XG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJJY29uID0gdXNlKG9iai5zcGlubmVySWNvbiwgJ2ZhIGZhLXNwaW5uZXIgZmEtcHVsc2UgZmEtM3ggZmEtZncnKTtcbiAgICAgICAgICAgIHRoaXMuem9vbUluSWNvbiA9IHVzZShvYmouem9vbUluSWNvbiwgJ2ZhIGZhLXNlYXJjaC1wbHVzJyk7XG4gICAgICAgICAgICB0aGlzLnpvb21PdXRJY29uID0gdXNlKG9iai56b29tT3V0SWNvbiwgJ2ZhIGZhLXNlYXJjaC1taW51cycpO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0SWNvbiA9IHVzZShvYmoucm90YXRlTGVmdEljb24sICdmYSBmYS11bmRvJyk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVJpZ2h0SWNvbiA9IHVzZShvYmoucm90YXRlUmlnaHRJY29uLCAnZmEgZmEtcmVwZWF0Jyk7XG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkSWNvbiA9IHVzZShvYmouZG93bmxvYWRJY29uLCAnZmEgZmEtYXJyb3ctY2lyY2xlLWRvd24nKTtcbiAgICAgICAgICAgIGlmIChvYmogJiYgb2JqLmFjdGlvbnMgJiYgb2JqLmFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgb2JqLmFjdGlvbnMgPSBvYmouYWN0aW9ucy5tYXAoKC8qKlxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7P30gYWN0aW9uXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBuZXcgTmd4R2FsbGVyeUFjdGlvbihhY3Rpb24pOyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSB1c2Uob2JqLmFjdGlvbnMsIFtdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmd4R2FsbGVyeU9wdGlvbnM7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICAgICAqIEdlbmVyYXRlZCBmcm9tOiBuZ3gtZ2FsbGVyeS1vcmRlcmVkLWltYWdlLm1vZGVsLnRzXG4gICAgICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGNvbnN0YW50UHJvcGVydHksZXh0cmFSZXF1aXJlLG1pc3NpbmdPdmVycmlkZSxtaXNzaW5nUmVxdWlyZSxtaXNzaW5nUmV0dXJuLHVudXNlZFByaXZhdGVNZW1iZXJzLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICAgICAqL1xuICAgIHZhciBOZ3hHYWxsZXJ5T3JkZXJlZEltYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBOZ3hHYWxsZXJ5T3JkZXJlZEltYWdlKG9iaikge1xuICAgICAgICAgICAgdGhpcy5zcmMgPSBvYmouc3JjO1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IG9iai5pbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmd4R2FsbGVyeU9yZGVyZWRJbWFnZTtcbiAgICB9KCkpO1xuXG4gICAgdmFyIF9fc3ByZWFkQXJyYXlzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIHZhciBOZ3hHYWxsZXJ5Q29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBOZ3hHYWxsZXJ5Q29tcG9uZW50KG15RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5teUVsZW1lbnQgPSBteUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmltYWdlc1JlYWR5ID0gbmV3IGNvcmUuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSA9IG5ldyBjb3JlLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3T3BlbiA9IG5ldyBjb3JlLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3Q2xvc2UgPSBuZXcgY29yZS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlld0NoYW5nZSA9IG5ldyBjb3JlLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgdGhpcy5vbGRJbWFnZXNMZW5ndGggPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucHJldkJyZWFrcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zLm1hcCgoLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IG9wdFxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKG9wdCkgeyByZXR1cm4gbmV3IE5neEdhbGxlcnlPcHRpb25zKG9wdCk7IH0pKTtcbiAgICAgICAgICAgIHRoaXMuc29ydE9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QnJlYWtwb2ludCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRnVsbFdpZHRoKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9ICgvKiogQHR5cGUgez99ICovICh0aGlzLmN1cnJlbnRPcHRpb25zLnN0YXJ0SW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LnByb3RvdHlwZS5uZ0RvQ2hlY2sgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcyAhPT0gdW5kZWZpbmVkICYmICh0aGlzLmltYWdlcy5sZW5ndGggIT09IHRoaXMub2xkSW1hZ2VzTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHx8ICh0aGlzLmltYWdlcyAhPT0gdGhpcy5vbGRJbWFnZXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbGRJbWFnZXNMZW5ndGggPSB0aGlzLmltYWdlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5vbGRJbWFnZXMgPSB0aGlzLmltYWdlcztcbiAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEltYWdlcygpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcyAmJiB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXNSZWFkeS5lbWl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UucmVzZXQoKC8qKiBAdHlwZSB7P30gKi8gKHRoaXMuY3VycmVudE9wdGlvbnMuc3RhcnRJbmRleCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc0F1dG9IaWRlICYmIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc1xuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmltYWdlcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5pbWFnZUFycm93cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VGh1bWJuYWlscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlDb21wb25lbnQucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0Z1bGxXaWR0aCgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlDb21wb25lbnQucHJvdG90eXBlLm9uUmVzaXplID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zZXRCcmVha3BvaW50KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2QnJlYWtwb2ludCAhPT0gdGhpcy5icmVha3BvaW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRodW1ibmFpbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnVsbFdpZHRoVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mdWxsV2lkdGhUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsV2lkdGhUaW1lb3V0ID0gc2V0VGltZW91dCgoLyoqXG4gICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrRnVsbFdpZHRoKCk7XG4gICAgICAgICAgICAgICAgfSksIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm90b3R5cGUuZ2V0SW1hZ2VIZWlnaHQgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHMpID9cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlUGVyY2VudCArICclJyA6ICcxMDAlJztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LnByb3RvdHlwZS5nZXRUaHVtYm5haWxzSGVpZ2h0ID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjYWxjKCcgKyB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNQZXJjZW50ICsgJyUgLSAnXG4gICAgICAgICAgICAgICAgICAgICsgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzTWFyZ2luICsgJ3B4KSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzEwMCUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlDb21wb25lbnQucHJvdG90eXBlLmdldFRodW1ibmFpbHNNYXJnaW5Ub3AgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMubGF5b3V0ID09PSBOZ3hHYWxsZXJ5TGF5b3V0LlRodW1ibmFpbHNCb3R0b20pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzTWFyZ2luICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnMHB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LnByb3RvdHlwZS5nZXRUaHVtYm5haWxzTWFyZ2luQm90dG9tID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLmxheW91dCA9PT0gTmd4R2FsbGVyeUxheW91dC5UaHVtYm5haWxzVG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc01hcmdpbiArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzBweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LnByb3RvdHlwZS5vcGVuUHJldmlldyA9IC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zLnByZXZpZXdDdXN0b20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLnByZXZpZXdDdXN0b20oaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3Lm9wZW4oaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlDb21wb25lbnQucHJvdG90eXBlLm9uUHJldmlld09wZW4gPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlld09wZW4uZW1pdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2UgJiYgdGhpcy5pbWFnZS5hdXRvUGxheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3RvcEF1dG9QbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm90b3R5cGUub25QcmV2aWV3Q2xvc2UgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlld0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJldmlld0Nsb3NlLmVtaXQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlICYmIHRoaXMuaW1hZ2UuYXV0b1BsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlDb21wb25lbnQucHJvdG90eXBlLnNlbGVjdEZyb21JbWFnZSA9IC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KGluZGV4KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlDb21wb25lbnQucHJvdG90eXBlLnNlbGVjdEZyb21UaHVtYm5haWxzID0gLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QoaW5kZXgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzICYmIHRoaXMuY3VycmVudE9wdGlvbnMucHJldmlld1xuICAgICAgICAgICAgICAgICYmICghdGhpcy5jdXJyZW50T3B0aW9ucy5pbWFnZSB8fCB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNSZW1haW5pbmdDb3VudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5QcmV2aWV3KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LnByb3RvdHlwZS5zaG93ID0gLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QoaW5kZXgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlDb21wb25lbnQucHJvdG90eXBlLnNob3dOZXh0ID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnNob3dOZXh0KCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm90b3R5cGUuc2hvd1ByZXYgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc2hvd1ByZXYoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LnByb3RvdHlwZS5jYW5TaG93TmV4dCA9IC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzICYmIHRoaXMuY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudE9wdGlvbnMuaW1hZ2VJbmZpbml0eU1vdmUgfHwgdGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm90b3R5cGUuY2FuU2hvd1ByZXYgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlSW5maW5pdHlNb3ZlIHx8IHRoaXMuc2VsZWN0ZWRJbmRleCA+IDApID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm90b3R5cGUucHJldmlld1NlbGVjdCA9IC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlld0NoYW5nZS5lbWl0KHsgaW5kZXg6IGluZGV4LCBpbWFnZTogdGhpcy5pbWFnZXNbaW5kZXhdIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlDb21wb25lbnQucHJvdG90eXBlLm1vdmVUaHVtYm5haWxzUmlnaHQgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudGh1Ym1uYWlscy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LnByb3RvdHlwZS5tb3ZlVGh1bWJuYWlsc0xlZnQgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudGh1Ym1uYWlscy5tb3ZlTGVmdCgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5neEdhbGxlcnlDb21wb25lbnQucHJvdG90eXBlLmNhbk1vdmVUaHVtYm5haWxzUmlnaHQgPSAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRodWJtbmFpbHMuY2FuTW92ZVJpZ2h0KCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm90b3R5cGUuY2FuTW92ZVRodW1ibmFpbHNMZWZ0ID0gLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aHVibW5haWxzLmNhbk1vdmVMZWZ0KCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm90b3R5cGUucmVzZXRUaHVtYm5haWxzID0gLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aHVibW5haWxzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVibW5haWxzLnJlc2V0KCgvKiogQHR5cGUgez99ICovICh0aGlzLmN1cnJlbnRPcHRpb25zLnN0YXJ0SW5kZXgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LnByb3RvdHlwZS5zZWxlY3QgPSAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZXNbaW5kZXhdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LnByb3RvdHlwZS5jaGVja0Z1bGxXaWR0aCA9IC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gKC0oZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5pbm5lcldpZHRoKSAvIDIpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LnByb3RvdHlwZS5zZXRJbWFnZXMgPSAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc21hbGxJbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBpbWdcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChpbWcpIHsgcmV0dXJuICgvKiogQHR5cGUgez99ICovIChpbWcuc21hbGwpKTsgfSkpO1xuICAgICAgICAgICAgdGhpcy5tZWRpdW1JbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBpbWdcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gaVxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKGltZywgaSkgeyByZXR1cm4gbmV3IE5neEdhbGxlcnlPcmRlcmVkSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIHNyYzogaW1nLm1lZGl1bSxcbiAgICAgICAgICAgICAgICBpbmRleDogaVxuICAgICAgICAgICAgfSk7IH0pKTtcbiAgICAgICAgICAgIHRoaXMuYmlnSW1hZ2VzID0gdGhpcy5pbWFnZXMubWFwKCgvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gaW1nXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAoaW1nKSB7IHJldHVybiAoLyoqIEB0eXBlIHs/fSAqLyAoaW1nLmJpZykpOyB9KSk7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9ucyA9IHRoaXMuaW1hZ2VzLm1hcCgoLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IGltZ1xuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKGltZykgeyByZXR1cm4gKC8qKiBAdHlwZSB7P30gKi8gKGltZy5kZXNjcmlwdGlvbikpOyB9KSk7XG4gICAgICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5pbWFnZXMubWFwKCgvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gaW1nXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAoaW1nKSB7IHJldHVybiAoLyoqIEB0eXBlIHs/fSAqLyAoaW1nLnVybCkpOyB9KSk7XG4gICAgICAgICAgICB0aGlzLmxhYmVscyA9IHRoaXMuaW1hZ2VzLm1hcCgoLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IGltZ1xuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKGltZykgeyByZXR1cm4gKC8qKiBAdHlwZSB7P30gKi8gKGltZy5sYWJlbCkpOyB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm90b3R5cGUuc2V0QnJlYWtwb2ludCA9IC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5wcmV2QnJlYWtwb2ludCA9IHRoaXMuYnJlYWtwb2ludDtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgIHZhciBicmVha3BvaW50cztcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzID0gdGhpcy5vcHRpb25zLmZpbHRlcigoLyoqXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHs/fSBvcHRcbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIG9wdC5icmVha3BvaW50ID49IHdpbmRvdy5pbm5lcldpZHRoOyB9KSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoLyoqXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHs/fSBvcHRcbiAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIG9wdC5icmVha3BvaW50OyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnJlYWtwb2ludHMgJiYgYnJlYWtwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gYnJlYWtwb2ludHMucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm90b3R5cGUuc29ydE9wdGlvbnMgPSAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IF9fc3ByZWFkQXJyYXlzKHRoaXMub3B0aW9ucy5maWx0ZXIoKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBhXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS5icmVha3BvaW50ID09PSB1bmRlZmluZWQ7IH0pKSwgdGhpcy5vcHRpb25zXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IGFcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLmJyZWFrcG9pbnQgIT09IHVuZGVmaW5lZDsgfSkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSBhXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IGJcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBiLmJyZWFrcG9pbnQgLSBhLmJyZWFrcG9pbnQ7IH0pKSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMgPSBuZXcgTmd4R2FsbGVyeU9wdGlvbnMoe30pO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IG9wdFxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKG9wdCkgeyByZXR1cm4gb3B0LmJyZWFrcG9pbnQgPT09IHVuZGVmaW5lZCB8fCBvcHQuYnJlYWtwb2ludCA+PSBfdGhpcy5icmVha3BvaW50OyB9KSlcbiAgICAgICAgICAgICAgICAubWFwKCgvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gb3B0XG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAob3B0KSB7IHJldHVybiBfdGhpcy5jb21iaW5lT3B0aW9ucyhfdGhpcy5jdXJyZW50T3B0aW9ucywgb3B0KTsgfSkpO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9ICgvKiogQHR5cGUgez99ICovICh0aGlzLmN1cnJlbnRPcHRpb25zLndpZHRoKSk7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9ICgvKiogQHR5cGUgez99ICovICh0aGlzLmN1cnJlbnRPcHRpb25zLmhlaWdodCkpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/fSBmaXJzdFxuICAgICAgICAgKiBAcGFyYW0gez99IHNlY29uZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm90b3R5cGUuY29tYmluZU9wdGlvbnMgPSAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHs/fSBmaXJzdFxuICAgICAgICAgKiBAcGFyYW0gez99IHNlY29uZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNlY29uZCkubWFwKCgvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gdmFsXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBmaXJzdFt2YWxdID0gc2Vjb25kW3ZhbF0gIT09IHVuZGVmaW5lZCA/IHNlY29uZFt2YWxdIDogZmlyc3RbdmFsXTsgfSkpO1xuICAgICAgICB9O1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50LmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IGNvcmUuQ29tcG9uZW50LCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmd4LWdhbGxlcnktbGF5b3V0IHt7Y3VycmVudE9wdGlvbnM/LmxheW91dH19XFxcIj5cXG4gICAgICAgIDxuZ3gtZ2FsbGVyeS1pbWFnZSAqbmdJZj1cXFwiY3VycmVudE9wdGlvbnM/LmltYWdlXFxcIiBbc3R5bGUuaGVpZ2h0XT1cXFwiZ2V0SW1hZ2VIZWlnaHQoKVxcXCIgW2ltYWdlc109XFxcIm1lZGl1bUltYWdlc1xcXCIgW2NsaWNrYWJsZV09XFxcImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3XFxcIiBbc2VsZWN0ZWRJbmRleF09XFxcInNlbGVjdGVkSW5kZXhcXFwiIFthcnJvd3NdPVxcXCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBcnJvd3NcXFwiIFthcnJvd3NBdXRvSGlkZV09XFxcImN1cnJlbnRPcHRpb25zPy5pbWFnZUFycm93c0F1dG9IaWRlXFxcIiBbYXJyb3dQcmV2SWNvbl09XFxcImN1cnJlbnRPcHRpb25zPy5hcnJvd1ByZXZJY29uXFxcIiBbYXJyb3dOZXh0SWNvbl09XFxcImN1cnJlbnRPcHRpb25zPy5hcnJvd05leHRJY29uXFxcIiBbc3dpcGVdPVxcXCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VTd2lwZVxcXCIgW2FuaW1hdGlvbl09XFxcImN1cnJlbnRPcHRpb25zPy5pbWFnZUFuaW1hdGlvblxcXCIgW3NpemVdPVxcXCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VTaXplXFxcIiBbYXV0b1BsYXldPVxcXCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBdXRvUGxheVxcXCIgW2F1dG9QbGF5SW50ZXJ2YWxdPVxcXCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBdXRvUGxheUludGVydmFsXFxcIiBbYXV0b1BsYXlQYXVzZU9uSG92ZXJdPVxcXCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBdXRvUGxheVBhdXNlT25Ib3ZlclxcXCIgW2luZmluaXR5TW92ZV09XFxcImN1cnJlbnRPcHRpb25zPy5pbWFnZUluZmluaXR5TW92ZVxcXCIgIFtsYXp5TG9hZGluZ109XFxcImN1cnJlbnRPcHRpb25zPy5sYXp5TG9hZGluZ1xcXCIgW2FjdGlvbnNdPVxcXCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBY3Rpb25zXFxcIiBbZGVzY3JpcHRpb25zXT1cXFwiZGVzY3JpcHRpb25zXFxcIiBbc2hvd0Rlc2NyaXB0aW9uXT1cXFwiY3VycmVudE9wdGlvbnM/LmltYWdlRGVzY3JpcHRpb25cXFwiIFtidWxsZXRzXT1cXFwiY3VycmVudE9wdGlvbnM/LmltYWdlQnVsbGV0c1xcXCIgKG9uQ2xpY2spPVxcXCJvcGVuUHJldmlldygkZXZlbnQpXFxcIiAob25BY3RpdmVDaGFuZ2UpPVxcXCJzZWxlY3RGcm9tSW1hZ2UoJGV2ZW50KVxcXCI+PC9uZ3gtZ2FsbGVyeS1pbWFnZT5cXG5cXG4gICAgICAgIDxuZ3gtZ2FsbGVyeS10aHVtYm5haWxzICpuZ0lmPVxcXCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc1xcXCIgW3N0eWxlLm1hcmdpblRvcF09XFxcImdldFRodW1ibmFpbHNNYXJnaW5Ub3AoKVxcXCIgW3N0eWxlLm1hcmdpbkJvdHRvbV09XFxcImdldFRodW1ibmFpbHNNYXJnaW5Cb3R0b20oKVxcXCIgW3N0eWxlLmhlaWdodF09XFxcImdldFRodW1ibmFpbHNIZWlnaHQoKVxcXCIgW2ltYWdlc109XFxcInNtYWxsSW1hZ2VzXFxcIiBbbGlua3NdPVxcXCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc0FzTGlua3MgPyBsaW5rcyA6IFtdXFxcIiBbbGFiZWxzXT1cXFwibGFiZWxzXFxcIiBbbGlua1RhcmdldF09XFxcImN1cnJlbnRPcHRpb25zPy5saW5rVGFyZ2V0XFxcIiBbc2VsZWN0ZWRJbmRleF09XFxcInNlbGVjdGVkSW5kZXhcXFwiIFtjb2x1bW5zXT1cXFwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNDb2x1bW5zXFxcIiBbcm93c109XFxcImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzUm93c1xcXCIgW21hcmdpbl09XFxcImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxNYXJnaW5cXFwiIFthcnJvd3NdPVxcXCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc0Fycm93c1xcXCIgW2Fycm93c0F1dG9IaWRlXT1cXFwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNBcnJvd3NBdXRvSGlkZVxcXCIgW2Fycm93UHJldkljb25dPVxcXCJjdXJyZW50T3B0aW9ucz8uYXJyb3dQcmV2SWNvblxcXCIgW2Fycm93TmV4dEljb25dPVxcXCJjdXJyZW50T3B0aW9ucz8uYXJyb3dOZXh0SWNvblxcXCIgW2NsaWNrYWJsZV09XFxcImN1cnJlbnRPcHRpb25zPy5pbWFnZSB8fCBjdXJyZW50T3B0aW9ucz8ucHJldmlld1xcXCIgW3N3aXBlXT1cXFwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNTd2lwZVxcXCIgW3NpemVdPVxcXCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsU2l6ZVxcXCIgW21vdmVTaXplXT1cXFwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNNb3ZlU2l6ZVxcXCIgW29yZGVyXT1cXFwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNPcmRlclxcXCIgW3JlbWFpbmluZ0NvdW50XT1cXFwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNSZW1haW5pbmdDb3VudFxcXCIgW2xhenlMb2FkaW5nXT1cXFwiY3VycmVudE9wdGlvbnM/LmxhenlMb2FkaW5nXFxcIiBbYWN0aW9uc109XFxcImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxBY3Rpb25zXFxcIiAgKG9uQWN0aXZlQ2hhbmdlKT1cXFwic2VsZWN0RnJvbVRodW1ibmFpbHMoJGV2ZW50KVxcXCI+PC9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzPlxcblxcbiAgICAgICAgPG5neC1nYWxsZXJ5LXByZXZpZXcgW2ltYWdlc109XFxcImJpZ0ltYWdlc1xcXCIgW2Rlc2NyaXB0aW9uc109XFxcImRlc2NyaXB0aW9uc1xcXCIgW3Nob3dEZXNjcmlwdGlvbl09XFxcImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3RGVzY3JpcHRpb25cXFwiIFthcnJvd1ByZXZJY29uXT1cXFwiY3VycmVudE9wdGlvbnM/LmFycm93UHJldkljb25cXFwiIFthcnJvd05leHRJY29uXT1cXFwiY3VycmVudE9wdGlvbnM/LmFycm93TmV4dEljb25cXFwiIFtjbG9zZUljb25dPVxcXCJjdXJyZW50T3B0aW9ucz8uY2xvc2VJY29uXFxcIiBbZnVsbHNjcmVlbkljb25dPVxcXCJjdXJyZW50T3B0aW9ucz8uZnVsbHNjcmVlbkljb25cXFwiIFtzcGlubmVySWNvbl09XFxcImN1cnJlbnRPcHRpb25zPy5zcGlubmVySWNvblxcXCIgW2Fycm93c109XFxcImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QXJyb3dzXFxcIiBbYXJyb3dzQXV0b0hpZGVdPVxcXCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Fycm93c0F1dG9IaWRlXFxcIiBbc3dpcGVdPVxcXCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1N3aXBlXFxcIiBbZnVsbHNjcmVlbl09XFxcImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3RnVsbHNjcmVlblxcXCIgW2ZvcmNlRnVsbHNjcmVlbl09XFxcImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Rm9yY2VGdWxsc2NyZWVuXFxcIiBbY2xvc2VPbkNsaWNrXT1cXFwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdDbG9zZU9uQ2xpY2tcXFwiIFtjbG9zZU9uRXNjXT1cXFwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdDbG9zZU9uRXNjXFxcIiBba2V5Ym9hcmROYXZpZ2F0aW9uXT1cXFwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdLZXlib2FyZE5hdmlnYXRpb25cXFwiIFthbmltYXRpb25dPVxcXCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0FuaW1hdGlvblxcXCIgW2F1dG9QbGF5XT1cXFwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdBdXRvUGxheVxcXCIgW2F1dG9QbGF5SW50ZXJ2YWxdPVxcXCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0F1dG9QbGF5SW50ZXJ2YWxcXFwiIFthdXRvUGxheVBhdXNlT25Ib3Zlcl09XFxcImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QXV0b1BsYXlQYXVzZU9uSG92ZXJcXFwiIFtpbmZpbml0eU1vdmVdPVxcXCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0luZmluaXR5TW92ZVxcXCIgW3pvb21dPVxcXCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1pvb21cXFwiIFt6b29tU3RlcF09XFxcImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Wm9vbVN0ZXBcXFwiIFt6b29tTWF4XT1cXFwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdab29tTWF4XFxcIiBbem9vbU1pbl09XFxcImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Wm9vbU1pblxcXCIgW3pvb21Jbkljb25dPVxcXCJjdXJyZW50T3B0aW9ucz8uem9vbUluSWNvblxcXCIgW3pvb21PdXRJY29uXT1cXFwiY3VycmVudE9wdGlvbnM/Lnpvb21PdXRJY29uXFxcIiBbYWN0aW9uc109XFxcImN1cnJlbnRPcHRpb25zPy5hY3Rpb25zXFxcIiBbcm90YXRlXT1cXFwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdSb3RhdGVcXFwiIFtyb3RhdGVMZWZ0SWNvbl09XFxcImN1cnJlbnRPcHRpb25zPy5yb3RhdGVMZWZ0SWNvblxcXCIgW3JvdGF0ZVJpZ2h0SWNvbl09XFxcImN1cnJlbnRPcHRpb25zPy5yb3RhdGVSaWdodEljb25cXFwiIFtkb3dubG9hZF09XFxcImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3RG93bmxvYWRcXFwiIFtkb3dubG9hZEljb25dPVxcXCJjdXJyZW50T3B0aW9ucz8uZG93bmxvYWRJY29uXFxcIiBbYnVsbGV0c109XFxcImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QnVsbGV0c1xcXCIgKG9uQ2xvc2UpPVxcXCJvblByZXZpZXdDbG9zZSgpXFxcIiAob25PcGVuKT1cXFwib25QcmV2aWV3T3BlbigpXFxcIiAob25BY3RpdmVDaGFuZ2UpPVxcXCJwcmV2aWV3U2VsZWN0KCRldmVudClcXFwiIFtjbGFzcy5uZ3gtZ2FsbGVyeS1hY3RpdmVdPVxcXCJwcmV2aWV3RW5hYmxlZFxcXCI+PC9uZ3gtZ2FsbGVyeS1wcmV2aWV3PlxcbiAgICA8L2Rpdj5cXG4gICAgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IFtcIjpob3N0IHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9IDpob3N0ID4gKiB7IGZsb2F0OiBsZWZ0OyB9IDpob3N0IDo6bmctZGVlcCAqIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfSA6aG9zdCA6Om5nLWRlZXAgLm5neC1nYWxsZXJ5LWljb24geyBjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogMjVweDsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAyMDAwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH0gOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeS1pY29uIC5uZ3gtZ2FsbGVyeS1pY29uLWNvbnRlbnQgeyBkaXNwbGF5OiBibG9jazsgfSA6aG9zdCA6Om5nLWRlZXAgLm5neC1nYWxsZXJ5LWNsaWNrYWJsZSB7IGN1cnNvcjogcG9pbnRlcjsgfSA6aG9zdCA6Om5nLWRlZXAgLm5neC1nYWxsZXJ5LWljb25zLXdyYXBwZXIgLm5neC1nYWxsZXJ5LWljb24geyBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi1yaWdodDogNXB4OyBtYXJnaW4tdG9wOiA1cHg7IGZvbnQtc2l6ZTogMjBweDsgY3Vyc29yOiBwb2ludGVyOyB9IDpob3N0IDo6bmctZGVlcCAubmd4LWdhbGxlcnktaWNvbnMtd3JhcHBlciB7IGZsb2F0OiByaWdodDsgfSA6aG9zdCAubmd4LWdhbGxlcnktbGF5b3V0IHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfSA6aG9zdCAubmd4LWdhbGxlcnktbGF5b3V0LnRodW1ibmFpbHMtdG9wIG5neC1nYWxsZXJ5LWltYWdlIHsgb3JkZXI6IDI7IH0gOmhvc3QgLm5neC1nYWxsZXJ5LWxheW91dC50aHVtYm5haWxzLXRvcCBuZ3gtZ2FsbGVyeS10aHVtYm5haWxzIHsgb3JkZXI6IDE7IH0gOmhvc3QgLm5neC1nYWxsZXJ5LWxheW91dC50aHVtYm5haWxzLWJvdHRvbSBuZ3gtZ2FsbGVyeS1pbWFnZSB7IG9yZGVyOiAxOyB9IDpob3N0IC5uZ3gtZ2FsbGVyeS1sYXlvdXQudGh1bWJuYWlscy1ib3R0b20gbmd4LWdhbGxlcnktdGh1bWJuYWlscyB7IG9yZGVyOiAyOyB9IFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW05neEdhbGxlcnlIZWxwZXJTZXJ2aWNlXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfVxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogY29yZS5FbGVtZW50UmVmIH1cbiAgICAgICAgXTsgfTtcbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudC5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBpbWFnZXM6IFt7IHR5cGU6IGNvcmUuSW5wdXQgfV0sXG4gICAgICAgICAgICBpbWFnZXNSZWFkeTogW3sgdHlwZTogY29yZS5PdXRwdXQgfV0sXG4gICAgICAgICAgICBjaGFuZ2U6IFt7IHR5cGU6IGNvcmUuT3V0cHV0IH1dLFxuICAgICAgICAgICAgcHJldmlld09wZW46IFt7IHR5cGU6IGNvcmUuT3V0cHV0IH1dLFxuICAgICAgICAgICAgcHJldmlld0Nsb3NlOiBbeyB0eXBlOiBjb3JlLk91dHB1dCB9XSxcbiAgICAgICAgICAgIHByZXZpZXdDaGFuZ2U6IFt7IHR5cGU6IGNvcmUuT3V0cHV0IH1dLFxuICAgICAgICAgICAgcHJldmlldzogW3sgdHlwZTogY29yZS5WaWV3Q2hpbGQsIGFyZ3M6IFtOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCxdIH1dLFxuICAgICAgICAgICAgaW1hZ2U6IFt7IHR5cGU6IGNvcmUuVmlld0NoaWxkLCBhcmdzOiBbTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50LF0gfV0sXG4gICAgICAgICAgICB0aHVibW5haWxzOiBbeyB0eXBlOiBjb3JlLlZpZXdDaGlsZCwgYXJnczogW05neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50LF0gfV0sXG4gICAgICAgICAgICB3aWR0aDogW3sgdHlwZTogY29yZS5Ib3N0QmluZGluZywgYXJnczogWydzdHlsZS53aWR0aCcsXSB9XSxcbiAgICAgICAgICAgIGhlaWdodDogW3sgdHlwZTogY29yZS5Ib3N0QmluZGluZywgYXJnczogWydzdHlsZS5oZWlnaHQnLF0gfV0sXG4gICAgICAgICAgICBsZWZ0OiBbeyB0eXBlOiBjb3JlLkhvc3RCaW5kaW5nLCBhcmdzOiBbJ3N0eWxlLmxlZnQnLF0gfV0sXG4gICAgICAgICAgICBvblJlc2l6ZTogW3sgdHlwZTogY29yZS5Ib3N0TGlzdGVuZXIsIGFyZ3M6IFsnd2luZG93OnJlc2l6ZScsXSB9XVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTmd4R2FsbGVyeUNvbXBvbmVudDtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gICAgICogR2VuZXJhdGVkIGZyb206IG5neC1nYWxsZXJ5LWltYWdlLm1vZGVsLnRzXG4gICAgICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGNvbnN0YW50UHJvcGVydHksZXh0cmFSZXF1aXJlLG1pc3NpbmdPdmVycmlkZSxtaXNzaW5nUmVxdWlyZSxtaXNzaW5nUmV0dXJuLHVudXNlZFByaXZhdGVNZW1iZXJzLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICAgICAqL1xuICAgIHZhciBOZ3hHYWxsZXJ5SW1hZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE5neEdhbGxlcnlJbWFnZShvYmopIHtcbiAgICAgICAgICAgIHRoaXMuc21hbGwgPSBvYmouc21hbGw7XG4gICAgICAgICAgICB0aGlzLm1lZGl1bSA9IG9iai5tZWRpdW07XG4gICAgICAgICAgICB0aGlzLmJpZyA9IG9iai5iaWc7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gb2JqLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGhpcy51cmwgPSBvYmoudXJsO1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IG9iai5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmd4R2FsbGVyeUltYWdlO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgX19leHRlbmRzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG4gICAgdmFyIEN1c3RvbUhhbW1lckNvbmZpZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEN1c3RvbUhhbW1lckNvbmZpZywgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQ3VzdG9tSGFtbWVyQ29uZmlnKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5vdmVycmlkZXMgPSAoLyoqIEB0eXBlIHs/fSAqLyAoe1xuICAgICAgICAgICAgICAgICdwaW5jaCc6IHsgZW5hYmxlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICdyb3RhdGUnOiB7IGVuYWJsZTogZmFsc2UgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDdXN0b21IYW1tZXJDb25maWc7XG4gICAgfShwbGF0Zm9ybUJyb3dzZXIuSGFtbWVyR2VzdHVyZUNvbmZpZykpO1xuICAgIHZhciBOZ3hHYWxsZXJ5TW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBOZ3hHYWxsZXJ5TW9kdWxlKCkge1xuICAgICAgICB9XG4gICAgICAgIE5neEdhbGxlcnlNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogY29yZS5OZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb24uQ29tbW9uTW9kdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmd4R2FsbGVyeUFjdGlvbkNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZ3hHYWxsZXJ5QXJyb3dzQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5neEdhbGxlcnlCdWxsZXRzQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5neEdhbGxlcnlDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IHBsYXRmb3JtQnJvd3Nlci5IQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBDdXN0b21IYW1tZXJDb25maWcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gTmd4R2FsbGVyeU1vZHVsZTtcbiAgICB9KCkpO1xuXG4gICAgZXhwb3J0cy5DdXN0b21IYW1tZXJDb25maWcgPSBDdXN0b21IYW1tZXJDb25maWc7XG4gICAgZXhwb3J0cy5OZ3hHYWxsZXJ5TW9kdWxlID0gTmd4R2FsbGVyeU1vZHVsZTtcbiAgICBleHBvcnRzLk5neEdhbGxlcnlDb21wb25lbnQgPSBOZ3hHYWxsZXJ5Q29tcG9uZW50O1xuICAgIGV4cG9ydHMuTmd4R2FsbGVyeUFjdGlvbkNvbXBvbmVudCA9IE5neEdhbGxlcnlBY3Rpb25Db21wb25lbnQ7XG4gICAgZXhwb3J0cy5OZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQgPSBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQ7XG4gICAgZXhwb3J0cy5OZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudCA9IE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50O1xuICAgIGV4cG9ydHMuTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQgPSBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudDtcbiAgICBleHBvcnRzLk5neEdhbGxlcnlBcnJvd3NDb21wb25lbnQgPSBOZ3hHYWxsZXJ5QXJyb3dzQ29tcG9uZW50O1xuICAgIGV4cG9ydHMuTmd4R2FsbGVyeUJ1bGxldHNDb21wb25lbnQgPSBOZ3hHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudDtcbiAgICBleHBvcnRzLk5neEdhbGxlcnlPcHRpb25zID0gTmd4R2FsbGVyeU9wdGlvbnM7XG4gICAgZXhwb3J0cy5OZ3hHYWxsZXJ5SW1hZ2UgPSBOZ3hHYWxsZXJ5SW1hZ2U7XG4gICAgZXhwb3J0cy5OZ3hHYWxsZXJ5QW5pbWF0aW9uID0gTmd4R2FsbGVyeUFuaW1hdGlvbjtcbiAgICBleHBvcnRzLk5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlID0gTmd4R2FsbGVyeUhlbHBlclNlcnZpY2U7XG4gICAgZXhwb3J0cy5OZ3hHYWxsZXJ5SW1hZ2VTaXplID0gTmd4R2FsbGVyeUltYWdlU2l6ZTtcbiAgICBleHBvcnRzLk5neEdhbGxlcnlMYXlvdXQgPSBOZ3hHYWxsZXJ5TGF5b3V0O1xuICAgIGV4cG9ydHMuTmd4R2FsbGVyeU9yZGVyID0gTmd4R2FsbGVyeU9yZGVyO1xuICAgIGV4cG9ydHMuTmd4R2FsbGVyeU9yZGVyZWRJbWFnZSA9IE5neEdhbGxlcnlPcmRlcmVkSW1hZ2U7XG4gICAgZXhwb3J0cy5OZ3hHYWxsZXJ5QWN0aW9uID0gTmd4R2FsbGVyeUFjdGlvbjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKTtcbiJdfQ==