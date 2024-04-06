<script lang="ts">
	import CandidateList from './CandidateListWrapper.svelte';

	import candidatesHeroImg from '$lib/assets/candidates.png';
	import PartyInfoPill from './PartyInfoPill.svelte';

	import candidates from '$lib/data/candidates.json';

	let runningCandidates = candidates.candidates.filter(
		(candidate) => candidate.withdrawn === false
	);

	let uniqueParties = [
		...new Set(candidates.candidates.map((candidate) => candidate.party))
	].sort();

	let parties = uniqueParties.map((party) => {
		return {
			party: party,
			count: runningCandidates.filter((candidate) => candidate.party === party).length
		};
	});

	const numberParties = runningCandidates
		.map((candidate) => candidate.party)
		.filter((value, index, self) => self.indexOf(value) === index).length;

	const latestDataDate = new Date(candidates.latest_data_date);
	const formattedDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(latestDataDate);
</script>

<section class="flex flex-col gap-4 mb-5">
	<h1
		class="text-2xl sm:text-3xl shadow-neo border-[1.5px] bg-white border-black rounded w-fit mx-auto px-2"
	>
		2024 Presidential Candidates
	</h1>
	<img src={candidatesHeroImg} class="w-2/5 mx-auto" alt="" />
	<div class="text">
		<p class="w-3/4 mx-auto text-center">
			As of <span class="font-semibold">{formattedDate}*</span>-
		</p>
		<p class="w-3/4 mx-auto text-center">
			There are
			<span class="font-semibold">{runningCandidates.length}</span> people in the race for President
			across <span class="font-bold">{numberParties}</span> parties:
		</p>
	</div>
	<div class="flex flex-wrap justify-center w-4/5 gap-2 mx-auto sm:w-1/2 candidate-number-pills">
		{#each parties as party}
			<PartyInfoPill party={party.party} count={party.count} />
		{/each}
	</div>
	<p class="mb-2 text-xs italic text-center">Click on a candidate below to learn more</p>
</section>
<section>
	<CandidateList />
</section>
