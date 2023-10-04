<script lang="ts">
	export let count: number;
	export let party: string;

	const borderColor =
		party === 'Democratic'
			? 'border-blue-300'
			: party === 'Republican'
			? 'border-red-300'
			: 'border-gray-300';
</script>

<div
	class={`candidate-number-block flex gap-2 font-['AuthenticSansCondensed'] rounded-full border-2 ${borderColor} px-2`}
>
	<div class="number">{count}</div>
	<div class="label">{party}</div>
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
