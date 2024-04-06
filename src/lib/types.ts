interface Role {
	role: string;
	start_year: number | string | null;
	end_year: number | string | null;
}

interface PolicyPerspectives {
	left_leaning: string;
	centrist: string;
	right_leaning: string;
}

interface Biography {
	birth_year: number;
	birth_place: string;
	education: string[];
}

export interface Candidate {
	name: string;
	slug: string;
	withdrawn: boolean;
	party: string;
	current_position: string;
	announcement_date: string;
	past_roles: Role[];
	quote: string;
	policy_perspectives: PolicyPerspectives;
	biography: Biography;
}
