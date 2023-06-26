import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: '{{ text }}',
})
export class TagComponent {
  @Input() text: string = '';
  @HostBinding('class') class = 'px-1.5 py-0.5 rounded-full bg-gray-100 text-sm text-stone-900';
}
