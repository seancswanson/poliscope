<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	export let data;
	import Header from '$lib/components/Header.svelte';
	$: pathname = data.pathname;
</script>

<!-- Header -->
<Header />
{#key pathname}
	<main
		class="max-w-[768px] mx-auto w-3/4"
		in:fade={{ duration: 300, delay: 300, easing: cubicOut }}
		out:fade={{ duration: 300, easing: cubicIn }}
	>
		<slot />
	</main>
{/key}
<footer class="text-center mt-10">
	<p>
		Contribute to our data: <a href="https://github.com/poliscope-svelte" class="text-blue-600"
			>GitHub Repository</a
		>
	</p>
	<p>Made with ♡ by <a href="seancswanson.com">Sean Swanson</a></p>
</footer>
