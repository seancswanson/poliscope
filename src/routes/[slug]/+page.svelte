<script>
	import PageCandidateCard from './PageCandidateCard.svelte';
	import CandidateQuickFacts from './CandidateQuickFacts.svelte';
	import PoliscopeAnalysis from './PoliscopeAnalysis.svelte';
	import WikipediaBiography from './WikipediaBiography.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const candidate = data.candidate;
	const wikipediaPageData = data.wikipediaPageData;
</script>

{#if candidate.name}
	<a
		href="/candidates"
		id="back-btn"
		class="flex w-fit px-4 text-blue-500 hover:underline mb-4 shadow-neo bg-white border-[1.5px] border-black rounded"
		>← Back to candidates</a
	>
	<section class="flex gap-4 flex-col sm:flex-row mb-4">
		<PageCandidateCard {candidate} />
		<CandidateQuickFacts {candidate} />
	</section>

	<section class="mb-6">
		<PoliscopeAnalysis {candidate} />
	</section>

	<!-- Biography -->
	<section class="mb-6">
		<WikipediaBiography {wikipediaPageData} {candidate} />
	</section>

	<!-- Social Media Links -->
	<section
		class="mb-6 shadow-neo border-[1.5px] border-black rounded p-2 flex flex-col justify-center items-center"
	>
		<h2 class="font-[600] text-2xl mb-3">Connect with {candidate.name}</h2>
		<ul class="flex gap-4">
			{#each Object.entries(candidate.social_media) as [platform, link]}
				{#if link}
					{@const portraitImgUrl = `/social/${platform}.png`}

					<li class="shadow-sm px-2 mb-2">
						<a href={link} class="text-blue-500 hover:underline flex items-center gap-2">
							<img src={portraitImgUrl} alt={`${platform} logo`} class="w-8 h-8" />
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</section>
{:else}
	<div>Loading...</div>
{/if}
