import { Component, Input } from '@angular/core';
import { Field, RecursiveField } from '../models/Field.model';

@Component({
  selector: 'app-recursive-field',
  templateUrl: './recursive-field.component.html',
  host: {
    'class': 'contents',
  }
})
export class RecursiveFieldComponent {
  @Input({ required: true }) field!: Field;
  @Input() child: RecursiveField | undefined;
}
