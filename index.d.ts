// Type definitions for better-scroll 0.4.
// Project: https://ustbhuangyi.github.io/better-scroll/
// Definitions by: Christiaan Rakowski <https://github.com/csrakowski/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface BScrollOptions {
	x?: number;
	y?: number;
	bounce?: boolean;
	bounceLock?: boolean;
	momentum?: boolean;
	lockDirection?: boolean;
	useTransform?: boolean;
	useTransition?: boolean;
	topOffset?: number;
	checkDOMChanges?: boolean;
	handleClick?: boolean;

	// Scrollbar
	hScrollbar?: boolean;
	vScrollbar?: boolean;
	fixedScrollbar?: boolean;
	hideScrollbar?: boolean;
	fadeScrollbar?: boolean;
	scrollbarClass?: string;

	// Zoom
	zoom?: boolean;
	zoomMin?: number;
	zoomMax?: number;
	doubleTapZoom?: number;
	mouseWheel?: boolean;
	wheelAction?: string;
	snap?: string | boolean;
	snapThreshold?: number;

	// New in IScroll 5?
	resizeIndicator?: boolean;
	mouseWheelSpeed?: number;
	startX?: number;
	startY?: number;
	scrollX?: boolean;
	scrollY?: boolean;
	scrollbars?: boolean | string;
	shrinkScrollbars?: string;
	interactiveScrollbars?: boolean;
	releaseScroll?: boolean;
	fadeScrollbars?: boolean;
	directionLockThreshold?: number;

	bounceTime?: number;

	///String or function
	bounceEasing?: string|{ style: string, fn: (k: any) => any };

	preventDefault?: boolean;
	preventDefaultException?: Array<RegExp>|Object;

	HWCompositing?: boolean;

	freeScroll?: boolean;

	resizePolling?: number;
	tap?: boolean;
	click?: boolean;
	invertWheelDirection?: boolean;
	eventPassthrough?: string | boolean;

	// iScroll probe edition
	probeType?: number;

	// Pointer events
	disableMouse?: boolean;
	disablePointer?: boolean;
	disableTouch?: boolean;
}

declare class BScroll {
	constructor (element: string, options?: BScrollOptions);
	constructor (element: HTMLElement, options?: BScrollOptions);

	x: number;
	y: number;

	destroy(): void;
	refresh(): void;
	scrollTo(x: number, y: number, time?: number, relative?: boolean): void;
	scrollToElement(element: string, time?: number): void;
	scrollToElement(element: HTMLElement, time?: number): void;
	scrollToElement(element: HTMLElement, time?: number, offsetX?: number | boolean, offsetY?: number | boolean, easing?: Function): void;
	goToPage(pageX: number, pageY: number, time?: number): void;
	disable(): void;
	enable(): void;
	stop(): void;
	zoom(x: number, y: number, scale: number, time?: number): void;
	isReady(): boolean;

	// Events
	on(type: string, fn: (evt?: any) => void): void;
	off(type: string, fn?: (evt?: any) => void): void;
}

declare module "better-scroll" {
    const betterScroll: {
        new (element: Element | string, options?: BScrollOptions): BScroll;
    };

    export = betterScroll;
}