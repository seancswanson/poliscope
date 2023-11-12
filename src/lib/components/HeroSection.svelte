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

<div class="text-center font-extrabold flex flex-col gap-6 justify-evenly">
	<h1 class="text-3xl shadow-neo border-[1.5px] border-black rounded w-fit mx-auto px-2">
		Welcome to Poliscope!
	</h1>
	<h2 class="text-2xl sm:w-1/2 mx-auto">Your Guide to the 2024 U.S. Presidential Election</h2>
	<img
		src={hero}
		alt="Poliscope Election Guide Visualization"
		class="w-3/4 mx-auto max-w-[400px]"
	/>
	<div
		class="buttons items-center
 flex flex-col sm:flex-row w-3/4 mx-auto gap-4 text-sm"
	>
		<a
			href="/candidates"
			class="flex-1 bg-green-400 gap-2 rounded-full border-2 border-slate-600 px-4 shadow-neo p-3 hover:translate-y-[-2px] transition-all"
			>Explore Candidates</a
		>
		<a
			href="#learn"
			class="group gap-2 flex-1 rounded-full border-2 border-slate-600 px-4 shadow-neo p-3 hover:translate-y-[-2px] transition-all"
			on:click|preventDefault={scrollIntoView}
			>Learn More <img
				src={info}
				alt="q"
				class="w-4 h-4 ml-2 inline opacity-75 group-hover:opacity-100"
			/></a
		>
	</div>
</div>
