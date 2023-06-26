import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellFactoryComponent } from './table-cell-factory.component';

describe('TableCellFactoryComponent', () => {
  let component: TableCellFactoryComponent;
  let fixture: ComponentFixture<TableCellFactoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCellFactoryComponent]
    });
    fixture = TestBed.createComponent(TableCellFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
