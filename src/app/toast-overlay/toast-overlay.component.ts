import { Component, HostBinding } from '@angular/core';
import { ToastService } from '../toast.service';
import { map } from 'rxjs';
import { Position } from '../toast';

@Component({
  selector: 'app-toast-overlay',
  templateUrl: './toast-overlay.component.html',
})
export class ToastOverlayComponent {

  // how do we position these pesky toasts? with css grid!
  @HostBinding('class') class = 'w-screen h-screen absolute top-0 left-0 p-4 grid grid-cols-3 overflow-hidden pointer-events-none [&>ul]:flex [&>ul]:overflow-hidden [&>ul]:gap-y-2';

  constructor(private toastService: ToastService) { }

  // we want toasts grouped by position
  toasts$ = this.toastService.toasts$.pipe(map(toasts => ({
    [Position.TOP_LEFT]: toasts.filter(t => t.position === Position.TOP_LEFT),
    [Position.TOP_CENTER]: toasts.filter(t => t.position === Position.TOP_CENTER),
    [Position.TOP_RIGHT]: toasts.filter(t => t.position === Position.TOP_RIGHT),
    [Position.BOTTOM_LEFT]: toasts.filter(t => t.position === Position.BOTTOM_LEFT),
    [Position.BOTTOM_CENTER]: toasts.filter(t => t.position === Position.BOTTOM_CENTER),
    [Position.BOTTOM_RIGHT]: toasts.filter(t => t.position === Position.BOTTOM_RIGHT),
  })));

  // the toast can handle this or the overlay, I personally like to keep my services contained as much as possible, so the toast item can be more generic, ie. dumb.
  destroyToast(id: number) {
    this.toastService.destroyToast(id);
  }
}
