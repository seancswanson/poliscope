<script lang="ts">
	import CandidateList from './CandidateList.svelte';

	import candidatesHeroImg from '$lib/assets/candidates.png';
	import PartyInfoPill from './PartyInfoPill.svelte';

	import candidates from '$lib/data/candidates.json';

	let uniqueParties = [...new Set(candidates.candidates.map((candidate) => candidate.party))];

	let parties = uniqueParties.map((party) => {
		return {
			party: party,
			count: candidates.candidates.filter((candidate) => candidate.party === party).length
		};
	});

	const numberParties = candidates.candidates
		.map((candidate) => candidate.party)
		.filter((value, index, self) => self.indexOf(value) === index).length;
	const latestDataDate = new Date(candidates.latest_data_date);
	const formattedDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(latestDataDate);
	let filterVisible = false;
</script>

<section class="flex flex-col gap-4 mb-5">
	<h1 class="text-3xl shadow-neo border-[1.5px] border-black rounded w-fit mx-auto px-2">
		2024 Presidential Candidates
	</h1>
	<img src={candidatesHeroImg} class="mx-auto w-2/5" alt="" />
	<div class="text">
		<p class="text-center w-3/4 mx-auto">
			As of <span class="font-semibold">{formattedDate}*</span>-
		</p>
		<p class="text-center w-3/4 mx-auto">
			There are
			<span class="font-semibold">{candidates.candidates.length}</span> people in the race for
			President across <span class="font-bold">{numberParties}</span> parties:
		</p>
	</div>
	<div class="candidate-number-pills flex gap-2 justify-center">
		{#each parties as party}
			<PartyInfoPill {party} />
		{/each}
	</div>
</section>
<section>
	<p class="italic text-center text-xs mb-2">Click on a candidate below to learn more</p>
	<CandidateList />
</section>

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
