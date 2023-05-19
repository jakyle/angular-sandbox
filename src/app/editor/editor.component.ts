import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Editor, Toolbar, toDoc, toHTML } from 'ngx-editor';
import { EditorService } from '../editor.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
})
export class EditorComponent implements OnInit, OnDestroy  {

  formControl = new FormControl('');
  editor: Editor = new Editor({
    plugins: [],
    history: true,
  });
  html = '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4'] }],
    ['link', 'image'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor(private editorService: EditorService) { }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  view(): void {
    this.editorService.html.next(this.formControl.value!);
  }
}
