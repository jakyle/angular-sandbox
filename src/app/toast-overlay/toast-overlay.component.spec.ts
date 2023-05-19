import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastOverlayComponent } from './toast-overlay.component';

describe('ToastOverlayComponent', () => {
  let component: ToastOverlayComponent;
  let fixture: ComponentFixture<ToastOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastOverlayComponent]
    });
    fixture = TestBed.createComponent(ToastOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
