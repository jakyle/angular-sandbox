import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToastOverlayComponent } from './toast-overlay/toast-overlay.component';
import { ToastItemComponent } from './toast-overlay/toast-item/toast-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastOverlayComponent,
    ToastItemComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
