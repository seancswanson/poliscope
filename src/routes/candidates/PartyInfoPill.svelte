<script lang="ts">
	import { getPartyAccentColorBorderShadow } from '$lib/utils';

	export let party: string, count: number;

	const accentStyles = getPartyAccentColorBorderShadow(party);
</script>

<div
	class={`flex gap-2 font-['AuthenticSansCondensed'] rounded-full bg-white border-2 ${accentStyles} px-2 shadow-neo`}
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
