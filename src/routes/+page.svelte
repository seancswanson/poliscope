<script>
	import candidates from '$lib/data/candidates.json';
</script>

<h1 class="">Candidates</h1>
{#each candidates.candidates as candidate}
	<div class="candidate">
		<img class="rounded-full" src={`https://placehold.co/50`} alt={candidate.name} />
		<h2>{candidate.name}</h2>
	</div>
{/each}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
