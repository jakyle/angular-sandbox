import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class EditorService { 
	html = new  BehaviorSubject<string>('');
	html$ = this.html.asObservable();
}