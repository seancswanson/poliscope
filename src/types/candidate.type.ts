export type Candidate = {
	name: string;
	party: string;
	current_position: string;
	election_date: string;
	announcement_date: string;
	past_roles: PastRole[];
	quote: string;
	key_legislation_or_accomplishments: string[];
	running_mate_2020: string;
	key_policy_points: string[];
	policy_perspectives: PolicyPerspective;
	biography: Biography;
	social_media: SocialMedia;
};

export interface PastRole {
	role: string;
	start_year: number;
	end_year: number;
}

export interface Biography {
	birth_year: number;
	birth_place: string;
	education: string[];
}

export interface PolicyPerspective {
	left_leaning: string;
	centrist: string;
	right_leaning: string;
}

export interface SocialMedia {
	website: string;
	facebook: string;
	twitter: string;
	instagram: string;
	youtube: string;
}
