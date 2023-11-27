<script>
	import hero from '$lib/assets/hero.png';
	import info from '$lib/assets/info.png';
	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div class="flex flex-col gap-6 text-center justify-evenly">
	<h1
		class="text-2xl sm:text-3xl bg-white font-extrabold shadow-neo border-[1.5px] border-black rounded w-fit mx-auto px-2"
	>
		Welcome to Poliscope!
	</h1>
	<h2 class="mx-auto text-2xl sm:w-1/2">Your Handbook to the 2024 U.S. Presidential Election</h2>
	<img
		src={hero}
		alt="Poliscope Election Guide Visualization"
		class="w-3/4 mx-auto max-w-[400px]"
	/>
	<div class="flex flex-col items-center w-3/4 gap-4 mx-auto text-sm buttons sm:flex-row">
		<a
			href="/candidates"
			class="cursor-pointer flex-1 bg-green-400 gap-2 rounded-full border-2 border-slate-600 px-4 shadow-neo p-3 hover:translate-y-[-2px] transition-all"
		>
			Explore Candidates
		</a>
		<a
			href="#learn"
			class="cursor-pointer group gap-2 flex-1 rounded-full border-2 border-slate-600 px-4 shadow-neo p-3 hover:translate-y-[-2px] transition-all"
			on:click|preventDefault={scrollIntoView}
		>
			Learn More <img
				src={info}
				alt="q"
				class="inline w-4 h-4 ml-2 opacity-75 group-hover:opacity-100"
			/></a
		>
	</div>
</div>
