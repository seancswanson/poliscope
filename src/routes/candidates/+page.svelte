<script lang="ts">
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
		independent: candidates.candidates.filter((candidate) => candidate.party === 'Independent')
			.length
	};
	const numberParties = candidates.candidates
		.map((candidate) => candidate.party)
		.filter((value, index, self) => self.indexOf(value) === index).length;
	const searchStore = createSearchStore(searchCandidates);
	import { fade, scale } from 'svelte/transition';
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
<h2 class="text-center mb-2">
	As of <span class="font-semibold">{formattedDate}*</span>, there are
	<span class="font-semibold">{numberCandidates.total}</span> people in the race for President
	across <span class="font-bold">{numberParties}</span> parties:
</h2>
<div class="candidate-number-pills flex gap-2 justify-center mb-5">
	<PartyInfoPill count={numberCandidates.democratic} party="Democratic" color="blue" />
	<PartyInfoPill count={numberCandidates.republican} party="Repbulican" color="red" />
	<PartyInfoPill count={numberCandidates.independent} party="Independent" color="gray" />
</div>
<p class="italic text-center text-xs">Click on a candidate below to learn more</p>

<div class="filter-bar flex justify-end mb-2">
	<button
		on:click={() => (filterVisible = true)}
		class={`p-1 ${
			filterVisible ? 'border-black' : 'border-transparent'
		} border-2  transition-all ease-in-out`}
		><img src="$lib/assets/filter.png" class="w-6" /></button
	>
</div>
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
			class="wrapper rounded shadow absolute top-0 right-0 flex flex-col items-start bg-white text-black"
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
						<option>Democratic</option>
						<option>Republican</option>
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
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each $searchStore.data as candidate}
		<!-- convert candidate name to kebab case -->
		{@const slug = candidate.name.replace(/\s+/g, '-').replace(/\./g, '').toLowerCase()}
		{@const imgUrl = `/portraits/${candidate.slug}-square.webp`}
		<!-- create partycolor const with blue, red, and gray as the options -->
		{@const partyColor =
			candidate.party === 'Democratic' ? 'blue' : candidate.party === 'Republican' ? 'red' : 'gray'}
		<a href={`/${slug}`} class="bg-white shadow candidate p-4 border rounded relative">
			<div
				class={`corner-tag rounded-tr-sm  absolute top-0 right-0 w-0 h-0
  border-t-[0] border-t-transparent
  border-r-[45px] border-r-${partyColor}-500
  border-b-[45px] border-b-transparent`}
			/>
			<div
				class={`absolute top-1 text-sm font-bold right-2 text-white font-['AuthenticSansCondensed']`}
			>
				{candidate.party[0]}
			</div>
			<img class="w-12 h-12 rounded-full mb-2" src={imgUrl} alt={candidate.name} />
			<h2 class="text-xl font-medium">{candidate.name}</h2>
		</a>
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

		background: rgba(0, 0, 0, 0.3);
	}
</style>
