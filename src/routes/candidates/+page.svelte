<script lang="ts">
	import CandidateCard from './CandidateCard.svelte';
	import candidatesHeroImg from '$lib/assets/candidates.png';
	import PartyInfoPill from './PartyInfoPill.svelte';

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
	const numberParties = candidates.candidates
		.map((candidate) => candidate.party)
		.filter((value, index, self) => self.indexOf(value) === index).length;
	const searchStore = createSearchStore(searchCandidates);
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	const latestDataDate = new Date(candidates.latest_data_date);
	const formattedDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(latestDataDate);
	let filterVisible = false;
</script>

<!-- Candidates List -->
<h1 class="text-2xl mb-5 font-bold text-center">2024 Presidential Candidates</h1>
<img src={candidatesHeroImg} class="mx-auto w-2/3" alt="" />
<h2 class="text-center mb-2">
	As of <span class="font-semibold">{formattedDate}*</span>, there are
	<span class="font-semibold">{numberCandidates.total}</span> people in the race for President
	across <span class="font-bold">{numberParties}</span> parties:
</h2>
<div class="candidate-number-pills flex gap-2 justify-center mb-5">
	<PartyInfoPill count={numberCandidates.democratic} party="Democratic" />
	<PartyInfoPill count={numberCandidates.republican} party="Republican" />
	<PartyInfoPill count={numberCandidates.independent} party="Independent" />
	<PartyInfoPill count={numberCandidates.green} party="Green" />
</div>
<p class="italic text-center text-xs mb-2">Click on a candidate below to learn more</p>

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
		role="dialog"
		aria-labelledby="Title"
		aria-describedby="Description"
		aria-orientation="vertical"
		transition:fade
		on:click|stopPropagation
		class="popover relative"
	>
		<div
			class="backdrop"
			on:click|stopPropagation={() => (filterVisible = false)}
			transition:fade={{ delay: 25, duration: 150, easing: quintOut }}
		/>
		<div
			class="wrapper rounded border border-black absolute shadow-neo top-0 right-0 flex flex-col items-start bg-white text-black"
		>
			<div
				class="top-bar py-1 uppercase rounded-t w-full font-['AuthenticSansCondensed'] text-center bg-gray-300"
			>
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
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
