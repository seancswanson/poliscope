<script>
	import link from '$lib/assets/link.png';
	import { onMount } from 'svelte';

	export let wikipediaPageData;
	export let candidate;

	onMount(() => {
		const paragraphs = document.querySelectorAll('.wiki-content p');
		paragraphs.forEach((p, index) => {
			if (index < 3) {
				p.classList.add('mb-4');
			} else {
				p.classList.add('hidden');
			}
		});
	});
</script>

<div class="border-[1.5px] border-black rounded text-center shadow-neo flex flex-col bg-white">
	<h2 class="text-2xl bg-black text-white font-extrabold px-2">Who is {candidate.name}?</h2>
	<div class="wiki-content p-4 font-light">
		{@html wikipediaPageData}
	</div>
	<a
		href="https://simple.wikipedia.org/wiki/Main_Page"
		class="italic text-center text-xs mb-2 group"
		>Info courtesy of Wikipedia <img
			src={link}
			alt="link"
			class="w-[12px] h-[12px] inline opacity-50 group-hover:opacity-100"
		/>
	</a>
</div>
