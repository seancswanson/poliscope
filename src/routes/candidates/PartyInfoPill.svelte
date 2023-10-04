<script lang="ts">
	export let count: number;
	export let party: string;
	export let color: string;
</script>

<div
	class={`candidate-number-block flex gap-2 font-['AuthenticSansCondensed'] rounded-full border-2 border-${color}-300 px-2`}
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
