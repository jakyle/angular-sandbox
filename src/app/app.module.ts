import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkMenuModule } from '@angular/cdk/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';

import { AppComponent } from './app.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { FieldFactoryComponent } from './field-factory/field-factory.component';
import { ContainerRefDirective } from './field-factory/container-ref.directive';
import { TextFieldComponent } from './text-field/text-field.component';
import { RecursiveFieldComponent } from './recursive-field/recursive-field.component';
import { EditorComponent } from './editor/editor.component';
import { SafePipe } from './safe.pipe';
import { ToastOverlayComponent } from './toast-overlay/toast-overlay.component';
import { ToastItemComponent } from './toast-overlay/toast-item/toast-item.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectFieldComponent,
    FieldFactoryComponent,
    ContainerRefDirective,
    TextFieldComponent,
    RecursiveFieldComponent,
    EditorComponent,
    SafePipe,
    ToastOverlayComponent,
    ToastItemComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    CdkMenuModule,
    OverlayModule,
    ReactiveFormsModule,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        blockquote: 'Blockquote',
        underline: 'Underline',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify',
        text_color: 'Text Color',
        background_color: 'Background Color',

        // popups, forms, others...
        url: 'URL',
        text: 'Text',
        openInNewTab: 'Open in new tab',
        insert: 'Insert',
        altText: 'Alt Text',
        title: 'Title',
        remove: 'Remove',
      },
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
