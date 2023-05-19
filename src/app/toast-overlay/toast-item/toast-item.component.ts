import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';
import { Toast } from 'src/app/toast';

@Component({
  selector: 'app-toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.css']
})
export class ToastItemComponent implements OnInit, OnDestroy {
  protected readonly destroyed: Subject<void> = new Subject();
  @Input({ required: true }) toast!: Toast;
  @Output() close = new EventEmitter<number>();

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
