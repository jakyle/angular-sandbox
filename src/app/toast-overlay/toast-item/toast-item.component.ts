import { Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';
import { Toast, ToastType } from 'src/app/toast';

@Component({
  selector: 'app-toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.css']
})
export class ToastItemComponent implements OnInit, OnDestroy {
  protected readonly destroyed: Subject<void> = new Subject();
  @Input({ required: true }) toast!: Toast;
  @Output() close = new EventEmitter<number>();

  @HostBinding('class') class = 'min-h-fit shadow px-4 py-6 rounded text-white flex flex-col data-info:bg-sky-600 data-success:bg-green-600 data-danger:bg-red-600 data-warning:bg-yellow-600';
  @HostBinding('attr.data-type') get type() { return this.toast.type; };

  onClose() {
    this.close.emit(this.toast.id);
  }

  ngOnInit(): void {
    timer(this.toast.duration).pipe(takeUntil(this.destroyed)).subscribe(() => this.close.emit(this.toast.id))
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
