<script lang="ts">
	export let filterVisible: boolean,
		selectedParty: string,
		politicalParties: string[],
		updateSelectedParty: (newParty: string) => void,
		toggleFilterVisibility: () => void;

	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

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
			on:click|stopPropagation={toggleFilterVisibility}
			on:keydown|stopPropagation={toggleFilterVisibility}
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
										updateSelectedParty('All');
										toggleFilterVisibility();
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
											updateSelectedParty(party);
											toggleFilterVisibility();
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
