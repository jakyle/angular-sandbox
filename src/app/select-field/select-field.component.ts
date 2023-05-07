import { AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { BehaviorSubject, Subject, map, takeUntil } from 'rxjs';
import { Option } from '../models/Field.model';


@Component({
  selector: 'app-select-field',
  templateUrl: './select-field-component.html',
  host: {
    'class': 'w-48 h-8',
  }
})
export class SelectFieldComponent implements AfterViewInit, OnDestroy {

  @Input({ required: true }) public options: Option[] = [];

  constructor(private zone: NgZone) { }

  protected readonly destroyed: Subject<void> = new Subject();
  menuState$ = new BehaviorSubject<'opened' | 'closed'>('closed');
  width$ = new BehaviorSubject<string>('144px');
  resizeObserver!: ResizeObserver;

  value = new BehaviorSubject<string>('');
  optionLabel$ = this.value.asObservable().pipe(
    map(value => this.options.find(option => option.value === value)?.label ?? '')
  );

  @ViewChild(CdkMenuTrigger) trigger!: CdkMenuTrigger;
  @ViewChild('menuContainer') menuContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.trigger.opened.pipe(takeUntil(this.destroyed)).subscribe(() => this.menuState$.next('opened'));
    this.trigger.closed.pipe(takeUntil(this.destroyed)).subscribe(() => this.menuState$.next('closed'));

    this.resizeObserver = new ResizeObserver(entries => this.zone.run(() => {
      const [ idx, baseWidth ] = [0, 144];
      const width = entries.at(idx)?.borderBoxSize.at(idx)?.inlineSize ?? baseWidth;
      return this.width$.next(`${width}px`);
    }));
    console.log(this.menuContainer);
    this.resizeObserver.observe(this.menuContainer.nativeElement);
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
    this.resizeObserver.unobserve(this.menuContainer.nativeElement);
  }
}
