import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-tag-list-cell',
  template: '<app-tag *ngFor="let tag of tags" [text]="tag"></app-tag>',
})
export class TagListCellComponent {
  @HostBinding('class') class = 'flex flex-wrap gap-1';
  @Input() tags: string[] = [];
}
