import { Component } from '@angular/core';
import { FieldsService } from './fields.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  constructor(private fieldsService: FieldsService) { }
  fields = this.fieldsService.getFields();
  recursiveFields = this.fieldsService.getRecursiveFields();
}
