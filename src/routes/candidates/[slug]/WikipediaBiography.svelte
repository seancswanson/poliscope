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
	<h2 class="px-2 text-2xl font-extrabold text-white bg-black">Who is {candidate.name}?</h2>
	<div class="p-4 font-light wiki-content">
		{@html wikipediaPageData}
	</div>
	<a
		href="https://simple.wikipedia.org/wiki/Main_Page"
		class="mb-2 text-xs italic text-center group"
		>Info courtesy of Wikipedia <img
			src={link}
			alt="link"
			class="w-[12px] h-[12px] inline opacity-50 group-hover:opacity-100"
		/>
	</a>
</div>
