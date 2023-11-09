import { candidates } from '$lib/data/candidates.json';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const { slug } = params;
	const candidate = candidates.find((candidate) => candidate.slug === slug);

	if (!candidate) {
		return { status: 404, body: 'Candidate not found' };
	}

	const res = await fetch('/api/candidate-data?name=' + candidate.name);
	const wikipediaPageData = await res.json();
	return {
		candidate,
		wikipediaPageData
	};
}
