import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CdkMenuModule} from '@angular/cdk/menu';
import {OverlayModule} from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { FieldFactoryComponent } from './field-factory/field-factory.component';
import { ContainerRefDirective } from './field-factory/container-ref.directive';
import { TextFieldComponent } from './text-field/text-field.component';
import { RecursiveFieldComponent } from './recursive-field/recursive-field.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectFieldComponent,
    FieldFactoryComponent,
    ContainerRefDirective,
    TextFieldComponent,
    RecursiveFieldComponent,
  ],
  imports: [
    BrowserModule,
    CdkMenuModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
