export interface New {
	author: string;
	comment_text: string;
	created_at: string;
	created_at_i: number
	num_comments: number | null
	objectID: string
	parent_id: number
	points: any
	story_id: number
	story_text: string | null
	story_title: string
	story_url: string
	title: string | null
	url: string | null,
	like:boolean
}