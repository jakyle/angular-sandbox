import { Component } from '@angular/core';
import { FieldsService } from './fields.service';
import { EditorService } from './editor.service';
import { ToastService } from './toast.service';
import { Position, ToastType } from './toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private fieldsService: FieldsService, private editorService: EditorService, private toastService: ToastService) { }
  fields = this.fieldsService.getFields();
  recursiveFields = this.fieldsService.getRecursiveFields();

  ToastType = ToastType;
  Position = Position;

  html$ = this.editorService.html$;

  emitToast(type: ToastType, position: Position, duration: number, message = 'this is a toast!') {
    this.toastService.addToast(message, type, duration, position);
  }
}
