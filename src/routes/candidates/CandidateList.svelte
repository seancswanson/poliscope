<script lang="ts">
	import CandidateCard from './CandidateCard.svelte';
	import candidates from '$lib/data/candidates.json';
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let filterVisible = false;
	let selectedParty = 'All';
	const numberCandidates = {
		all: candidates.candidates.length,
		democratic: candidates.candidates.filter((candidate) => candidate.party === 'Democratic')
			.length,
		republican: candidates.candidates.filter((candidate) => candidate.party === 'Republican')
			.length,
		independent: candidates.candidates.filter((candidate) => candidate.party == 'Independent')
			.length,
		green: candidates.candidates.filter((candidate) => candidate.party === 'Green').length
	};
	let filteredCandidates = candidates.candidates;

	$: {
		if (selectedParty !== 'All') {
			filteredCandidates = candidates.candidates.filter(
				(candidate) => candidate.party === selectedParty
			);
		} else {
			filteredCandidates = candidates.candidates;
		}
	}
	const politicalParties = candidates.candidates
		.map((candidate) => candidate.party)
		.filter((value, index, self) => self.indexOf(value) === index);
</script>

<div class="filter-bar flex justify-end mb-2">
	<button on:click={() => (filterVisible = true)} class={``}
		><img
			src="$lib/assets/filter.png"
			class={`border-black border-[1.5px] hover:translate-y-[-2px]  rounded-sm transition-all ease-in-out shadow-neo w-8 p-1`}
		/></button
	>
</div>
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
				<div class="party-select flex flex-col gap-2">
					<span class="block font-medium text-sm">Party:</span>
					<div class="flex flex-col">
						{#each politicalParties as party}
							<div class="flex gap-2">
								<input
									id={politicalParties.indexOf(party).toString()}
									type="radio"
									class="form-radio h-5 w-5 text-gray-600"
									name="party"
									value={party}
									checked={selectedParty === party}
									on:change={() => {
										selectedParty = party;
									}}
								/>
								<label for={politicalParties.indexOf(party).toString()} class="">{party}</label>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
	{#each filteredCandidates as candidate (candidate.slug)}
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
