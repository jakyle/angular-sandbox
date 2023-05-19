import { Injectable } from '@angular/core';
import { Subject, mergeWith, scan } from 'rxjs';
import { Position, Toast, ToastType } from './toast';

type ID = number;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private id = 0; // this is used to give each toast a unique id, so we can remove it later.
  private toast = new Subject<Toast>(); // does not need to be a behavior subject, the point of this Subject is to pass on the next toast!
  private removeToast = new Subject<ID>(); // this is a subject that will be used to remove a toast, it will be merged with the toast subject so we know when a toast has been removed.

  toastAdded$ = this.toast.asObservable(); // if you need an 'async toast' just observe to this, so send your toast, then observe this to know when it's done.

  toasts$ = this.toast.pipe(
    mergeWith(this.removeToast), // merge with the remove toast subject so we know if that toast of said ID has been removed
    // notice that because of the merge, we can use a union type for scan (Toast | ID), we either have the removed Id or a new toast.
    scan((toasts: Toast[], payload: Toast | ID) => payload instanceof Toast ? [...toasts, payload] : toasts.filter(t => t.id !== payload), []) // scan maintains your actual array of toasts
  )

  // implementation of destroy, except it accepts an Id, so we know which toast to remove.
  destroyToast(id: ID) {
    this.removeToast.next(id);
  }

  addToast(message: string, type: ToastType, duration: number = 1000, position: Position = Position.TOP_RIGHT) {
    // why a class? because we can use native javascript to CHECK if our toast is of type Toast :).  This is a good use case for a class.
    this.toast.next(new Toast(message, type, duration, position, ++this.id)); // so the reason I would not return of() anything here is because 
    // this would imply that said toast is One and Done.  if you want this to truly be async, then observe to the "async" source, ie, an observable of the toastAdded$ subject, 
    // that way we have an actual STREAM of data, if we just return of() then we are just returning a single value, and that's it.
    return this.toastAdded$; // in this case, we are now returning the source of truth stream.
  }
}
