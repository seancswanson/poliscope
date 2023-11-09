// get from wikipedia simple api that gets a slug from the URL param
// and returns the wikipedia page data for that candidate

import { page } from '$app/stores';

function getSpecialWikipediaSlug(name) {
	const specialNames = {
		'Perry Johnson': 'Perry_Johnson_(businessman)',
		'William Hurd': 'Will_Hurd'
		// Add more special cases here
	};
	return specialNames[name] || null;
}

function normalizeWikipediaSlug(name) {
	const parts = name.split(' ');
	const wikipediaSlug = parts.join('_');
	return wikipediaSlug;
}

function generateWikipediaURL(name) {
	const wikipediaName = getSpecialWikipediaSlug(name) || normalizeWikipediaSlug(name);
	return `https://simple.wikipedia.org/w/api.php?action=query&format=json&titles=${wikipediaName}&prop=extracts&exintro=true`;
}

export const GET = async ({ request, url }) => {
	const name = url.searchParams.get('name');
	const wikipediaURL = generateWikipediaURL(name);
	const res = await fetch(wikipediaURL);
	const data = await res.json().then((value) => value.query.pages);
	const pageId = Object.keys(data)[0];
	const pageExtract = data[pageId].extract;
	let sanitizedWikipediaExtract = pageExtract.replace(/<!--[\s\S]*$/, '');

	return new Response(JSON.stringify(sanitizedWikipediaExtract), {
		headers: {
			'content-type': 'application/json'
		}
	});
};
