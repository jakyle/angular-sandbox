import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, combineLatest, distinctUntilChanged, map } from 'rxjs';

const HALVED = 0.5;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements AfterViewInit {

  trackBallLeft = new BehaviorSubject(0);
  trackDimensions = this.trackBallLeft.pipe(
    distinctUntilChanged(),
    map((trackBallLeft) => ({ trackBallLeft, sliderWidth: this.calculateSliderWidth(trackBallLeft ?? 0) }))
  );

  minSubject = new BehaviorSubject<number>(1);
  maxSubject = new BehaviorSubject<number>(10);
  stepSubject = new BehaviorSubject<number>(1);

  options$ = combineLatest([this.minSubject, this.maxSubject, this.stepSubject]).pipe(map(([min, max, step]) => this.range(min, max, step)));

  value = new BehaviorSubject<number>(5);
  viewRendered = new BehaviorSubject<boolean>(false);
  isDragging = new BehaviorSubject<boolean>(false);

  vm$ = combineLatest([this.value, this.isDragging, this.trackDimensions, this.options$]).pipe(
    map(([value, isDragging, trackDimensions, options]) => ({
      value,
      isDragging,
      trackDimensions,
      options,
    }))
  )

  @Input() set min(minVal: number) {
    this.minSubject.next(minVal);
  }

  @Input() set max(maxVal: number) {
    this.maxSubject.next(maxVal);
  }

  @Input() set step(stepVal: number) {
    this.stepSubject.next(stepVal);
  }

  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  @ViewChild('trackBall') trackBall!: ElementRef<HTMLDivElement>;
  @ViewChild('track') track!: ElementRef<HTMLDivElement>;
  @ViewChild('dataList') dataList!: ElementRef<HTMLDataListElement>;
  @ViewChildren('values') values!: QueryList<ElementRef<HTMLOptionElement>>;


  get options(): number[] {
    return this.range(this.minSubject.value, this.maxSubject.value, this.stepSubject.value);
  }

  get valueIndex(): number {
    return this.options.findIndex(option => option === this.value.value);
  }
  get valueElement(): HTMLOptionElement {
    return this.values.toArray().at(this.valueIndex)!.nativeElement
  }

  ngAfterViewInit(): void {
    // offset initial datalist width.
    setTimeout(() => this.updateTracks())
  }

  optionSelect(event: MouseEvent) {
    this.value.next(+(event.target as HTMLOptionElement).value ?? 0);
    this.updateTracks();
  }

  dragStart(event: DragEvent): void {
    const img = new Image();
    // make drag ghost image disappear
    img.src = '';
    event.dataTransfer!.setDragImage(img, 0, 0);
    this.isDragging.next(true);
  }

  drag(event: DragEvent): void {
    // on dragEnd, drag gets fired one more time with a zero clientX for some reason
    if (event.clientX === 0) {
      return;
    }

    const trackBallWidth = this.trackBall.nativeElement.clientWidth;
    const sliderElement = this.slider.nativeElement;
    let calculatedTrackLeft = (event.clientX - (trackBallWidth * HALVED)) - sliderElement.getBoundingClientRect().left;

    const trackRect = this.track.nativeElement.getBoundingClientRect();
    const clampedTrackLeft = this.clamp(calculatedTrackLeft, 0, trackRect.width - trackBallWidth);

    this.trackBallLeft.next(clampedTrackLeft);

    const spaceBetween = this.dataList.nativeElement.clientWidth / this.options.length;
    const result = this.values.find((value) => {
      const marginForError = spaceBetween - trackBallWidth;
      const leftBound = value.nativeElement.getBoundingClientRect().left;
      const rightBound = value.nativeElement.clientWidth + leftBound;
      return leftBound - marginForError <= event.clientX && rightBound + marginForError >= event.clientX;
    });
    const inTrackBallRangeValue = +result!?.nativeElement.value;

    if (!isNaN(inTrackBallRangeValue) && inTrackBallRangeValue !== this.value.value) {
      this.value.next(inTrackBallRangeValue);
    }
  }

  dragEnd(_: DragEvent): void {
    this.isDragging.next(false);
    this.updateTracks();
  }

  trackValue(value: number): number {
    return value;
  }

  moveTrackBall(direction: 'left' | 'right'): void {
    const valueIndex = this.valueIndex;
    const idx = this.clamp(direction === 'left' ? valueIndex - 1 : valueIndex + 1, 0, this.options.length - 1);
    if (this.valueIndex !== idx) {
      const value = this.options.at(idx)!;
      this.value.next(value);
      this.updateTracks();
    }
  }

  private calculateTrackBallLeftByValue(): number {
    const elementRect = this.valueElement.getBoundingClientRect();
    const elementRectRight = elementRect.right;
    const elementRectLeft = elementRect.left;
    const trackBallWidth = this.trackBall.nativeElement.clientWidth;
    const sliderLeft = this.slider.nativeElement.getBoundingClientRect().left;
    return Math.floor((elementRectLeft + (elementRectRight - elementRectLeft) * HALVED) - sliderLeft - (trackBallWidth * HALVED));
  }

  private calculateSliderWidth(trackBallLeft: number) {
    return trackBallLeft + this.trackBall?.nativeElement?.clientWidth * 1.3 ?? 0;
  }

  private range(lower: number, upper: number, step: number): number[] {
    const length = Math.floor((upper - lower) / step) + 1;
    return Array.from({ length }, (_, i) => lower + (i * step));
  }

  private updateTracks() {
    this.trackBallLeft.next(this.calculateTrackBallLeftByValue());
  }

  private clamp(number: number, min: number, max: number): number {
    return Math.min(Math.max(number, min), max);
  }
}
