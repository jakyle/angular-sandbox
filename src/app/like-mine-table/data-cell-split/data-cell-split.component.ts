import { Component, Input } from '@angular/core';
import { CellSplit } from './cell-split.model';

@Component({
  selector: 'app-data-cell-split',
  templateUrl: './data-cell-split.component.html',
})
export class DataCellSplitComponent {
  direction: 'row' | 'col' = 'col';
  topData: string[] = [];
  bottomData: string[] = [];
  cellSplitData!: CellSplit;
  bottomIsLink!: boolean;
  
  @Input() set cellSplit(data: CellSplit) {
    this.topData = data.topData;
    this.bottomData = data.bottomData;
    this.direction = data.direction;
    this.bottomIsLink = data.bottomIsLink;
    this.cellSplitData = data;
  }
}
