import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject } from "rxjs";

export class DataSourceObservable<TData> extends DataSource<TData> {

	constructor(
		private getDataFn: (pageIndex: number, pageSize: number) => TData[],
		private pageSize: number
	) {
		super();
	}

	sourceData = new BehaviorSubject<TData[]>([]);
	totalItems: number = 0;


	connect() {
		return this.sourceData.asObservable();
	}

	disconnect() {
		this.sourceData.complete();
	}

	setData(data: TData[]) {
		this.totalItems = data.length;
		this.sourceData.next(data);
	}

	changePageSize(pageSize: number): void {
		this.pageSize = pageSize;
		this.loadData(0); // Reload data for the first page
	}

	loadData(pageIndex: number): void {
		const data = this.getDataFn(pageIndex, this.pageSize);
		this.setData(data);
	}
}