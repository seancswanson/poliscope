<script lang="ts">
	import type { Candidate } from '$lib/types';
	import candidates from '$lib/data/candidates.json';
	import CandidateList from './CandidateList.svelte';
	import CandidateListFilter from './CandidateListFilter.svelte';

	const sortedCandidates: Candidate[] = sortCandidatesByName(candidates.candidates);

	const politicalParties: string[] = extractUniqueParties(sortedCandidates);

	let filteredRunningCandidates: Candidate[] = [];
	let filteredWithdrawnCandidates: Candidate[] = [];

	let selectedParty: string = 'All';
	let filterVisible: boolean = false;

	$: selectedParty, filterCandidates(), filterVisible;

	function extractUniqueParties(candidates: Candidate[]): string[] {
		return candidates
			.map((candidate) => candidate.party)
			.filter((value, index, self) => self.indexOf(value) === index);
	}

	function filterCandidates(): void {
		const isPartySelected = selectedParty !== 'All';
		filteredRunningCandidates = filterAndSortCandidates(sortedCandidates, isPartySelected, false);
		filteredWithdrawnCandidates = filterAndSortCandidates(sortedCandidates, isPartySelected, true);
	}

	function filterAndSortCandidates(
		candidates: Candidate[],
		isPartySelected: boolean,
		withdrawn: boolean
	): Candidate[] {
		return sortCandidatesByName(
			candidates.filter(
				(candidate) =>
					candidate.withdrawn === withdrawn &&
					(!isPartySelected || candidate.party === selectedParty)
			)
		);
	}

	function sortCandidatesByName(candidatesList: Candidate[]): Candidate[] {
		return candidatesList.sort((a, b) => {
			const aLastName = a.name.split(' ').slice(-1)[0];
			const bLastName = b.name.split(' ').slice(-1)[0];
			return aLastName.localeCompare(bLastName);
		});
	}

	function updateSelectedParty(newParty: string) {
		selectedParty = newParty;
	}

	function toggleFilterVisibility() {
		console.log('fired');
		filterVisible = !filterVisible;
	}
</script>

<div class="flex justify-end mb-[-15px] filter-bar">
	<button on:click={toggleFilterVisibility} class="filter-button">
		<img
			alt="filter icon"
			src="$lib/assets/filter.png"
			class="w-10 p-1 border-2 border-black filter-icon"
		/>
	</button>
</div>

<CandidateListFilter
	{filterVisible}
	{selectedParty}
	{politicalParties}
	{updateSelectedParty}
	{toggleFilterVisibility}
/>

<CandidateList
	status="Currently Running"
	filteredCandidates={filteredRunningCandidates}
	{selectedParty}
/>
<CandidateList
	status="Withdrawn"
	filteredCandidates={filteredWithdrawnCandidates}
	{selectedParty}
/>
