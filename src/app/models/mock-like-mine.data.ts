import { LikeMinePatient } from "./like-mine-patient.model";

const likeMineData: LikeMinePatient[] = [
	{
		"age_in_months": 486,
		"alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"NRAS Mutation",
			"BRAF Mutation"
		],
		"canonical_alterations": [
			"KRAS Mutation",
			"NRAS Mutation (somatic)",
			"Microsatellite Stable (MSS)",
			"KRAS Mutation (somatic)",
			"NRAS Mutation (germline)",
			"KRAS Mutation (germline)",
			"NRAS Mutation"
		],
		"cdw_associated": false,
		"created": "2023-05-15T19:35:58-04:00",
		"data_set": "clinical",
		"drugs": [
			"capecitabine - oxaliplatin",
			"capecitabine",
			"bevacizumab - fluorouracil - irinotecan"
		],
		"explosion_map_by_alteration": "{\"KRAS Mutation\": [\"KRAS Mutation\"], \"KRAS Mutation (somatic)\": [\"KRAS Mutation\"], \"KRAS Mutation (germline)\": [\"KRAS Mutation\"], \"Microsatellite Stable (MSS)\": [\"Microsatellite Stable (MSS)\"], \"NRAS Mutation\": [\"NRAS Mutation\"], \"NRAS Mutation (somatic)\": [\"NRAS Mutation\"], \"NRAS Mutation (germline)\": [\"NRAS Mutation\"]}",
		"gender": "Female",
		"institution": null,
		"lab_uuids": [
			"ff8c7d19-be09-41ab-add5-99a5759d7585"
		],
		"line_of_therapy": [
			"1",
			"2",
			"3"
		],
		"patient_mrn_hash": "2e38dee58531c9db0b49b62fa612d8ed",
		"patient_uuid": "eeb93814-2362-49f9-9bb4-4fe6b03478b7",
		"positive_alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"NRAS Mutation"
		],
		"sample_uuids": [
			"35758828-ab90-418a-9cb6-0f6c8153fb1f"
		],
		"selected_lab_uuids": null,
		"specific_diseases": [
			"Colon Cancer"
		],
		"stages": [
			"Stage IIIB"
		],
		"updated": "2023-05-15T19:35:58-04:00",
		"uuid": "ef120de1-1826-4364-94b8-10d9818c2c5d",
		"case__numeric_stages__mint": [
			3020
		],
		"case__diagnosis_groups__mstring": [
			"colorectal cancers (all types)"
		],
		"score": 40,
		"_refs": {
			"detail": "/api/cases/ef120de1-1826-4364-94b8-10d9818c2c5d"
		},
		"patient_mrn": "5102685",
		"identifier": null,
		"treatments": [
			"capecitabine - oxaliplatin",
			"capecitabine",
			"bevacizumab - fluorouracil - irinotecan"
		],
		"drug_types": "",
		"oncologic_treatment_objects": [
			{
				"drugs": "capecitabine - oxaliplatin",
				"line_of_therapy": "1",
				"drug_types": "chemotherapy",
				"time_on_therapy": 119,
				"time_off_therapy": 1,
				"time_to_progression": 120,
				"time_approximated": false
			},
			{
				"drugs": "capecitabine",
				"line_of_therapy": "2",
				"drug_types": "chemotherapy",
				"time_on_therapy": 124,
				"time_off_therapy": 142,
				"time_to_progression": 266,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - fluorouracil - irinotecan",
				"line_of_therapy": "3",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 728,
				"time_off_therapy": 0,
				"time_to_progression": 728,
				"time_approximated": false
			}
		],
		"comorbidities": [
			"vitamin b deficiency",
			"dehydration or hypovolemia"
		],
		"neg_alts": [
			"BRAF Mutation"
		],
		"alts": [
			"KRAS Mutation",
			"NRAS Mutation",
			"Microsatellite Stable (MSS)"
		],
		"percent_match": 66,
		"negative_alterations": [
			"BRAF Mutation"
		],
		"race": [
			"Black"
		],
		"case__edema__string": null,
		"case__sinusitis__string": null,
		"case__bronchitis__string": null,
		"case__hemoptysis__string": null,
		"case__neutropenia__string": null,
		"case__otherinjury__string": null,
		"case__herpeszoster__string": null,
		"case__nauseaandvomiting__string": null,
		"case__shortnessofbreath__string": null,
		"case__hemorrhagicdisorder__string": null,
		"case__dehydrationorhypovolemia__string": null,
		"case__humoralimmunitydeficiency__string": null,
		"case__lymphomaHodgkinsadult__string": null,
		"case__lowerurinarytractinfection__string": null,
		"case__otherupperrespiratoryinfection__string": null,
		"alteration_groups": [
			"MAPK Pathway Alterations: NCCN Histiocytic Neoplasms",
			"MAPK Pathway Group",
			"RAF/RAS/MEK Pathway Alterations",
			"NCT02873975: Alterations Indicating Replicative Stress",
			"NCT03634982: ALL(NRAS Mutation, NONE(NRAS G12A/C))",
			"MSS/pMMR Group"
		],
		"case__anemiaother__string": null,
		"case__prostatecancer__mstring": null,
		"case__multiplemyeloma__mstring": null,
		"case__polycythemiavera__string": null,
		"case__anemiairondeficiency__string": null,
		"case__bladderurinarycarcinoma__mstring": null,
		"case__lungcancernonsmallcell__mstring": null
	},
	{
		"age_in_months": 840,
		"alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"BRAF V600E",
			"BRAF Mutation",
			"NRAS Mutation"
		],
		"canonical_alterations": [
			"KRAS Mutation",
			"BRAF Exon 15 Mutation",
			"NRAS Mutation (somatic)",
			"Microsatellite Stable (MSS)",
			"BRAF V600E (somatic)",
			"BRAF V600E",
			"KRAS Mutation (somatic)",
			"BRAF Codon 600 Missense",
			"BRAF Missense",
			"BRAF Mutation",
			"NRAS Mutation (germline)",
			"KRAS Mutation (germline)",
			"NRAS Mutation"
		],
		"cdw_associated": false,
		"created": "2023-05-15T18:08:53-04:00",
		"data_set": "clinical",
		"drugs": [
			"capecitabine",
			"fluorouracil - oxaliplatin",
			"fluorouracil",
			"bevacizumab - bevacizumab-awwb - fluorouracil - irinotecan",
			"bevacizumab-bvzr - fluorouracil - irinotecan",
			"fluorouracil - irinotecan",
			"cetuximab - encorafenib"
		],
		"explosion_map_by_alteration": "{\"KRAS Mutation\": [\"KRAS Mutation\"], \"KRAS Mutation (somatic)\": [\"KRAS Mutation\"], \"KRAS Mutation (germline)\": [\"KRAS Mutation\"], \"Microsatellite Stable (MSS)\": [\"Microsatellite Stable (MSS)\"], \"BRAF V600E (somatic)\": [\"BRAF V600E\"], \"BRAF V600E\": [\"BRAF V600E\"], \"BRAF Mutation\": [\"BRAF V600E\", \"BRAF Mutation\"], \"BRAF Exon 15 Mutation\": [\"BRAF V600E\"], \"BRAF Codon 600 Missense\": [\"BRAF V600E\"], \"BRAF Missense\": [\"BRAF V600E\"], \"NRAS Mutation\": [\"NRAS Mutation\"], \"NRAS Mutation (somatic)\": [\"NRAS Mutation\"], \"NRAS Mutation (germline)\": [\"NRAS Mutation\"]}",
		"gender": "Female",
		"institution": null,
		"lab_uuids": [
			"431c0acb-653f-461e-b3e7-e8894c03d353"
		],
		"line_of_therapy": [
			"1",
			"2",
			"3",
			"4",
			"4",
			"5",
			"6"
		],
		"patient_mrn_hash": "c76f4d8f775ce0c5c420b0fe28edb60f",
		"patient_uuid": "967ff630-4544-44ca-b1b1-c8caa32d0b7f",
		"positive_alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"BRAF V600E",
			"BRAF Mutation",
			"NRAS Mutation"
		],
		"sample_uuids": [
			"fe549c89-ca63-42eb-b148-8624409df066"
		],
		"selected_lab_uuids": null,
		"specific_diseases": [
			"Colon Cancer"
		],
		"stages": [
			"Stage IVA"
		],
		"updated": "2023-05-15T18:08:53-04:00",
		"uuid": "8bd942f7-6e49-4649-972a-02fb1f9d6b68",
		"case__numeric_stages__mint": [
			4010
		],
		"case__diagnosis_groups__mstring": [
			"colorectal cancers (all types)"
		],
		"score": 35,
		"_refs": {
			"detail": "/api/cases/8bd942f7-6e49-4649-972a-02fb1f9d6b68"
		},
		"patient_mrn": "4523005",
		"identifier": null,
		"treatments": [
			"capecitabine",
			"fluorouracil - oxaliplatin",
			"fluorouracil",
			"bevacizumab - bevacizumab-awwb - fluorouracil - irinotecan",
			"bevacizumab-bvzr - fluorouracil - irinotecan",
			"fluorouracil - irinotecan",
			"cetuximab - encorafenib"
		],
		"drug_types": "",
		"oncologic_treatment_objects": [
			{
				"drugs": "capecitabine",
				"line_of_therapy": "1",
				"drug_types": "chemotherapy",
				"time_on_therapy": 663,
				"time_off_therapy": 1,
				"time_to_progression": 664,
				"time_approximated": false
			},
			{
				"drugs": "fluorouracil - oxaliplatin",
				"line_of_therapy": "2",
				"drug_types": "chemotherapy",
				"time_on_therapy": 86,
				"time_off_therapy": 12,
				"time_to_progression": 98,
				"time_approximated": false
			},
			{
				"drugs": "fluorouracil",
				"line_of_therapy": "3",
				"drug_types": "chemotherapy",
				"time_on_therapy": 56,
				"time_off_therapy": 532,
				"time_to_progression": 588,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - bevacizumab-awwb - fluorouracil - irinotecan",
				"line_of_therapy": "4",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 628,
				"time_off_therapy": 1,
				"time_to_progression": 629,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab-bvzr - fluorouracil - irinotecan",
				"line_of_therapy": "4",
				"drug_types": "chemotherapy",
				"time_on_therapy": 155,
				"time_off_therapy": 14,
				"time_to_progression": 169,
				"time_approximated": false
			},
			{
				"drugs": "fluorouracil - irinotecan",
				"line_of_therapy": "5",
				"drug_types": "chemotherapy",
				"time_on_therapy": 70,
				"time_off_therapy": 13,
				"time_to_progression": 83,
				"time_approximated": false
			},
			{
				"drugs": "cetuximab - encorafenib",
				"line_of_therapy": "6",
				"drug_types": "targeted therapy",
				"time_on_therapy": 243,
				"time_off_therapy": 0,
				"time_to_progression": 243,
				"time_approximated": false
			}
		],
		"comorbidities": [
			"other injury",
			"abdominal hernia",
			"pulmonary embolism",
			"malaise and fatigue",
			"dermatitis or eczema",
			"vitamin b deficiency",
			"embolism or thrombosis",
			"iatrogenic complications",
			"elevated other tumor markers",
			"functional digestive disorder",
			"autonomic nervous system disorder",
			"other general symptoms or findings"
		],
		"neg_alts": [],
		"alts": [
			"KRAS Mutation",
			"NRAS Mutation",
			"BRAF Mutation",
			"Microsatellite Stable (MSS)",
			"BRAF V600E"
		],
		"percent_match": 58,
		"negative_alterations": null,
		"race": [
			"Other"
		],
		"case__edema__string": null,
		"case__sinusitis__string": null,
		"case__bronchitis__string": null,
		"case__hemoptysis__string": null,
		"case__neutropenia__string": null,
		"case__otherinjury__string": null,
		"case__herpeszoster__string": null,
		"case__nauseaandvomiting__string": null,
		"case__shortnessofbreath__string": null,
		"case__hemorrhagicdisorder__string": null,
		"case__dehydrationorhypovolemia__string": null,
		"case__humoralimmunitydeficiency__string": null,
		"case__lymphomaHodgkinsadult__string": null,
		"case__lowerurinarytractinfection__string": null,
		"case__otherupperrespiratoryinfection__string": null,
		"alteration_groups": [
			"MAPK Pathway Alterations: NCCN Histiocytic Neoplasms",
			"MAPK Pathway Group",
			"RAF/RAS/MEK Pathway Alterations",
			"BRAF Activating Mutations",
			"BRAF Predefined Mutations",
			"NSCLC Targetable Alterations Group",
			"NCT02873975: Alterations Indicating Replicative Stress",
			"NCT03634982: ALL(NRAS Mutation, NONE(NRAS G12A/C))",
			"MSS/pMMR Group"
		],
		"case__anemiaother__string": null,
		"case__prostatecancer__mstring": null,
		"case__multiplemyeloma__mstring": null,
		"case__polycythemiavera__string": null,
		"case__anemiairondeficiency__string": null,
		"case__bladderurinarycarcinoma__mstring": null,
		"case__lungcancernonsmallcell__mstring": null
	},
	{
		"age_in_months": 472,
		"alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"BRAF Mutation",
			"PD-L1 Expression (<1%)",
			"NRAS Mutation"
		],
		"canonical_alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"KRAS Mutation (somatic)",
			"PD-L1 Expression (<1%)",
			"KRAS Mutation (germline)"
		],
		"cdw_associated": false,
		"created": "2023-05-15T18:08:53-04:00",
		"data_set": "clinical",
		"drugs": [
			"bevacizumab - fluorouracil - irinotecan",
			"fluorouracil - oxaliplatin"
		],
		"explosion_map_by_alteration": "{\"KRAS Mutation\": [\"KRAS Mutation\"], \"KRAS Mutation (somatic)\": [\"KRAS Mutation\"], \"KRAS Mutation (germline)\": [\"KRAS Mutation\"], \"Microsatellite Stable (MSS)\": [\"Microsatellite Stable (MSS)\"]}",
		"gender": "Female",
		"institution": null,
		"lab_uuids": [
			"d22870a0-4697-4d7e-8a91-6327e939d526"
		],
		"line_of_therapy": [
			"1",
			"2"
		],
		"patient_mrn_hash": "1ab8a5b9472bfb987c75976f7b18bb6f",
		"patient_uuid": "0dea8d23-51cf-4397-a8ff-cb95afd82b35",
		"positive_alterations": [
			"KRAS Mutation",
			"PD-L1 Expression (<1%)",
			"Microsatellite Stable (MSS)"
		],
		"sample_uuids": [
			"24327556-9f54-4eba-af19-ed0c342e5d8a"
		],
		"selected_lab_uuids": null,
		"specific_diseases": [
			"Colon Cancer"
		],
		"stages": [
			"Stage IIIB"
		],
		"updated": "2023-05-15T18:08:53-04:00",
		"uuid": "e8732c1e-fe27-45a1-8ffd-211bd8300964",
		"case__numeric_stages__mint": [
			3020
		],
		"case__diagnosis_groups__mstring": [
			"colorectal cancers (all types)"
		],
		"score": 35,
		"_refs": {
			"detail": "/api/cases/e8732c1e-fe27-45a1-8ffd-211bd8300964"
		},
		"patient_mrn": "9973901",
		"identifier": null,
		"treatments": [
			"fluorouracil - oxaliplatin",
			"bevacizumab - fluorouracil - irinotecan"
		],
		"drug_types": "",
		"oncologic_treatment_objects": [
			{
				"drugs": "fluorouracil - oxaliplatin",
				"line_of_therapy": "1",
				"drug_types": "chemotherapy",
				"time_on_therapy": 210,
				"time_off_therapy": 191,
				"time_to_progression": 401,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - fluorouracil - irinotecan",
				"line_of_therapy": "2",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 70,
				"time_off_therapy": 0,
				"time_to_progression": 70,
				"time_approximated": true
			}
		],
		"comorbidities": [
			"anemia - iron deficiency"
		],
		"neg_alts": [
			"BRAF Mutation",
			"NRAS Mutation"
		],
		"alts": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"PD-L1 Expression (<1%)"
		],
		"percent_match": 58,
		"negative_alterations": [
			"NRAS Mutation",
			"BRAF Mutation"
		],
		"race": [
			"White"
		],
		"case__edema__string": null,
		"case__sinusitis__string": null,
		"case__bronchitis__string": null,
		"case__hemoptysis__string": null,
		"case__neutropenia__string": null,
		"case__otherinjury__string": null,
		"case__herpeszoster__string": null,
		"case__nauseaandvomiting__string": null,
		"case__shortnessofbreath__string": null,
		"case__hemorrhagicdisorder__string": null,
		"case__dehydrationorhypovolemia__string": null,
		"case__humoralimmunitydeficiency__string": null,
		"case__lymphomaHodgkinsadult__string": null,
		"case__lowerurinarytractinfection__string": null,
		"case__otherupperrespiratoryinfection__string": null,
		"alteration_groups": [
			"MAPK Pathway Alterations: NCCN Histiocytic Neoplasms",
			"MAPK Pathway Group",
			"RAF/RAS/MEK Pathway Alterations",
			"NCT02873975: Alterations Indicating Replicative Stress",
			"NCT03634982: ALL(NRAS Mutation, NONE(NRAS G12A/C))",
			"MSS/pMMR Group"
		],
		"case__anemiaother__string": null,
		"case__prostatecancer__mstring": null,
		"case__multiplemyeloma__mstring": null,
		"case__polycythemiavera__string": null,
		"case__anemiairondeficiency__string": null,
		"case__bladderurinarycarcinoma__mstring": null,
		"case__lungcancernonsmallcell__mstring": null
	},
	{
		"age_in_months": 832,
		"alterations": [
			"KRAS Mutation",
			"NTRK Fusion",
			"Microsatellite Stable (MSS)",
			"BRAF Mutation",
			"HER2 Negative",
			"PD-L1 Expression (<1%)",
			"NRAS Mutation"
		],
		"canonical_alterations": [
			"NRAS Mutation (somatic)",
			"Microsatellite Stable (MSS)",
			"BRAF Mutation",
			"HER2 Negative",
			"NRAS Mutation (germline)",
			"PD-L1 Expression (<1%)",
			"NRAS Mutation"
		],
		"cdw_associated": false,
		"created": "2023-05-15T18:08:53-04:00",
		"data_set": "clinical",
		"drugs": [
			"fluorouracil",
			"bevacizumab-bvzr - fluorouracil - irinotecan",
			"fluorouracil - irinotecan"
		],
		"explosion_map_by_alteration": "{\"Microsatellite Stable (MSS)\": [\"Microsatellite Stable (MSS)\"], \"BRAF Mutation\": [\"BRAF Mutation\"], \"HER2 Negative\": [\"HER2 Negative\"], \"NRAS Mutation\": [\"NRAS Mutation\"], \"NRAS Mutation (somatic)\": [\"NRAS Mutation\"], \"NRAS Mutation (germline)\": [\"NRAS Mutation\"]}",
		"gender": "Male",
		"institution": null,
		"lab_uuids": [
			"79597762-cf97-4a76-bcec-640ce3dc9e80"
		],
		"line_of_therapy": [
			"1",
			"2",
			"3"
		],
		"patient_mrn_hash": "70c7fad8850e61d39eb96a323d3c008c",
		"patient_uuid": "5d231148-9f3e-4d52-8b5f-275b5a4479cc",
		"positive_alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"BRAF Mutation",
			"HER2 Negative",
			"PD-L1 Expression (<1%)",
			"NRAS Mutation"
		],
		"sample_uuids": [
			"fd4fef07-675d-4575-8a03-f9b1b73b0d1c"
		],
		"selected_lab_uuids": null,
		"specific_diseases": [
			"Colon Cancer"
		],
		"stages": [
			"Stage IIIB"
		],
		"updated": "2023-05-15T18:08:53-04:00",
		"uuid": "c56fa68b-3205-42a2-9153-0bae0eac273e",
		"case__numeric_stages__mint": [
			3020
		],
		"case__diagnosis_groups__mstring": [
			"colorectal cancers (all types)"
		],
		"score": 35,
		"_refs": {
			"detail": "/api/cases/c56fa68b-3205-42a2-9153-0bae0eac273e"
		},
		"patient_mrn": "9790685",
		"identifier": null,
		"treatments": [
			"fluorouracil",
			"bevacizumab-bvzr - fluorouracil - irinotecan",
			"fluorouracil - irinotecan"
		],
		"drug_types": "",
		"oncologic_treatment_objects": [
			{
				"drugs": "fluorouracil",
				"line_of_therapy": "1",
				"drug_types": "chemotherapy",
				"time_on_therapy": 183,
				"time_off_therapy": 63,
				"time_to_progression": 246,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab-bvzr - fluorouracil - irinotecan",
				"line_of_therapy": "2",
				"drug_types": "chemotherapy",
				"time_on_therapy": 155,
				"time_off_therapy": 6,
				"time_to_progression": 161,
				"time_approximated": false
			},
			{
				"drugs": "fluorouracil - irinotecan",
				"line_of_therapy": "3",
				"drug_types": "chemotherapy",
				"time_on_therapy": 126,
				"time_off_therapy": 0,
				"time_to_progression": 126,
				"time_approximated": true
			}
		],
		"comorbidities": [
			"other injury",
			"anemia - other",
			"dehydration or hypovolemia",
			"mineral metabolism disorder"
		],
		"neg_alts": [
			"KRAS Mutation",
			"NTRK Fusion"
		],
		"alts": [
			"KRAS Mutation",
			"NRAS Mutation",
			"BRAF Mutation",
			"PD-L1 Expression (<1%)",
			"Microsatellite Stable (MSS)",
			"HER2 Negative"
		],
		"percent_match": 58,
		"negative_alterations": [
			"KRAS Mutation",
			"NTRK Fusion"
		],
		"race": [
			"White"
		],
		"case__edema__string": null,
		"case__sinusitis__string": null,
		"case__bronchitis__string": null,
		"case__hemoptysis__string": null,
		"case__neutropenia__string": null,
		"case__otherinjury__string": null,
		"case__herpeszoster__string": null,
		"case__nauseaandvomiting__string": null,
		"case__shortnessofbreath__string": null,
		"case__hemorrhagicdisorder__string": null,
		"case__dehydrationorhypovolemia__string": null,
		"case__humoralimmunitydeficiency__string": null,
		"case__lymphomaHodgkinsadult__string": null,
		"case__lowerurinarytractinfection__string": null,
		"case__otherupperrespiratoryinfection__string": null,
		"alteration_groups": [
			"MAPK Pathway Alterations: NCCN Histiocytic Neoplasms",
			"MAPK Pathway Group",
			"RAF/RAS/MEK Pathway Alterations",
			"NCT02873975: Alterations Indicating Replicative Stress",
			"NCT03634982: ALL(NRAS Mutation, NONE(NRAS G12A/C))",
			"MSS/pMMR Group",
			"HER2 Low Group",
			"HER2 Negative (General) Group",
			"HER2 Negative Group"
		],
		"case__anemiaother__string": null,
		"case__prostatecancer__mstring": null,
		"case__multiplemyeloma__mstring": null,
		"case__polycythemiavera__string": null,
		"case__anemiairondeficiency__string": null,
		"case__bladderurinarycarcinoma__mstring": null,
		"case__lungcancernonsmallcell__mstring": null
	},
	{
		"age_in_months": 576,
		"alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"NRAS Mutation",
			"Proficient DNA Mismatch Repair (pMMR)"
		],
		"canonical_alterations": [
			"KRAS Mutation",
			"NRAS Mutation (somatic)",
			"Microsatellite Stable (MSS)",
			"KRAS Mutation (somatic)",
			"NRAS Mutation (germline)",
			"Proficient DNA Mismatch Repair (pMMR)",
			"KRAS Mutation (germline)",
			"NRAS Mutation"
		],
		"cdw_associated": false,
		"created": "2023-05-15T20:05:00-04:00",
		"data_set": "clinical",
		"drugs": [
			"bevacizumab - capecitabine",
			"fluorouracil - irinotecan",
			"bevacizumab - fluorouracil - oxaliplatin",
			"trifluridine-tipiracil",
			"regorafenib"
		],
		"explosion_map_by_alteration": "{\"KRAS Mutation\": [\"KRAS Mutation\"], \"KRAS Mutation (somatic)\": [\"KRAS Mutation\"], \"KRAS Mutation (germline)\": [\"KRAS Mutation\"], \"Microsatellite Stable (MSS)\": [\"Microsatellite Stable (MSS)\"], \"NRAS Mutation\": [\"NRAS Mutation\"], \"NRAS Mutation (somatic)\": [\"NRAS Mutation\"], \"NRAS Mutation (germline)\": [\"NRAS Mutation\"]}",
		"gender": "Female",
		"institution": null,
		"lab_uuids": [
			"ae0ade85-8d94-402b-b7f6-6778ab5b8fd4"
		],
		"line_of_therapy": [
			"1",
			"2",
			"3",
			"4",
			"5"
		],
		"patient_mrn_hash": "ef4adf9bef27f6abf39aafb3b5ee3433",
		"patient_uuid": "5f5446bf-5ca9-46ff-bad1-c37e5182c4a9",
		"positive_alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"NRAS Mutation",
			"Proficient DNA Mismatch Repair (pMMR)"
		],
		"sample_uuids": [
			"acc1e3bc-736a-405e-8a0a-45e09305e1b0"
		],
		"selected_lab_uuids": null,
		"specific_diseases": [
			"Colon Cancer"
		],
		"stages": [
			"Stage IVA"
		],
		"updated": "2023-05-15T20:05:00-04:00",
		"uuid": "cefd6b2a-df1f-42d5-b385-7892a897015c",
		"case__numeric_stages__mint": [
			4010
		],
		"case__diagnosis_groups__mstring": [
			"colorectal cancers (all types)"
		],
		"score": 35,
		"_refs": {
			"detail": "/api/cases/cefd6b2a-df1f-42d5-b385-7892a897015c"
		},
		"patient_mrn": "2665672",
		"identifier": null,
		"treatments": [
			"bevacizumab - capecitabine",
			"fluorouracil - irinotecan",
			"bevacizumab - fluorouracil - oxaliplatin",
			"trifluridine-tipiracil",
			"regorafenib"
		],
		"drug_types": "",
		"oncologic_treatment_objects": [
			{
				"drugs": "bevacizumab - capecitabine",
				"line_of_therapy": "1",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 147,
				"time_off_therapy": 62,
				"time_to_progression": 209,
				"time_approximated": false
			},
			{
				"drugs": "fluorouracil - irinotecan",
				"line_of_therapy": "2",
				"drug_types": "chemotherapy",
				"time_on_therapy": 51,
				"time_off_therapy": 12,
				"time_to_progression": 63,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - fluorouracil - oxaliplatin",
				"line_of_therapy": "3",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 224,
				"time_off_therapy": 30,
				"time_to_progression": 254,
				"time_approximated": false
			},
			{
				"drugs": "trifluridine-tipiracil",
				"line_of_therapy": "4",
				"drug_types": "",
				"time_on_therapy": 73,
				"time_off_therapy": 10,
				"time_to_progression": 83,
				"time_approximated": false
			},
			{
				"drugs": "regorafenib",
				"line_of_therapy": "5",
				"drug_types": "targeted therapy",
				"time_on_therapy": 74,
				"time_off_therapy": 0,
				"time_to_progression": 74,
				"time_approximated": true
			}
		],
		"comorbidities": [],
		"neg_alts": [],
		"alts": [
			"KRAS Mutation",
			"NRAS Mutation",
			"Proficient DNA Mismatch Repair (pMMR)",
			"Microsatellite Stable (MSS)"
		],
		"percent_match": 58,
		"negative_alterations": null,
		"race": [
			"White"
		],
		"case__edema__string": null,
		"case__sinusitis__string": null,
		"case__bronchitis__string": null,
		"case__hemoptysis__string": null,
		"case__neutropenia__string": null,
		"case__otherinjury__string": null,
		"case__herpeszoster__string": null,
		"case__nauseaandvomiting__string": null,
		"case__shortnessofbreath__string": null,
		"case__hemorrhagicdisorder__string": null,
		"case__dehydrationorhypovolemia__string": null,
		"case__humoralimmunitydeficiency__string": null,
		"case__lymphomaHodgkinsadult__string": null,
		"case__lowerurinarytractinfection__string": null,
		"case__otherupperrespiratoryinfection__string": null,
		"alteration_groups": [
			"MAPK Pathway Alterations: NCCN Histiocytic Neoplasms",
			"MAPK Pathway Group",
			"NCT02873975: Alterations Indicating Replicative Stress",
			"RAF/RAS/MEK Pathway Alterations",
			"NCT03634982: ALL(NRAS Mutation, NONE(NRAS G12A/C))",
			"MSS/pMMR Group"
		],
		"case__anemiaother__string": null,
		"case__prostatecancer__mstring": null,
		"case__multiplemyeloma__mstring": null,
		"case__polycythemiavera__string": null,
		"case__anemiairondeficiency__string": null,
		"case__bladderurinarycarcinoma__mstring": null,
		"case__lungcancernonsmallcell__mstring": null
	},
	{
		"age_in_months": 581,
		"alterations": [
			"KRAS Mutation",
			"KRAS Codon 12 Mutation",
			"Microsatellite Stable (MSS)",
			"BRAF Mutation",
			"NRAS Mutation"
		],
		"canonical_alterations": [
			"KRAS Mutation",
			"KRAS Codon 12 Mutation",
			"Microsatellite Stable (MSS)",
			"KRAS Mutation (somatic)",
			"KRAS Mutation (germline)"
		],
		"cdw_associated": false,
		"created": "2023-05-15T19:06:44-04:00",
		"data_set": "clinical",
		"drugs": [
			"fluorouracil - oxaliplatin"
		],
		"explosion_map_by_alteration": "{\"KRAS Mutation\": [\"KRAS Mutation\"], \"KRAS Mutation (somatic)\": [\"KRAS Mutation\"], \"KRAS Mutation (germline)\": [\"KRAS Mutation\"], \"Microsatellite Stable (MSS)\": [\"Microsatellite Stable (MSS)\"]}",
		"gender": "Female",
		"institution": null,
		"lab_uuids": [
			"10edec98-85d0-47a8-b395-3bf1b5f72285"
		],
		"line_of_therapy": [
			"1"
		],
		"patient_mrn_hash": "7175337284524d397d1738db6f34ab60",
		"patient_uuid": "11aeb3a4-4097-483a-9113-206339609c53",
		"positive_alterations": [
			"KRAS Mutation",
			"KRAS Codon 12 Mutation",
			"Microsatellite Stable (MSS)"
		],
		"sample_uuids": [
			"ebc93945-914b-4923-943a-27664aff43c9"
		],
		"selected_lab_uuids": null,
		"specific_diseases": [
			"Colon Cancer"
		],
		"stages": [
			"Stage IIIB"
		],
		"updated": "2023-05-15T19:06:44-04:00",
		"uuid": "69dcf01c-9cfb-4ffc-aedb-66551ab00862",
		"case__numeric_stages__mint": [
			3020
		],
		"case__diagnosis_groups__mstring": [
			"colorectal cancers (all types)"
		],
		"score": 35,
		"_refs": {
			"detail": "/api/cases/69dcf01c-9cfb-4ffc-aedb-66551ab00862"
		},
		"patient_mrn": "8177304",
		"identifier": null,
		"treatments": [
			"fluorouracil - oxaliplatin"
		],
		"drug_types": "",
		"oncologic_treatment_objects": [
			{
				"drugs": "fluorouracil - oxaliplatin",
				"line_of_therapy": "1",
				"drug_types": "chemotherapy",
				"time_on_therapy": 863,
				"time_off_therapy": 0,
				"time_to_progression": 863,
				"time_approximated": false
			}
		],
		"comorbidities": [
			"psoriasis",
			"neutropenia",
			"anemia - other",
			"vitamin b deficiency",
			"anemia - iron deficiency",
			"dehydration or hypovolemia"
		],
		"neg_alts": [
			"BRAF Mutation",
			"NRAS Mutation"
		],
		"alts": [
			"KRAS Mutation",
			"KRAS Codon 12 Mutation",
			"Microsatellite Stable (MSS)"
		],
		"percent_match": 58,
		"negative_alterations": [
			"NRAS Mutation",
			"BRAF Mutation"
		],
		"race": [
			"White"
		],
		"case__edema__string": null,
		"case__sinusitis__string": null,
		"case__bronchitis__string": null,
		"case__hemoptysis__string": null,
		"case__neutropenia__string": "ICD10: D70.1",
		"case__otherinjury__string": null,
		"case__herpeszoster__string": null,
		"case__nauseaandvomiting__string": null,
		"case__shortnessofbreath__string": null,
		"case__hemorrhagicdisorder__string": null,
		"case__dehydrationorhypovolemia__string": null,
		"case__humoralimmunitydeficiency__string": null,
		"case__lymphomaHodgkinsadult__string": null,
		"case__lowerurinarytractinfection__string": null,
		"case__otherupperrespiratoryinfection__string": null,
		"alteration_groups": [
			"MAPK Pathway Alterations: NCCN Histiocytic Neoplasms",
			"MAPK Pathway Group",
			"RAF/RAS/MEK Pathway Alterations",
			"NCT02873975: Alterations Indicating Replicative Stress",
			"NCT03634982: ALL(NRAS Mutation, NONE(NRAS G12A/C))",
			"MSS/pMMR Group"
		],
		"case__anemiaother__string": null,
		"case__prostatecancer__mstring": null,
		"case__multiplemyeloma__mstring": null,
		"case__polycythemiavera__string": null,
		"case__anemiairondeficiency__string": null,
		"case__bladderurinarycarcinoma__mstring": null,
		"case__lungcancernonsmallcell__mstring": null
	},
	{
		"age_in_months": 553,
		"alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"NRAS Mutation",
			"BRAF Mutation"
		],
		"canonical_alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"KRAS Mutation (somatic)",
			"BRAF Mutation",
			"KRAS Mutation (germline)"
		],
		"cdw_associated": false,
		"created": "2023-05-15T18:37:46-04:00",
		"data_set": "clinical",
		"drugs": [
			"bevacizumab - bevacizumab-awwb - oxaliplatin",
			"bevacizumab-awwb - capecitabine",
			"capecitabine - fluorouracil - irinotecan",
			"bevacizumab - capecitabine - fluorouracil - oxaliplatin",
			"capecitabine",
			"bevacizumab - capecitabine - oxaliplatin",
			"bevacizumab - oxaliplatin"
		],
		"explosion_map_by_alteration": "{\"KRAS Mutation\": [\"KRAS Mutation\"], \"KRAS Mutation (somatic)\": [\"KRAS Mutation\"], \"KRAS Mutation (germline)\": [\"KRAS Mutation\"], \"Microsatellite Stable (MSS)\": [\"Microsatellite Stable (MSS)\"], \"BRAF Mutation\": [\"BRAF Mutation\"]}",
		"gender": "Female",
		"institution": null,
		"lab_uuids": [
			"3a1e83dc-bcee-44b8-8dd9-7760c22dc211"
		],
		"line_of_therapy": [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10"
		],
		"patient_mrn_hash": "766e736818680cafa0f4c6403e410083",
		"patient_uuid": "e98f48f2-f421-4752-962e-410c14754a07",
		"positive_alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"BRAF Mutation"
		],
		"sample_uuids": [
			"fc49252b-0ae9-48f3-b32a-b4b63a554466"
		],
		"selected_lab_uuids": null,
		"specific_diseases": [
			"Colon Cancer"
		],
		"stages": [
			"Stage IV"
		],
		"updated": "2023-05-15T18:37:46-04:00",
		"uuid": "8ba0cf5a-9223-4873-8ba4-a120ee0cd506",
		"case__numeric_stages__mint": [
			4000
		],
		"case__diagnosis_groups__mstring": [
			"colorectal cancers (all types)"
		],
		"score": 35,
		"_refs": {
			"detail": "/api/cases/8ba0cf5a-9223-4873-8ba4-a120ee0cd506"
		},
		"patient_mrn": "5170943",
		"identifier": null,
		"treatments": [
			"bevacizumab - capecitabine - fluorouracil - oxaliplatin",
			"capecitabine",
			"bevacizumab - capecitabine - oxaliplatin",
			"bevacizumab - oxaliplatin",
			"bevacizumab - capecitabine - oxaliplatin",
			"bevacizumab - oxaliplatin",
			"bevacizumab - capecitabine - oxaliplatin",
			"bevacizumab - bevacizumab-awwb - oxaliplatin",
			"bevacizumab-awwb - capecitabine",
			"capecitabine - fluorouracil - irinotecan"
		],
		"drug_types": "",
		"oncologic_treatment_objects": [
			{
				"drugs": "bevacizumab - capecitabine - fluorouracil - oxaliplatin",
				"line_of_therapy": "1",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 159,
				"time_off_therapy": 1,
				"time_to_progression": 160,
				"time_approximated": false
			},
			{
				"drugs": "capecitabine",
				"line_of_therapy": "2",
				"drug_types": "chemotherapy",
				"time_on_therapy": 290,
				"time_off_therapy": 28,
				"time_to_progression": 318,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - capecitabine - oxaliplatin",
				"line_of_therapy": "3",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 53,
				"time_off_therapy": 1,
				"time_to_progression": 54,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - oxaliplatin",
				"line_of_therapy": "4",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 77,
				"time_off_therapy": 35,
				"time_to_progression": 112,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - capecitabine - oxaliplatin",
				"line_of_therapy": "5",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 55,
				"time_off_therapy": 22,
				"time_to_progression": 77,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - oxaliplatin",
				"line_of_therapy": "6",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 68,
				"time_off_therapy": 1,
				"time_to_progression": 69,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - capecitabine - oxaliplatin",
				"line_of_therapy": "7",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 80,
				"time_off_therapy": 87,
				"time_to_progression": 167,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - bevacizumab-awwb - oxaliplatin",
				"line_of_therapy": "8",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 156,
				"time_off_therapy": 21,
				"time_to_progression": 177,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab-awwb - capecitabine",
				"line_of_therapy": "9",
				"drug_types": "chemotherapy",
				"time_on_therapy": 152,
				"time_off_therapy": 2,
				"time_to_progression": 154,
				"time_approximated": false
			},
			{
				"drugs": "capecitabine - fluorouracil - irinotecan",
				"line_of_therapy": "10",
				"drug_types": "chemotherapy",
				"time_on_therapy": 19,
				"time_off_therapy": 17,
				"time_to_progression": 36,
				"time_approximated": false
			}
		],
		"comorbidities": [
			"hypokalemia",
			"neutropenia",
			"bone fracture",
			"anemia - other",
			"nausea and vomiting",
			"vitamin a deficiency",
			"anemia - iron deficiency",
			"pain not otherwise classified",
			"other general symptoms or findings",
			"human immunodeficiency virus disease",
			"menopause and postmenopause disorders"
		],
		"neg_alts": [
			"NRAS Mutation"
		],
		"alts": [
			"BRAF Mutation",
			"Microsatellite Stable (MSS)",
			"KRAS Mutation"
		],
		"percent_match": 58,
		"negative_alterations": [
			"NRAS Mutation"
		],
		"race": [
			"Black"
		],
		"case__edema__string": null,
		"case__sinusitis__string": null,
		"case__bronchitis__string": null,
		"case__hemoptysis__string": null,
		"case__neutropenia__string": "ICD10: D70.1",
		"case__otherinjury__string": null,
		"case__herpeszoster__string": null,
		"case__nauseaandvomiting__string": null,
		"case__shortnessofbreath__string": null,
		"case__hemorrhagicdisorder__string": null,
		"case__dehydrationorhypovolemia__string": null,
		"case__humoralimmunitydeficiency__string": null,
		"case__lymphomaHodgkinsadult__string": null,
		"case__lowerurinarytractinfection__string": null,
		"case__otherupperrespiratoryinfection__string": null,
		"alteration_groups": [
			"MAPK Pathway Alterations: NCCN Histiocytic Neoplasms",
			"MAPK Pathway Group",
			"RAF/RAS/MEK Pathway Alterations",
			"NCT02873975: Alterations Indicating Replicative Stress",
			"NCT03634982: ALL(NRAS Mutation, NONE(NRAS G12A/C))",
			"MSS/pMMR Group"
		],
		"case__anemiaother__string": null,
		"case__prostatecancer__mstring": null,
		"case__multiplemyeloma__mstring": null,
		"case__polycythemiavera__string": null,
		"case__anemiairondeficiency__string": null,
		"case__bladderurinarycarcinoma__mstring": null,
		"case__lungcancernonsmallcell__mstring": null
	},
	{
		"age_in_months": 1181,
		"alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"NRAS Mutation",
			"BRAF Mutation"
		],
		"canonical_alterations": [
			"KRAS Mutation",
			"NRAS Mutation (somatic)",
			"Microsatellite Stable (MSS)",
			"KRAS Mutation (somatic)",
			"NRAS Mutation (germline)",
			"KRAS Mutation (germline)",
			"NRAS Mutation"
		],
		"cdw_associated": false,
		"created": "2023-05-15T19:06:45-04:00",
		"data_set": "clinical",
		"drugs": [
			"capecitabine",
			"carboplatin - pembrolizumab - pemetrexed",
			"pembrolizumab",
			"osimertinib",
			"irinotecan"
		],
		"explosion_map_by_alteration": "{\"KRAS Mutation\": [\"KRAS Mutation\"], \"KRAS Mutation (somatic)\": [\"KRAS Mutation\"], \"KRAS Mutation (germline)\": [\"KRAS Mutation\"], \"Microsatellite Stable (MSS)\": [\"Microsatellite Stable (MSS)\"], \"NRAS Mutation\": [\"NRAS Mutation\"], \"NRAS Mutation (somatic)\": [\"NRAS Mutation\"], \"NRAS Mutation (germline)\": [\"NRAS Mutation\"]}",
		"gender": "Female",
		"institution": null,
		"lab_uuids": [
			"23be82bf-68ab-4cc8-a498-dc607eff61c0"
		],
		"line_of_therapy": [
			"1",
			"1",
			"2",
			"2",
			"3",
			"4"
		],
		"patient_mrn_hash": "3ef5d7a1cd879719f22a92ae731b6742",
		"patient_uuid": "41c8dc19-26e5-4be7-b010-d5200c74dafd",
		"positive_alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"NRAS Mutation"
		],
		"sample_uuids": [
			"b3b3dd5c-cc37-4d1e-bc72-515109930c89"
		],
		"selected_lab_uuids": null,
		"specific_diseases": [
			"Lung Cancer (Non-Small Cell)",
			"Colon Cancer"
		],
		"stages": [
			"Stage IIIB",
			"Stage IVA"
		],
		"updated": "2023-05-15T19:06:45-04:00",
		"uuid": "bc4c6930-9c9a-4947-8ffc-3d3f0c80e223",
		"case__numeric_stages__mint": [
			4010,
			3020
		],
		"case__diagnosis_groups__mstring": [
			"lung cancer (non-small cell)",
			"colorectal cancers (all types)"
		],
		"score": 35,
		"_refs": {
			"detail": "/api/cases/bc4c6930-9c9a-4947-8ffc-3d3f0c80e223"
		},
		"patient_mrn": "943245",
		"identifier": null,
		"treatments": [
			"capecitabine",
			"carboplatin - pembrolizumab - pemetrexed",
			"pembrolizumab",
			"osimertinib",
			"irinotecan",
			"capecitabine"
		],
		"drug_types": "",
		"oncologic_treatment_objects": [
			{
				"drugs": "capecitabine",
				"line_of_therapy": "1",
				"drug_types": "chemotherapy",
				"time_on_therapy": 50,
				"time_off_therapy": 560,
				"time_to_progression": 610,
				"time_approximated": false
			},
			{
				"drugs": "carboplatin - pembrolizumab - pemetrexed",
				"line_of_therapy": "1",
				"drug_types": "immunotherapy - chemotherapy",
				"time_on_therapy": 32,
				"time_off_therapy": -591,
				"time_to_progression": -559,
				"time_approximated": false
			},
			{
				"drugs": "pembrolizumab",
				"line_of_therapy": "2",
				"drug_types": "immunotherapy",
				"time_on_therapy": 126,
				"time_off_therapy": 504,
				"time_to_progression": 630,
				"time_approximated": false
			},
			{
				"drugs": "osimertinib",
				"line_of_therapy": "2",
				"drug_types": "targeted therapy",
				"time_on_therapy": 290,
				"time_off_therapy": -752,
				"time_to_progression": -462,
				"time_approximated": false
			},
			{
				"drugs": "irinotecan",
				"line_of_therapy": "3",
				"drug_types": "chemotherapy",
				"time_on_therapy": 112,
				"time_off_therapy": 16,
				"time_to_progression": 128,
				"time_approximated": false
			},
			{
				"drugs": "capecitabine",
				"line_of_therapy": "4",
				"drug_types": "chemotherapy",
				"time_on_therapy": 54,
				"time_off_therapy": 0,
				"time_to_progression": 54,
				"time_approximated": false
			}
		],
		"comorbidities": [
			"gout",
			"asthma",
			"obesity",
			"pleurisy",
			"weight loss",
			"heart failure",
			"anemia - other",
			"hypothyroidism",
			"atherosclerosis",
			"lymphadenopathy",
			"pulmonary embolism",
			"esophageal disorder",
			"hemorrhagic disorder",
			"poisoning or toxicity",
			"embolism or thrombosis",
			"anemia - iron deficiency",
			"gastrointestinal bleeding",
			"lipid metabolism disorder",
			"other intestinal disorder",
			"dehydration or hypovolemia",
			"other general symptoms or findings"
		],
		"neg_alts": [
			"BRAF Mutation"
		],
		"alts": [
			"KRAS Mutation",
			"NRAS Mutation",
			"Microsatellite Stable (MSS)"
		],
		"percent_match": 58,
		"negative_alterations": [
			"BRAF Mutation"
		],
		"race": [
			"White"
		],
		"case__edema__string": null,
		"case__sinusitis__string": null,
		"case__bronchitis__string": null,
		"case__hemoptysis__string": null,
		"case__neutropenia__string": null,
		"case__otherinjury__string": null,
		"case__herpeszoster__string": null,
		"case__nauseaandvomiting__string": null,
		"case__shortnessofbreath__string": null,
		"case__hemorrhagicdisorder__string": null,
		"case__dehydrationorhypovolemia__string": null,
		"case__humoralimmunitydeficiency__string": null,
		"case__lymphomaHodgkinsadult__string": null,
		"case__lowerurinarytractinfection__string": null,
		"case__otherupperrespiratoryinfection__string": null,
		"alteration_groups": [
			"MAPK Pathway Alterations: NCCN Histiocytic Neoplasms",
			"MAPK Pathway Group",
			"RAF/RAS/MEK Pathway Alterations",
			"NCT02873975: Alterations Indicating Replicative Stress",
			"NCT03634982: ALL(NRAS Mutation, NONE(NRAS G12A/C))",
			"MSS/pMMR Group"
		],
		"case__anemiaother__string": null,
		"case__prostatecancer__mstring": null,
		"case__multiplemyeloma__mstring": null,
		"case__polycythemiavera__string": null,
		"case__anemiairondeficiency__string": null,
		"case__bladderurinarycarcinoma__mstring": null,
		"case__lungcancernonsmallcell__mstring": null
	},
	{
		"age_in_months": 587,
		"alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"NRAS Mutation",
			"BRAF Mutation"
		],
		"canonical_alterations": [
			"KRAS Mutation",
			"KRAS Mutation (germline)",
			"Microsatellite Stable (MSS)",
			"KRAS Mutation (somatic)"
		],
		"cdw_associated": false,
		"created": "2023-05-15T21:03:18-04:00",
		"data_set": "clinical",
		"drugs": [
			"bevacizumab",
			"bevacizumab - capecitabine - oxaliplatin",
			"bevacizumab-bvzr - trifluridine-tipiracil",
			"capecitabine",
			"capecitabine - trifluridine-tipiracil",
			"bevacizumab - irinotecan",
			"bevacizumab - capecitabine"
		],
		"explosion_map_by_alteration": "{\"KRAS Mutation\": [\"KRAS Mutation\"], \"KRAS Mutation (somatic)\": [\"KRAS Mutation\"], \"KRAS Mutation (germline)\": [\"KRAS Mutation\"], \"Microsatellite Stable (MSS)\": [\"Microsatellite Stable (MSS)\"]}",
		"gender": "Female",
		"institution": null,
		"lab_uuids": [
			"232f91c3-8592-4e94-ad1c-6ae8658451a9"
		],
		"line_of_therapy": [
			"1",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10"
		],
		"patient_mrn_hash": "4e6cac9369ece1ffdbcae0999b18c751",
		"patient_uuid": "76c9d223-60d5-437e-a11b-04298325c1c2",
		"positive_alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)"
		],
		"sample_uuids": [
			"57756e42-a55b-4a26-b3b3-f0b46d944dfa"
		],
		"selected_lab_uuids": null,
		"specific_diseases": [
			"Colon Cancer"
		],
		"stages": [
			"Stage IIIB"
		],
		"updated": "2023-05-15T21:03:18-04:00",
		"uuid": "3a482f6d-45f0-45ac-ba70-7998fc6dfb57",
		"case__numeric_stages__mint": [
			3020
		],
		"case__diagnosis_groups__mstring": [
			"colorectal cancers (all types)"
		],
		"score": 35,
		"_refs": {
			"detail": "/api/cases/3a482f6d-45f0-45ac-ba70-7998fc6dfb57"
		},
		"patient_mrn": "8455720",
		"identifier": null,
		"treatments": [
			"capecitabine",
			"capecitabine",
			"capecitabine - trifluridine-tipiracil",
			"bevacizumab - irinotecan",
			"bevacizumab",
			"capecitabine",
			"bevacizumab",
			"bevacizumab - capecitabine",
			"bevacizumab",
			"bevacizumab - capecitabine - oxaliplatin",
			"bevacizumab-bvzr - trifluridine-tipiracil"
		],
		"drug_types": "",
		"oncologic_treatment_objects": [
			{
				"drugs": "capecitabine",
				"line_of_therapy": "1",
				"drug_types": "chemotherapy",
				"time_on_therapy": 733,
				"time_off_therapy": 140,
				"time_to_progression": 873,
				"time_approximated": false
			},
			{
				"drugs": "capecitabine",
				"line_of_therapy": "1",
				"drug_types": "chemotherapy",
				"time_on_therapy": 122,
				"time_off_therapy": 1,
				"time_to_progression": 123,
				"time_approximated": false
			},
			{
				"drugs": "capecitabine - trifluridine-tipiracil",
				"line_of_therapy": "2",
				"drug_types": "chemotherapy",
				"time_on_therapy": 223,
				"time_off_therapy": 1,
				"time_to_progression": 224,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - irinotecan",
				"line_of_therapy": "3",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 202,
				"time_off_therapy": 29,
				"time_to_progression": 231,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab",
				"line_of_therapy": "4",
				"drug_types": "targeted therapy",
				"time_on_therapy": 91,
				"time_off_therapy": 1,
				"time_to_progression": 92,
				"time_approximated": false
			},
			{
				"drugs": "capecitabine",
				"line_of_therapy": "5",
				"drug_types": "chemotherapy",
				"time_on_therapy": 26,
				"time_off_therapy": 1,
				"time_to_progression": 27,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab",
				"line_of_therapy": "6",
				"drug_types": "targeted therapy",
				"time_on_therapy": 57,
				"time_off_therapy": 1,
				"time_to_progression": 58,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - capecitabine",
				"line_of_therapy": "7",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 61,
				"time_off_therapy": 2,
				"time_to_progression": 63,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab",
				"line_of_therapy": "8",
				"drug_types": "targeted therapy",
				"time_on_therapy": 156,
				"time_off_therapy": 1,
				"time_to_progression": 157,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab - capecitabine - oxaliplatin",
				"line_of_therapy": "9",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 127,
				"time_off_therapy": 1,
				"time_to_progression": 128,
				"time_approximated": false
			},
			{
				"drugs": "bevacizumab-bvzr - trifluridine-tipiracil",
				"line_of_therapy": "10",
				"drug_types": "",
				"time_on_therapy": 136,
				"time_off_therapy": 0,
				"time_to_progression": 136,
				"time_approximated": false
			}
		],
		"comorbidities": [
			"lumbago",
			"diarrhea",
			"depression",
			"neutropenia",
			"weight loss",
			"elevated CEA",
			"hypertension",
			"other injury",
			"abdominal mass",
			"sleep disorder",
			"malaise and fatigue",
			"nausea and vomiting",
			"hemorrhagic disorder",
			"dehydration or hypovolemia",
			"abdominal pain or tenderness",
			"other general symptoms or findings"
		],
		"neg_alts": [
			"NRAS Mutation",
			"BRAF Mutation"
		],
		"alts": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)"
		],
		"percent_match": 58,
		"negative_alterations": [
			"NRAS Mutation",
			"BRAF Mutation"
		],
		"race": [
			"White"
		],
		"case__edema__string": null,
		"case__sinusitis__string": null,
		"case__bronchitis__string": null,
		"case__hemoptysis__string": null,
		"case__neutropenia__string": "ICD10: D70.1",
		"case__otherinjury__string": null,
		"case__herpeszoster__string": null,
		"case__nauseaandvomiting__string": null,
		"case__shortnessofbreath__string": null,
		"case__hemorrhagicdisorder__string": null,
		"case__dehydrationorhypovolemia__string": null,
		"case__humoralimmunitydeficiency__string": null,
		"case__lymphomaHodgkinsadult__string": null,
		"case__lowerurinarytractinfection__string": null,
		"case__otherupperrespiratoryinfection__string": null,
		"alteration_groups": [
			"MAPK Pathway Alterations: NCCN Histiocytic Neoplasms",
			"MAPK Pathway Group",
			"RAF/RAS/MEK Pathway Alterations",
			"NCT02873975: Alterations Indicating Replicative Stress",
			"NCT03634982: ALL(NRAS Mutation, NONE(NRAS G12A/C))",
			"MSS/pMMR Group"
		],
		"case__anemiaother__string": null,
		"case__prostatecancer__mstring": null,
		"case__multiplemyeloma__mstring": null,
		"case__polycythemiavera__string": null,
		"case__anemiairondeficiency__string": null,
		"case__bladderurinarycarcinoma__mstring": null,
		"case__lungcancernonsmallcell__mstring": null
	},
	{
		"age_in_months": 420,
		"alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"NRAS Mutation"
		],
		"canonical_alterations": [
			"KRAS Mutation",
			"NRAS Mutation (somatic)",
			"Microsatellite Stable (MSS)",
			"KRAS Mutation (somatic)",
			"NRAS Mutation (germline)",
			"KRAS Mutation (germline)",
			"NRAS Mutation"
		],
		"cdw_associated": false,
		"created": "2023-05-15T21:03:16-04:00",
		"data_set": "clinical",
		"drugs": [
			"bevacizumab - bevacizumab-awwb - fluorouracil - oxaliplatin"
		],
		"explosion_map_by_alteration": "{\"KRAS Mutation\": [\"KRAS Mutation\"], \"KRAS Mutation (somatic)\": [\"KRAS Mutation\"], \"KRAS Mutation (germline)\": [\"KRAS Mutation\"], \"Microsatellite Stable (MSS)\": [\"Microsatellite Stable (MSS)\"], \"NRAS Mutation\": [\"NRAS Mutation\"], \"NRAS Mutation (somatic)\": [\"NRAS Mutation\"], \"NRAS Mutation (germline)\": [\"NRAS Mutation\"]}",
		"gender": "Female",
		"institution": null,
		"lab_uuids": [
			"f04b84ab-8cca-4088-a0a2-f3ccb5ec6cec"
		],
		"line_of_therapy": [
			"1"
		],
		"patient_mrn_hash": "1ca98f85c4f90e874d21556aec80f283",
		"patient_uuid": "d8114462-3364-4689-8420-95b30bfc0d82",
		"positive_alterations": [
			"KRAS Mutation",
			"Microsatellite Stable (MSS)",
			"NRAS Mutation"
		],
		"sample_uuids": [
			"87062e78-e986-4220-b445-f770a124f2cc"
		],
		"selected_lab_uuids": null,
		"specific_diseases": [
			"Colon Cancer"
		],
		"stages": [
			"Stage IVA"
		],
		"updated": "2023-05-15T21:03:16-04:00",
		"uuid": "87039014-eba3-40a7-9f92-03708d59597d",
		"case__numeric_stages__mint": [
			4010
		],
		"case__diagnosis_groups__mstring": [
			"colorectal cancers (all types)"
		],
		"score": 35,
		"_refs": {
			"detail": "/api/cases/87039014-eba3-40a7-9f92-03708d59597d"
		},
		"patient_mrn": "6753371",
		"identifier": null,
		"treatments": [
			"bevacizumab - bevacizumab-awwb - fluorouracil - oxaliplatin"
		],
		"drug_types": "",
		"oncologic_treatment_objects": [
			{
				"drugs": "bevacizumab - bevacizumab-awwb - fluorouracil - oxaliplatin",
				"line_of_therapy": "1",
				"drug_types": "targeted therapy - chemotherapy",
				"time_on_therapy": 196,
				"time_off_therapy": 105,
				"time_to_progression": 301,
				"time_approximated": false
			}
		],
		"comorbidities": [
			"neutropenia",
			"anemia - iron deficiency",
			"dehydration or hypovolemia",
			"pain not otherwise classified",
			"other general symptoms or findings"
		],
		"neg_alts": [],
		"alts": [
			"KRAS Mutation",
			"NRAS Mutation",
			"Microsatellite Stable (MSS)"
		],
		"percent_match": 58,
		"negative_alterations": null,
		"race": [
			"Other"
		],
		"case__edema__string": null,
		"case__sinusitis__string": null,
		"case__bronchitis__string": null,
		"case__hemoptysis__string": null,
		"case__neutropenia__string": "ICD10: D70.1",
		"case__otherinjury__string": null,
		"case__herpeszoster__string": null,
		"case__nauseaandvomiting__string": null,
		"case__shortnessofbreath__string": null,
		"case__hemorrhagicdisorder__string": null,
		"case__dehydrationorhypovolemia__string": null,
		"case__humoralimmunitydeficiency__string": null,
		"case__lymphomaHodgkinsadult__string": null,
		"case__lowerurinarytractinfection__string": null,
		"case__otherupperrespiratoryinfection__string": null,
		"alteration_groups": [
			"MAPK Pathway Alterations: NCCN Histiocytic Neoplasms",
			"MAPK Pathway Group",
			"NCT02873975: Alterations Indicating Replicative Stress",
			"RAF/RAS/MEK Pathway Alterations",
			"NCT03634982: ALL(NRAS Mutation, NONE(NRAS G12A/C))",
			"MSS/pMMR Group"
		],
		"case__anemiaother__string": null,
		"case__prostatecancer__mstring": null,
		"case__multiplemyeloma__mstring": null,
		"case__polycythemiavera__string": null,
		"case__anemiairondeficiency__string": null,
		"case__bladderurinarycarcinoma__mstring": null,
		"case__lungcancernonsmallcell__mstring": null
	}
]

export default likeMineData;