export enum FieldType {
	TEXT = 'text',
	SELECT = 'select',
}

type Value = {
	value: string;
}

export type TextField = {
	type: FieldType.TEXT;
} & Value;

export type Option = {
	label: string;
} & Value;

export type SelectField = {
	type: FieldType.SELECT;
	options: Option[];
};

export type Field = TextField | SelectField;

export type RecursiveField = {
	field: Field;
	child?: RecursiveField;
}
