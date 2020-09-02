import { OnInit, DoCheck, ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { NgxGalleryPreviewComponent } from './ngx-gallery-preview.component';
import { NgxGalleryImageComponent } from './ngx-gallery-image.component';
import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails.component';
import { NgxGalleryOptions } from './ngx-gallery-options.model';
import { NgxGalleryImage } from './ngx-gallery-image.model';
import { NgxGalleryOrderedImage } from './ngx-gallery-ordered-image.model';
export declare class NgxGalleryComponent implements OnInit, DoCheck, AfterViewInit {
    private myElement;
    options: NgxGalleryOptions[];
    images: NgxGalleryImage[];
    imagesReady: EventEmitter<any>;
    change: EventEmitter<{
        index: number;
        image: NgxGalleryImage;
    }>;
    previewOpen: EventEmitter<any>;
    previewClose: EventEmitter<any>;
    previewChange: EventEmitter<{
        index: number;
        image: NgxGalleryImage;
    }>;
    smallImages: string[] | SafeResourceUrl[];
    mediumImages: NgxGalleryOrderedImage[];
    bigImages: string[] | SafeResourceUrl[];
    descriptions: string[];
    links: string[];
    labels: string[];
    oldImages: NgxGalleryImage[];
    oldImagesLength: number;
    selectedIndex: number;
    previewEnabled: boolean;
    currentOptions: NgxGalleryOptions;
    private breakpoint;
    private prevBreakpoint;
    private fullWidthTimeout;
    preview: NgxGalleryPreviewComponent;
    image: NgxGalleryImageComponent;
    thubmnails: NgxGalleryThumbnailsComponent;
    width: string;
    height: string;
    left: string;
    constructor(myElement: ElementRef);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    onResize(): void;
    getImageHeight(): string;
    getThumbnailsHeight(): string;
    getThumbnailsMarginTop(): string;
    getThumbnailsMarginBottom(): string;
    openPreview(index: number): void;
    onPreviewOpen(): void;
    onPreviewClose(): void;
    selectFromImage(index: number): void;
    selectFromThumbnails(index: number): void;
    show(index: number): void;
    showNext(): void;
    showPrev(): void;
    canShowNext(): boolean;
    canShowPrev(): boolean;
    previewSelect(index: number): void;
    moveThumbnailsRight(): void;
    moveThumbnailsLeft(): void;
    canMoveThumbnailsRight(): boolean;
    canMoveThumbnailsLeft(): boolean;
    private resetThumbnails;
    private select;
    private checkFullWidth;
    private setImages;
    private setBreakpoint;
    private sortOptions;
    private setOptions;
    private combineOptions;
}
