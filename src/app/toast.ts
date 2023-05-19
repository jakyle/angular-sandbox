export enum ToastType {
	INFO = 'info',
	SUCCESS = 'success',
	DANGER = 'danger',
	WARNING = 'warning',
}

export enum Position {
	TOP_LEFT = 'top-left',
	TOP_CENTER = 'top-center',
	TOP_RIGHT = 'top-right',
	BOTTOM_LEFT = 'bottom-left',
	BOTTOM_CENTER = 'bottom-center',
	BOTTOM_RIGHT = 'bottom-right',
}

export class Toast {
	constructor(
		public message: string,
		public type: ToastType,
		public duration: number,
		public position: Position,
		public id: number) { }
}
