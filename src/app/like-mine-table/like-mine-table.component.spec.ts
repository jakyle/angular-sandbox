import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeMineTableComponent } from './like-mine-table.component';

describe('LikeMineTableComponent', () => {
  let component: LikeMineTableComponent;
  let fixture: ComponentFixture<LikeMineTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeMineTableComponent]
    });
    fixture = TestBed.createComponent(LikeMineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
