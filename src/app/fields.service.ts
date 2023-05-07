import { Injectable } from '@angular/core';
import { Field, FieldType, RecursiveField } from './models/Field.model';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor() { }

  getFields(): Field[] {
    return [
      {
        type: FieldType.TEXT,
        value: 'Hello World'
      },
      {
        type: FieldType.SELECT,
        options: [
          {
            label: 'Refresh',
            value: 'refresh'
          },
          {
            label: 'Settings',
            value: 'settings'
          },
          {
            label: 'Help',
            value: 'help'
          },
        ]
      }
    ]
  }


  getRecursiveFields(): RecursiveField[] {
    return [
      {
        field: {
          type: FieldType.TEXT,
          value: 'Hello World'
        },
        child: {
          field: {
            type: FieldType.SELECT,
            options: [
              {
                label: 'Refresh',
                value: 'refresh'
              },
              {
                label: 'Settings',
                value: 'settings'
              },
              {
                label: 'Help',
                value: 'help'
              },
            ]
          }
        }
      }
    ]
  }
}
