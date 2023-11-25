import { candidates } from '$lib/data/candidates.json';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const { slug } = params;
	const candidate = candidates.find((candidate) => candidate.slug === slug);
	console.log(candidate);
	console.log('hi');
	if (!candidate) {
		return { status: 404, body: 'Candidate not found' };
	}

	const res = await fetch('../api/candidate-data?name=' + candidate.name);
	if (!res.ok) {
		console.error('Failed to fetch candidate data:', res.status);
		return { status: 500, body: 'Error fetching candidate data' };
	}
	const wikipediaPageData = await res.json();
	return {
		candidate,
		wikipediaPageData
	};
}
