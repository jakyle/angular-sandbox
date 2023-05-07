import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveFieldComponent } from './recursive-field.component';

describe('RecursiveFieldComponent', () => {
  let component: RecursiveFieldComponent;
  let fixture: ComponentFixture<RecursiveFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursiveFieldComponent]
    });
    fixture = TestBed.createComponent(RecursiveFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
