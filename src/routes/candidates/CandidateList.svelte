<script lang="ts">
	import CandidateCard from './CandidateCard.svelte';

	import candidates from '$lib/data/candidates.json';
	import { createSearchStore } from '$lib/stores/search';
	let selectedParty = 'All';
	const searchCandidates = candidates.candidates.map((candidate) => ({
		...candidate,
		searchTerms: `${candidate.name} ${candidate.party} ${candidate.current_position}`
	}));
	const numberCandidates = {
		total: candidates.candidates.length,
		democratic: candidates.candidates.filter((candidate) => candidate.party === 'Democratic')
			.length,
		republican: candidates.candidates.filter((candidate) => candidate.party === 'Republican')
			.length,
		independent: candidates.candidates.filter((candidate) => candidate.party == 'Independent')
			.length,
		green: candidates.candidates.filter((candidate) => candidate.party === 'Green').length
	};
	const politicalParties = candidates.candidates
		.map((candidate) => candidate.party)
		.filter((value, index, self) => self.indexOf(value) === index);
	const searchStore = createSearchStore(searchCandidates);
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	const latestDataDate = new Date(candidates.latest_data_date);
	let filterVisible = false;
</script>

<!-- <div class="filter-bar flex justify-end mb-2">
	<button on:click={() => (filterVisible = true)} class={``}
		><img
			src="$lib/assets/filter.png"
			class={`border-black border-2  transition-all ease-in-out shadow-neo w-8 p-1`}
		/></button
	>
</div> -->
{#if filterVisible}
	<div
		role="button"
		aria-labelledby="Title"
		aria-describedby="Description"
		aria-orientation="vertical"
		transition:fade
		on:click|stopPropagation
		class="popover relative"
	>
		<div
			class="backdrop"
			role="button"
			on:click|stopPropagation={() => (filterVisible = false)}
			transition:fade={{ delay: 25, duration: 150, easing: quintOut }}
		/>
		<div
			class="wrapper rounded border border-black absolute shadow-neo top-0 right-0 flex flex-col items-start bg-white text-black"
		>
			<div class="top-bar py-1 uppercase rounded-t w-full text-center bg-gray-300">
				Filter Options
			</div>
			<div class="content min-w-[250px] mx-auto p-2 flex flex-col gap-2">
				<div class="party-select">
					<label for="party" class="block font-medium text-sm">Choose a party:</label>
					<select
						id="party"
						class="w-full border rounded p-2 text-black"
						bind:value={selectedParty}
					>
						<option>All</option>
						{#each politicalParties as party}
							<option>{party}</option>
						{/each}
					</select>
				</div>
				<div class="search">
					<label for="search" class="block font-medium text-sm">Search by name:</label>
					<input
						id="search"
						class="w-full p-2 border rounded text-black"
						type="text"
						placeholder="Mickey Mouse"
					/>
				</div>
			</div>
		</div>
	</div>
{/if}
<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
	{#each $searchStore.data as candidate}
		{@const imgUrl = `/portraits/${candidate.slug}-square.webp`}
		<CandidateCard {candidate} {imgUrl} />
	{/each}
</div>

<style>
	.popover {
		z-index: 997;
	}

	.backdrop {
		width: 100vw;
		height: 100vh;
		position: fixed;
		inset: 0;

		background: rgba(0, 0, 0, 0.7);
	}
</style>
