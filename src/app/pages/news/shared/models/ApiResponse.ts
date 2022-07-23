import { New } from "./New"

export interface ApiResponse {
	exhaustiveNbHits: boolean
	exhaustiveTypo: boolean
	hits: New[]
	hitsPerPage: number
	nbHits: number
	nbPages: number
	page: number
	params: string
	processingTimeMS: number
	query: string
}