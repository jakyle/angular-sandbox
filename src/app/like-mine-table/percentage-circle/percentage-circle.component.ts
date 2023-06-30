import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Host, HostBinding, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-percentage-circle',
  templateUrl: './percentage-circle.component.html'
})
export class PercentageCircleComponent implements AfterViewInit {

  @HostBinding('class') class = 'h-16 relative flex justify-center items-center isolate';
  @ViewChild('circle') circle!: ElementRef<SVGCircleElement>;
  pct: number = 0;
  strokeDashArray = 565.48;
  strokeDashOffset = 0;
  radius = 30;

  degrees = [
    'rotate(0)',
    'rotate(45deg)',
    'rotate(90deg)',
    'rotate(135deg)',
    'rotate(180deg)',
    'rotate(225deg)',
    'rotate(270deg)',
    'rotate(315deg)',
  ];

  constructor(private cd: ChangeDetectorRef) { }

  @Input() set percentage(val: number) {
    this.setPercentage(val);
  };

  ngAfterViewInit(): void {
    this.strokeDashArray = this.circle.nativeElement.getTotalLength();
    this.setPercentage(this.pct);
    this.cd.detectChanges();
  }

  private setPercentage(val: number) { 
    this.pct = val;
    const circumference = 2 * Math.PI * this.radius;
    
    val = Math.min(Math.max(val, 0), 100);

    this.strokeDashOffset = ((100-val)/100) * circumference;
  }

}
