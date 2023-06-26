export interface LikeMinePatient {
	age_in_months: number
	alterations: string[]
	canonical_alterations: string[]
	cdw_associated: boolean
	created: string
	data_set: string
	drugs: string[]
	explosion_map_by_alteration: string
	gender: string
	institution: any
	lab_uuids: string[]
	line_of_therapy: string[]
	patient_mrn_hash: string
	patient_uuid: string
	positive_alterations: string[]
	sample_uuids: string[]
	selected_lab_uuids: any
	specific_diseases: string[]
	stages: string[]
	updated: string
	uuid: string
	case__numeric_stages__mint: number[]
	case__diagnosis_groups__mstring: string[]
	score: number
	_refs: Refs
	patient_mrn: string
	identifier: any
	treatments: string[]
	drug_types: string
	oncologic_treatment_objects: OncologicTreatmentObject[]
	comorbidities: string[]
	neg_alts: string[]
	alts: string[]
	percent_match: number
	negative_alterations?: string[] | null
	race: string[]
	case__edema__string: any
	case__sinusitis__string: any
	case__bronchitis__string: any
	case__hemoptysis__string: any
	case__neutropenia__string?: string | null
	case__otherinjury__string: any
	case__herpeszoster__string: any
	case__nauseaandvomiting__string: any
	case__shortnessofbreath__string: any
	case__hemorrhagicdisorder__string: any
	case__dehydrationorhypovolemia__string: any
	case__humoralimmunitydeficiency__string: any
	case__lymphomaHodgkinsadult__string: any
	case__lowerurinarytractinfection__string: any
	case__otherupperrespiratoryinfection__string: any
	alteration_groups: string[]
	case__anemiaother__string: any
	case__prostatecancer__mstring: any
	case__multiplemyeloma__mstring: any
	case__polycythemiavera__string: any
	case__anemiairondeficiency__string: any
	case__bladderurinarycarcinoma__mstring: any
	case__lungcancernonsmallcell__mstring: any
}

export interface Refs {
	detail: string
}

export interface OncologicTreatmentObject {
	drugs: string
	line_of_therapy: string
	drug_types: string
	time_on_therapy: number
	time_off_therapy: number
	time_to_progression: number
	time_approximated: boolean
}
