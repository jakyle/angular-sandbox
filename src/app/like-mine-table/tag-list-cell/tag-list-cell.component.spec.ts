import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListCellComponent } from './tag-list-cell.component';

describe('TagListCellComponent', () => {
  let component: TagListCellComponent;
  let fixture: ComponentFixture<TagListCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagListCellComponent]
    });
    fixture = TestBed.createComponent(TagListCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
