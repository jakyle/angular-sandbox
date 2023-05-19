import { Component } from '@angular/core';
import { ToastService } from './toast.service';
import { Position, ToastType } from './toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private toastService: ToastService) { }
  ToastType = ToastType;
  Position = Position;

  emitToast(type: ToastType, position: Position, duration: number, message = 'this is a toast!') {
    this.toastService.addToast(message, type, duration, position);
  }
}
