<script lang="ts">
	import CandidateCard from './CandidateCard.svelte';
	import candidates from '$lib/data/candidates.json';
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const sortedCandidates = sortCandidatesByName(candidates.candidates);

	const politicalParties = sortedCandidates
		.map((candidate) => candidate.party)
		.filter((value, index, self) => self.indexOf(value) === index);

	const runningCandidates = sortedCandidates.filter((candidate) => candidate.withdrawn === false);
	const withdrawnCandidates = sortedCandidates.filter((candidate) => candidate.withdrawn === true);

	let filteredCandidates: typeof sortedCandidates;
	let filterVisible = false;
	let selectedParty = 'All';

	$: {
		if (selectedParty !== 'All') {
			filteredCandidates = sortCandidatesByName(
				runningCandidates.filter((candidate) => candidate.party === selectedParty)
			);
		} else {
			filteredCandidates = runningCandidates;
		}
	}

	function sortCandidatesByName(candidatesList: any[]) {
		return candidatesList.sort((a, b) => {
			const aLastName = a.name.split(' ').slice(-1)[0];
			const bLastName = b.name.split(' ').slice(-1)[0];
			return aLastName.localeCompare(bLastName);
		});
	}
</script>

<div class="flex justify-between mb-2 filter-bar">
	<h2 class="font-bold">Currently Running</h2>
	<button
		on:click={() => (filterVisible = true)}
		on:keydown={() => (filterVisible = true)}
		class={``}
		><img
			alt="filter icon"
			src="$lib/assets/filter.png"
			class={`border-black border-[1.5px] hover:translate-y-[-2px]  rounded-sm transition-all ease-in-out shadow-neo w-8 p-1`}
		/></button
	>
</div>
{#if filterVisible}
	<div
		tabindex="0"
		role="button"
		aria-labelledby="Title"
		aria-describedby="Description"
		transition:fade
		on:click|stopPropagation
		on:keydown|stopPropagation
		class="relative popover"
	>
		<div
			class="backdrop"
			tabindex="0"
			role="button"
			on:click|stopPropagation={() => (filterVisible = false)}
			on:keydown|stopPropagation={() => (filterVisible = false)}
			transition:fade={{ delay: 25, duration: 150, easing: quintOut }}
		/>
		<div
			class="absolute top-0 right-0 flex flex-col items-start text-black bg-white border border-black rounded shadow-neo"
		>
			<div class="w-full py-1 text-center uppercase bg-gray-300 rounded-t top-bar">
				Filter Options
			</div>
			<div class="content min-w-[250px] mx-auto p-2 flex flex-col gap-2">
				<div class="flex flex-col gap-2 party-select">
					<span class="block text-sm font-medium">Party:</span>
					<div class="flex flex-col">
						<div class="flex flex-col gap-2">
							<div class="flex gap-2 party-select">
								<input
									id="All"
									type="radio"
									class="w-5 h-5 text-gray-600 form-radio"
									name="party"
									value="All"
									checked={selectedParty === 'All'}
									on:change={() => {
										selectedParty = 'All';
									}}
								/>
								<label for="All" class="">All</label>
							</div>

							{#each politicalParties as party}
								<div class="flex gap-2 party-select">
									<input
										id={politicalParties.indexOf(party).toString()}
										type="radio"
										class="w-5 h-5 text-gray-600 form-radio"
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
	</div>
{/if}
<div class="grid grid-cols-2 gap-4 mb-8 lg:grid-cols-3">
	{#each filteredCandidates as candidate (candidate.slug)}
		{@const imgUrl = `/portraits/${candidate.slug}-square.webp`}
		<CandidateCard {candidate} {imgUrl} />
	{/each}
</div>
<h2 class="mb-4 font-bold">Withdrawn</h2>
<div class="grid grid-cols-2 gap-4 lg:grid-cols-3">
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
