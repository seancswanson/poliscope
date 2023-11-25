<script>
	import { Head } from '$app/env';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';

	import '../app.css';
	import '../fonts.css';

	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	export let data;
	$: pathname = data.pathname;
</script>

<svelte:head>
	<title>Poliscope</title>
	<meta
		name="description"
		content="Poliscope is a web application designed to provide clear, unbiased information on candidates and key issues for the 2024 U.S. Presidential Election, helping voters make informed decisions."
	/>

	<!-- Facebook/OpenGraph Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://poliscope-sveltekit.vercel.app/" />
	<meta property="og:title" content="Poliscope" />
	<meta
		property="og:description"
		content="Poliscope is a web application designed to provide clear, unbiased information on candidates and key issues for the 2024 U.S. Presidential Election, helping voters make informed decisions."
	/>
	<meta
		property="og:image"
		content="https://poliscope-sveltekit.vercel.app/android-chrome-192x192.png"
	/>

	<!-- Twitter Card Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://poliscope-sveltekit.vercel.app/" />
	<meta name="twitter:title" content="Poliscope" />
	<meta
		name="twitter:description"
		content="Poliscope is a web application designed to provide clear, unbiased information on candidates and key issues for the 2024 U.S. Presidential Election, helping voters make informed decisions."
	/>
	<meta
		name="twitter:image"
		content="https://poliscope-sveltekit.vercel.app/android-chrome-192x192.png"
	/>
</svelte:head>

<div class="page-wrapper min-h-screen h-full grid grid-rows-[auto,auto,1fr,auto]">
	<Header />
	{#key pathname}
		<main
			class="max-w-[768px] mx-auto z-0 px-2 py-8"
			in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
			out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
		>
			<slot />
		</main>
	{/key}
	<Footer />
</div>
