import { Component, HostBinding } from '@angular/core';
import { ToastService } from '../toast.service';
import { map } from 'rxjs';
import { Position } from '../toast';

@Component({
  selector: 'app-toast-overlay',
  templateUrl: './toast-overlay.component.html',
})
export class ToastOverlayComponent {
  @HostBinding('class') class = 'absolute top-0 left-0 p-4 pointer-events-none w-screen h-screen grid grid-cols-3 [&>ul]:flex [&>ul]:overflow-hidden [&>ul]:gap-y-2 [&>ul]:relative overflow-hidden';
  constructor(private toastService: ToastService) { }
  toasts$ = this.toastService.toasts$.pipe(map(toasts => ({
    [Position.TOP_LEFT]: toasts.filter(t => t.position === Position.TOP_LEFT),
    [Position.TOP_CENTER]: toasts.filter(t => t.position === Position.TOP_CENTER),
    [Position.TOP_RIGHT]: toasts.filter(t => t.position === Position.TOP_RIGHT),
    [Position.BOTTOM_LEFT]: toasts.filter(t => t.position === Position.BOTTOM_LEFT),
    [Position.BOTTOM_CENTER]: toasts.filter(t => t.position === Position.BOTTOM_CENTER),
    [Position.BOTTOM_RIGHT]: toasts.filter(t => t.position === Position.BOTTOM_RIGHT),
  })));

  destroyToast(id: number) {
    this.toastService.destroyToast(id);
  }
}
