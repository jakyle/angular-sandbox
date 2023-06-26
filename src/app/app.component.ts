import { Component } from '@angular/core';
import mockLikeMineData from './models/mock-like-mine.data';
import { LikeMinePatient } from './models/like-mine-patient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  mockLikeMineData: LikeMinePatient[] = mockLikeMineData;
}
