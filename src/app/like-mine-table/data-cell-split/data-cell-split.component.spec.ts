import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCellSplitComponent } from './data-cell-split.component';

describe('DataCellSplitComponent', () => {
  let component: DataCellSplitComponent;
  let fixture: ComponentFixture<DataCellSplitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataCellSplitComponent]
    });
    fixture = TestBed.createComponent(DataCellSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
