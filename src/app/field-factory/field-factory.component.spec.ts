import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFactoryComponent } from './field-factory.component';

describe('FactoryComponent', () => {
  let component: FieldFactoryComponent;
  let fixture: ComponentFixture<FieldFactoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldFactoryComponent]
    });
    fixture = TestBed.createComponent(FieldFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
