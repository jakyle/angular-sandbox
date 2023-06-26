export class CellSplit {
	constructor(
		public topData: string[],
		public bottomData: string[],
		public direction: 'row' | 'col' = 'col',
		public bottomIsLink: boolean = false
	) { }
}