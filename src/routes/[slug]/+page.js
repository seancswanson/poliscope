import { candidates } from '$lib/data/candidates.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	console.log(params);
	const { slug } = params;
	const candidate = candidates.find((candidate) => candidate.slug === slug);
	return {
		candidate
	};
}
