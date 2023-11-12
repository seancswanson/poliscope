<script lang="ts">
	export let party: { party: string; count: number };

	const accentStyles =
		party.party === 'Democratic'
			? 'border-blue-300 shadow-blue-400'
			: party.party === 'Republican'
			? 'border-red-300 shadow-red-400'
			: party.party === 'Green'
			? 'border-green-300 shadow-green-400'
			: 'border-gray-300 shadow-gray-400';
</script>

<div
	class={`flex gap-2 font-['AuthenticSansCondensed'] rounded-full border-2 ${accentStyles} px-2 shadow-neo`}
>
	<div class="number">{party.count}</div>
	<div class="label">{party.party}</div>
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
