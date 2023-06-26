import { AfterViewChecked, Component, ElementRef, HostBinding, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { LikeMinePatient } from '../models/like-mine-patient.model';
import { LikeMineInfoRow, LikeMineLineTreatmentRow } from './LikeMineRow.model';
import { CellSplit } from './data-cell-split/cell-split.model';
import { DataSourceObservable } from './data-source-observable';
import { merge } from 'rxjs';

@Component({
  selector: 'app-like-mine-table',
  templateUrl: './like-mine-table.component.html'
})
export class LikeMineTableComponent implements OnInit, AfterViewChecked {

  @Input() set likeMineData(data: LikeMinePatient[]) {
    this.likeMine = data;
    this.setLikeMineData(data);
  };

  @HostBinding('class') class = 'flex flex-col';
  @ViewChildren('infoRows', { read: ElementRef }) infoRows!: QueryList<ElementRef<HTMLTableRowElement>>;
  @ViewChildren('treatmentRows', { read: ElementRef }) treatmentRows!: QueryList<ElementRef<HTMLTableRowElement>>;
  @ViewChild('infoContainer') infoContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('treatmentContainer') treatmentContainer!: ElementRef<HTMLDivElement>;

  likeMine: LikeMinePatient[] | undefined;
  pageSize: number = 20; // Number of items per page
  currentPage: number = 1; // Current page number
  pageSizes: number[] = [5, 10, 20, 50, 75, 100]; // Available page sizes
  totalPages: number = 0; // Total number of pages
  get pageOf() {
    return `${Math.min(this.currentPage * this.pageSize, this.likeMineInfoTableRows.length)} of ${this.likeMineInfoTableRows.length}`;
  }

  didTableDataChange = false;

  likeMineInfoTableRows!: LikeMineInfoRow[];
  likeMineInfoDataSource = new DataSourceObservable<LikeMineInfoRow>(
    (idx, size) => this.likeMineInfoTableRows.slice(idx, idx + size),
    this.pageSize
  );

  likeMineInfoColumns = [
    { field: 'isSelected', header: '', classes: '!w-4', display: true },
    { field: 'patient', header: 'Patient', classes: 'w-auto', display: false },
    { field: 'percentageMatch', header: 'Match %', classes: '!w-8', display: true },
    { field: 'diseaseStaging', header: 'Disease / stage', classes: '!w-32', display: true },
    { field: 'bioMarkers', header: 'Biomarkers', classes: 'w-80 min-w-fit', display: true },
    { field: 'age', header: 'Age', classes: '!w-4', display: false },
    { field: 'race', header: 'Race', classes: '!w-4', display: false },
    { field: 'sex', header: 'Sex', classes: '!w-8', display: false },
    { field: 'comorbidities', header: 'Comorbidities', classes: '!w-20', display: false },
  ];

  likeMineInfoDisplayedColumns = this.likeMineInfoColumns
    .filter(column => column.display)
    .map(column => column.field);

  likeMineLineTreatmentTableRows!: LikeMineLineTreatmentRow[];
  likeMineLineTreatmentDataSource = new DataSourceObservable<LikeMineLineTreatmentRow>(
    (idx, size) => this.likeMineLineTreatmentTableRows.slice(idx, idx + size),
    this.pageSize
  );

  likeMineLineTreatmentColumns = Array.from({ length: 13 })
    .map((_, i) => {
      const number = this.numberToOrdinal(i + 1);
      return {
        field: number,
        header: `${number} Line`,
        classes: 'w-48 max-w-[12rem]',
        display: true,
      }
    });

  treatmentDisplayedColumns = this.likeMineLineTreatmentColumns
    .filter(column => column.display)
    .map(column => column.field);


  ngOnInit(): void {
    merge(
      this.likeMineInfoDataSource.sourceData.asObservable(),
      this.likeMineLineTreatmentDataSource.sourceData.asObservable()
    ).subscribe(() => this.didTableDataChange = true);
    
    this.setLikeMineData(this.likeMine);
  }

  ngAfterViewChecked(): void {
    if (this.didTableDataChange) {
      this.didTableDataChange = false;
      this.infoRows.forEach((row, i) => {
        const treatmentRow = this.treatmentRows.toArray()[i];
        // adding 2px to account for potential borders offsetting the actual height of said row
        if (row.nativeElement.clientHeight > treatmentRow.nativeElement.clientHeight) {
          treatmentRow.nativeElement.style.height = `${row.nativeElement.clientHeight + 2}px`;
        } else {
          row.nativeElement.style.height = `${treatmentRow.nativeElement.clientHeight + 2}px`;
        }
      });
    }
  }

  setLikeMineData(likeMine?: LikeMinePatient[]) {
    if (likeMine) {
      this.likeMineInfoTableRows = this.mapLikeMineInfoTableRows(likeMine);
      this.likeMineInfoDataSource.loadData(0);

      this.likeMineLineTreatmentTableRows = this.mapLikeMineLineTreatmentTableRows(likeMine);
      this.likeMineLineTreatmentDataSource.loadData(0);

      this.totalPages = Math.ceil(this.likeMineLineTreatmentTableRows.length / this.pageSize);
    }
  }

  changePageSize() {
    this.totalPages = Math.ceil(this.likeMineInfoTableRows.length / this.pageSize);
    this.currentPage = 1;
    this.likeMineInfoDataSource.changePageSize(this.pageSize);
    this.likeMineLineTreatmentDataSource.changePageSize(this.pageSize);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.likeMineInfoDataSource.loadData(this.currentPage - 1);
      this.likeMineLineTreatmentDataSource.loadData(this.currentPage - 1);
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.likeMineInfoDataSource.loadData(this.currentPage - 1);
      this.likeMineLineTreatmentDataSource.loadData(this.currentPage - 1);
    }
  }

  handleVerticalScroll(event: Event, table: 'info' | 'treatment') {
    if (table === 'info') {
      this.treatmentContainer.nativeElement.scrollTop = (event.target as HTMLDivElement).scrollTop;
    } else {
      const infoElement = this.infoContainer.nativeElement;

      infoElement.scrollTop = (event.target as HTMLDivElement).scrollTop;
      const infoMaxScrollTop = infoElement.scrollHeight - infoElement.clientHeight;
      this.treatmentContainer.nativeElement.scrollTop = Math.min((event.target as HTMLDivElement).scrollTop, infoMaxScrollTop);
    }
  }

  mapLikeMineInfoTableRows(resultData: LikeMinePatient[]): LikeMineInfoRow[] {
    return resultData.map(likeMinePatient => ({
      isSelected: false,
      patient: likeMinePatient.patient_mrn,
      percentageMatch: likeMinePatient.percent_match,
      diseaseStaging: new CellSplit(
        likeMinePatient.specific_diseases?.filter(Boolean) ?? [],
        likeMinePatient.stages?.filter(Boolean) ?? []
      ),
      bioMarkers: [...(likeMinePatient?.alts ?? []), ...(likeMinePatient?.neg_alts.map((alt) => `${alt} (Negative)`) ?? [])],
      age: Math.floor(Math.floor(likeMinePatient.age_in_months / 12)).toString(),
      sex: likeMinePatient.gender?.substring(0, 1),
      race: likeMinePatient.race,
      comorbidities: likeMinePatient.comorbidities ?? [],
    }));
  }

  mapLikeMineLineTreatmentTableRows(resultData: LikeMinePatient[]): LikeMineLineTreatmentRow[] {
    return resultData.map(likeMinePatient => (likeMinePatient.oncologic_treatment_objects ?? []).reduce((acc, curr) => ({
      ...acc, [this.numberToOrdinal(+curr.line_of_therapy)]: new CellSplit(
        this.convertDaysToMonthsAndWeeks(curr.time_to_progression),
        curr.drugs?.split(' - ') ?? [], 'col', true
      )
    }), {} as LikeMineLineTreatmentRow));
  }


  convertDaysToMonthsAndWeeks(days: number): string[] {
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const remainingWeeks = weeks % 4;

    let result = [];

    if (months > 0) {
      result.push(months === 1 ? '1 month' : `${months} months`);
    }

    if (remainingWeeks > 0) {
      result.push(remainingWeeks === 1 ? '1 week' : `${remainingWeeks} weeks`);
    }

    if (months === 0 && remainingWeeks === 0 || result.length === 0) {
      result.push(`${Math.max(days, 0) ?? '0'} days`);
    }

    return result;
  }

  getPagesRange(): number[] {
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, this.currentPage + 2);
    return Array.from({ length: (endPage - startPage) + 1 }, (_, i) => startPage + i);
  }
  
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.likeMineInfoDataSource.loadData(this.currentPage - 1);
      this.likeMineLineTreatmentDataSource.loadData(this.currentPage - 1);
    }
  }

  private numberToOrdinal(number: number) {
    const suffixes: { [key: number]: string } = {
      1: 'st',
      2: 'nd',
      3: 'rd'
    };
    return `${number}${suffixes[number] ?? 'th'}`;
  }
}
