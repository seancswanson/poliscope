<script>
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';

	import '../app.css';
	import '../fonts.css';

	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	export let data;
	$: pathname = data.pathname;
</script>

<div class="page-wrapper h-full grid grid-rows-[auto,auto,1fr,auto]">
	<Header />
	{#key pathname}
		<main
			class="max-w-[768px] mx-auto z-0 px-2"
			in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
			out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
		>
			<slot />
		</main>
	{/key}
	<Footer />
</div>
