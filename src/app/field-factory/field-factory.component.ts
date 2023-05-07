import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { ContainerRefDirective } from './container-ref.directive';
import { Field, FieldType } from '../models/Field.model';
import { TextFieldComponent } from '../text-field/text-field.component';
import { SelectFieldComponent } from '../select-field/select-field.component';

@Component({
  selector: 'app-field-factory',
  template: '<ng-template containerRef></ng-template>',
  host: {
    'class': 'contents',
  }
})
export class FieldFactoryComponent implements OnInit {
  @ViewChild(ContainerRefDirective, {static: true}) containerRef!: ContainerRefDirective;
  @Input({required: true}) field!: Field;
  @HostBinding('class.contents') contents = true;

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.containerRef.viewContainerRef;
    viewContainerRef.clear();
    switch (this.field.type) {
      case FieldType.TEXT: {
        const componentRef = viewContainerRef.createComponent(TextFieldComponent);
        componentRef.instance.value = this.field.value;
        break;
      }
      case FieldType.SELECT: {
        const componentRef = viewContainerRef.createComponent(SelectFieldComponent);
        componentRef.instance.options = this.field.options;
        break;
      }
    }
  }
}
