import { AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { BehaviorSubject, Subject, map, takeUntil, tap } from 'rxjs';
import { Option } from '../models/Field.model';


@Component({
  selector: 'app-select-field',
  templateUrl: './select-field-component.html',
  host: {
    'class': 'w-48 h-8',
  }
})
export class SelectFieldComponent implements AfterViewInit, OnDestroy {

  protected readonly destroyed: Subject<void> = new Subject();
  menuState$ = new BehaviorSubject<'opened' | 'closed'>('closed');
  width$ = new BehaviorSubject<string>('144px');
  resizeObserver!: ResizeObserver;
  filteredOptions$ = new BehaviorSubject<Option[]>([]);
  value = new BehaviorSubject<string>('');
  searchValue = ''
  interval: any;
  _options: Option[] = [];

  constructor(private zone: NgZone) { }

  @Input({ required: true }) public set options(value: Option[]) {
    this._options = value;
    this.filteredOptions$.next([...value]);
  }

  optionLabel$ = this.value.asObservable().pipe(
    map(value => this._options.find(option => option.value === value)?.label ?? '')
  );

  @ViewChild(CdkMenuTrigger) trigger!: CdkMenuTrigger;
  @ViewChild('menuContainer') menuContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    this.trigger.opened.pipe(
      takeUntil(this.destroyed),
    ).subscribe(() => {
      this.menuState$.next('opened');
      this.interval = setTimeout(() => this.searchInput.nativeElement.focus());
    });
    this.trigger.closed.pipe(takeUntil(this.destroyed)).subscribe(() => this.menuState$.next('closed'));
    this.width$.next(this.menuContainer.nativeElement.offsetWidth + 'px');

    this.resizeObserver = new ResizeObserver(entries => this.zone.run(() => {
      const [idx, baseWidth] = [0, 144];
      const width = entries.at(idx)?.borderBoxSize?.at(idx)?.inlineSize ?? baseWidth;
      return this.width$.next(`${width}px`);
    }));
    this.resizeObserver.observe(this.menuContainer.nativeElement);
  }

  onInputChange(event: string) {
    this.searchValue = event;
    this.filteredOptions$.next(this._options.filter(option => option.label.toLowerCase().includes(this.searchValue.toLowerCase())));
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
    this.resizeObserver.unobserve(this.menuContainer.nativeElement);
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  onInputSearchFocus() {
    this.searchInput.nativeElement.focus();
  }

  trackByIndex(index: number, _option: Option) {
    return index;
  }
}
