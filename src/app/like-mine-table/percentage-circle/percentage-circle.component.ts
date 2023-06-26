import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-percentage-circle',
  templateUrl: './percentage-circle.component.html'
})
export class PercentageCircleComponent {
  @Input() percentage: number = 0;
}
