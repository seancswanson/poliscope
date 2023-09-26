<script>
	import candidates from '$lib/data/candidates.json';
	let selectedParty = 'All';
	let filteredCandidates = candidates.candidates;

	$: filteredCandidates = candidates.candidates.filter(
		(candidate) => selectedParty === 'All' || candidate.party === selectedParty
	);
</script>

<!-- Party Selection -->
<div class="mb-5">
	<label for="party" class="block text-lg font-medium">Choose a party:</label>
	<select id="party" class="w-full border rounded p-2" bind:value={selectedParty}>
		<option>All</option>
		<option>Democratic</option>
		<option>Republican</option>
	</select>
</div>

<!-- Search Bar -->
<div class="mb-5">
	<input class="w-full p-2 border rounded" type="text" placeholder="Search for a candidate..." />
</div>
<!-- Candidates List -->
<h1 class="text-2xl mb-5">Candidates</h1>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each filteredCandidates as candidate}
		<div class="candidate p-4 border rounded">
			<img
				class="w-12 h-12 rounded-full mb-2"
				src={`https://placehold.co/50`}
				alt={candidate.name}
			/>
			<h2 class="text-xl font-medium">{candidate.name}</h2>
		</div>
	{/each}
</div>
