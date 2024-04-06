<script lang="ts">
	import type { Candidate } from '$lib/types';
	export let filteredCandidates: Candidate[], status: string, selectedParty: string;
	import CandidateCard from './CandidateCard.svelte';

	$: emptyMessage = getEmptyMessage(selectedParty, status);

	function getEmptyMessage(party: string, currentStatus: string) {
		if (party === 'All') {
			return 'No candidates match this filter.';
		}
		return currentStatus === 'Currently Running'
			? `No ${party} party candidates are currently running.`
			: `No ${party} party candidates have withdrawn.`;
	}
</script>

<h2 class="mb-2 font-bold">{status}</h2>
<div class="grid grid-cols-2 gap-4 mb-8 lg:grid-cols-3">
	{#if filteredCandidates.length > 0}
		{#each filteredCandidates as candidate (candidate.slug)}
			{@const imgUrl = `/portraits/${candidate.slug}-square.webp`}
			<CandidateCard {candidate} {imgUrl} />
		{/each}
	{:else}
		<div class="text-center col-span-full">
			<p>{emptyMessage}</p>
		</div>
	{/if}
</div>
