<script>
	import PageCandidateCard from './PageCandidateCard.svelte';
	import CandidateQuickFacts from './CandidateQuickFacts.svelte';
	import PoliscopeAnalysis from './PoliscopeAnalysis.svelte';
	import WikipediaBiography from './WikipediaBiography.svelte';
	import link from '$lib/assets/link.png';
	/** @type {import('./$types').PageData} */
	export let data;

	const candidate = data.candidate;
	const wikipediaPageData = data.wikipediaPageData;

	function searchCandidateInfo(query) {
		const baseUrl = 'https://www.google.com/search?q=';
		const candidateName = candidate.name.replace(/\s+/g, '+');
		const fullQuery = `${baseUrl}${query}+${candidateName}`;
		window.open(fullQuery, '_blank');
	}
</script>

{#if candidate.name}
	<a
		href="/candidates"
		id="back-btn"
		class="flex w-fit px-4 text-blue-600 hover:bg-blue-500 transition-all hover:translate-y-[-2px] hover:text-white mb-4 shadow-neo bg-white border-[1.5px] border-black rounded"
		>← Back to candidates</a
	>
	<section class="flex flex-col mb-4 gap-4">
		<PageCandidateCard {candidate} />
		<CandidateQuickFacts {candidate} />
	</section>

	<section class="mb-6">
		<PoliscopeAnalysis {candidate} />
	</section>

	<!-- Biography -->
	<section class="mb-8">
		<WikipediaBiography {wikipediaPageData} {candidate} />
	</section>

	<section class="flex flex-col items-center justify-center">
		<h2 class="font-[600] text-2xl mb-3">Learn More About {candidate.name}</h2>
		<p class="mb-2 text-xs italic text-center">
			These links open a Google search query in a new tab for further research.
		</p>

		<div class="text-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
			<button
				class="shadow-neo border-black border-[1.5px] px-4 py-2 items-center justify-center rounded bg-white hover:translate-y-[-2px] hover:bg-gray-100 transition flex gap-2 group"
				on:click={() => searchCandidateInfo('key+political+positions')}
			>
				Key Political Positions <img
					src={link}
					alt="link"
					class="w-[12px] h-[12px] inline opacity-50 group-hover:opacity-100"
				/>
			</button>
			<button
				class="shadow-neo border-black border-[1.5px] px-4 py-2 items-center justify-center rounded bg-white hover:translate-y-[-2px] hover:bg-gray-100 transition flex gap-2 group"
				on:click={() => searchCandidateInfo('voting+record+and+legislative+history')}
			>
				Voting Record and Legislative History <img
					src={link}
					alt="link"
					class="w-[12px] h-[12px] inline opacity-50 group-hover:opacity-100"
				/>
			</button>
			<button
				class="shadow-neo border-black border-[1.5px] px-4 py-2 items-center justify-center rounded bg-white hover:translate-y-[-2px] hover:bg-gray-100 transition flex gap-2 group"
				on:click={() => searchCandidateInfo('major+criticisms+and+controversies')}
			>
				Major Criticisms and Controversies <img
					src={link}
					alt="link"
					class="w-[12px] h-[12px] inline opacity-50 group-hover:opacity-100"
				/>
			</button>
			<button
				class="shadow-neo border-black border-[1.5px] px-4 py-2 items-center justify-center rounded bg-white hover:translate-y-[-2px] hover:bg-gray-100 transition flex gap-2 group"
				on:click={() => searchCandidateInfo('campaign+endorsements')}
			>
				Endorsements <img
					src={link}
					alt="link"
					class="w-[12px] h-[12px] inline opacity-50 group-hover:opacity-100"
				/>
			</button>
		</div>
	</section>
{:else}
	<div>Loading...</div>
{/if}
