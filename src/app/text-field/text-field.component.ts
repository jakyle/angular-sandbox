import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  host: {
    'class': 'flex flex-row gap-2 px-2 rounded w-48 h-8 border border-slate-800 focus-within:ring-2 ring-sky-500 bg-white',
  }
})
export class TextFieldComponent {
  @Input() value: string = '';
}
