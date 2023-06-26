import { Component, HostBinding, Input } from '@angular/core';
import { CellSplit } from '../data-cell-split/cell-split.model';

type CellDataType = string[] | CellSplit | number | string | boolean;

type CellData = {
  type: 'tag-list';
  val: string[];
} | {
  type: 'percentage-circle';
  val: number;
} | {
  type: 'cell-split';
  val: CellSplit;
} | {
  type: 'text';
  val: string;
} | {
  type: 'none';
  val: undefined;
} | {
  type: 'checkbox';
  val: boolean;
}

@Component({
  selector: 'app-table-cell-factory',
  template: `
<ng-container *ngIf="cellData">
  <ng-container [ngSwitch]="cellData.type">
    <p *ngSwitchCase="'text'">{{text}}</p>
    <app-percentage-circle *ngSwitchCase="'percentage-circle'" [percentage]="percentage"></app-percentage-circle>
    <app-data-cell-split *ngSwitchCase="'cell-split'" [cellSplit]="cellSplit"></app-data-cell-split>
    <app-tag-list-cell *ngSwitchCase="'tag-list'" [tags]="tags"></app-tag-list-cell>
    <input *ngSwitchCase="'checkbox'" type="checkbox" />
    <div *ngSwitchCase="'none'" class="w-full h-full flex items-center justify-center">-</div>
  </ng-container>
</ng-container>
`,
})
export class TableCellFactoryComponent {
  @HostBinding('class') class = 'contents';

  cellData!: CellData;

  get percentage(): number {
    return this.cellData.type === 'percentage-circle' ? this.cellData.val : 0;
  }

  get text(): string {
    return this.cellData.type === 'text' ? this.cellData.val : '';
  }

  get cellSplit(): CellSplit {
    return this.cellData.type === 'cell-split' ? this.cellData.val : new CellSplit([], []);
  }

  get tags(): string[] {
    return this.cellData.type === 'tag-list' ? this.cellData.val : [];
  }

  get checkbox(): boolean { 
    return this.cellData.type === 'checkbox' ? this.cellData.val : false;
  }

  @Input() set data(data: CellDataType) {

    if (data instanceof Array) {
      this.cellData = {
        type: 'tag-list',
        val: data,
      }
    }
    else if (typeof data === 'boolean') {
      this.cellData = {
        type: 'checkbox',
        val: data,
      }
    } else if (typeof data === 'number') {
      this.cellData = {
        type: 'percentage-circle',
        val: data,
      }
    } else if (typeof data === 'string') {
      this.cellData = {
        type: 'text',
        val: data,
      }
    } else if (data instanceof CellSplit) {
      this.cellData = {
        type: 'cell-split',
        val: data,
      }
    } else if (data === undefined) {
      this.cellData = {
        type: 'none',
        val: undefined,
      }
    }

  };
}
