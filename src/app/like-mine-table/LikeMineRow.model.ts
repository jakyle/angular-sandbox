import { CellSplit } from "./data-cell-split/cell-split.model"


export interface LikeMineInfoRow {
	patient: string,
	percentageMatch: number,
	diseaseStaging: CellSplit,
	bioMarkers: string[],
	age: string,
	sex: string,
	race: string[],
	comorbidities: string[],
}

export interface LikeMineLineTreatmentRow {
	'1st'?: CellSplit,
	'2nd'?: CellSplit,
	'3rd'?: CellSplit,
	'4th'?: CellSplit,
	'5th'?: CellSplit,
	'6th'?: CellSplit,
	'7th'?: CellSplit,
	'8th'?: CellSplit,
	'9th'?: CellSplit,
	'10th'?: CellSplit,
	'11th'?: CellSplit,
	'12th'?: CellSplit,
	'13th'?: CellSplit,
}

export interface LikeMineRow {
	patient: string,
	pmatch: number,


	diseaseStaging: CellSplit,

	biomarkers: string[],

	firstline: string,
	progression1: string,
	progression1Days: number,
	secondline: string,
	progression2: string,
	progression2Days: number,
	thirdline: string,
	progression3: string,
	progression3Days: number,
	fourthline: string,
	progression4: string,
	progression4Days: number
	fifthline: string,
	progression5: string,
	progression5Days: number
	sixthline: string,
	progression6: string,
	progression6Days: number
	seventhline: string,
	progression7: string,
	progression7Days: number,
	eighthline: string,
	progression8: string,
	progression8Days: number,
	ninethline: string,
	progression9: string,
	progression9Days: number,
	tenthline: string,
	progression10: string,
	progression10Days: number,
	eleventhline: string,
	progression11: string,
	progression11Days: number,
	twelthline: string,
	progression12: string,
	progression12Days: number,
	thirteenthline: string,
	progression13: string,
	progression13Days: number,
	age: number,
	gender: string,
	race: string[],
	comorbidities: string,
}
