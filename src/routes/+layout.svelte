<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	export let data;
	$: pathname = data.pathname;
</script>

<!-- Header -->
<header class="text-center mb-5">
	<h1 class="text-3xl font-bold">Poliscope</h1>
	<p class="text-lg">Your guide to political candidates.</p>
</header>
{#key pathname}
	<main
		in:fade={{ duration: 3000, delay: 400, easing: cubicOut }}
		out:fade={{ duration: 300, easing: cubicIn }}
	>
		<slot />
	</main>
{/key}
<footer class="text-center mt-10">
	<p>
		Contribute to our data: <a href="https://github.com/your-repo" class="text-blue-600"
			>GitHub Repository</a
		>
	</p>
	<p>Made with ♡ by <a href="seancswanson.com">Sean Swanson</a></p>
</footer>
