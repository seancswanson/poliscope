<script lang="ts">
	import CandidateCard from './CandidateCard.svelte';
	import candidates from '$lib/data/candidates.json';
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let filterVisible = false;
	let selectedParty = 'All';

	function sortCandidatesByName(candidatesList: any[]) {
		return candidatesList.sort((a, b) => {
			const aLastName = a.name.split(' ').slice(-1)[0];
			const bLastName = b.name.split(' ').slice(-1)[0];
			return aLastName.localeCompare(bLastName);
		});
	}

	let filteredCandidates = candidates.candidates
		.filter((candidate) => candidate.withdrawn === false)
		.sort((a, b) => {
			const aLastName = a.name.split(' ').slice(-1)[0];
			const bLastName = b.name.split(' ').slice(-1)[0];
			return aLastName.localeCompare(bLastName);
		});
	let withdrawnCandidates = candidates.candidates.filter(
		(candidate) => candidate.withdrawn === true
	);

	$: {
		if (selectedParty !== 'All') {
			filteredCandidates = sortCandidatesByName(
				candidates.candidates.filter((candidate) => candidate.party === selectedParty)
			);
		} else {
			filteredCandidates = sortCandidatesByName(candidates.candidates);
		}
	}
	const politicalParties = candidates.candidates
		.map((candidate) => candidate.party)
		.filter((value, index, self) => self.indexOf(value) === index);
</script>

<div class="filter-bar flex justify-between mb-2">
	<h2 class="font-bold">Currently Running</h2>
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
						<div class="flex gap-2">
							<input
								id="All"
								type="radio"
								class="form-radio h-5 w-5 text-gray-600"
								name="party"
								value="All"
								checked={selectedParty === 'All'}
								on:change={() => {
									selectedParty = 'All';
								}}
							/>
							<label for="All" class="">All</label>

							{#each politicalParties as party}
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
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
<div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
	{#each filteredCandidates as candidate (candidate.slug)}
		{@const imgUrl = `/portraits/${candidate.slug}-square.webp`}
		<CandidateCard {candidate} {imgUrl} />
	{/each}
</div>
<h2 class="font-bold mb-4">Withdrawn</h2>
<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
	{#each withdrawnCandidates as candidate (candidate.slug)}
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
