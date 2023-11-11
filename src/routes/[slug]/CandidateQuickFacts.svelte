<script>
	import location from '$lib/assets/location.png';
	import link from '$lib/assets/link.png';

	export let candidate;

	const partyImgUrl = `/political-party-icons/${candidate.party.toLowerCase()}-icon.png`;
	const partyHomePage = {
		Democratic: 'https://en.wikipedia.org/wiki/History_of_the_Democratic_Party_(United_States)',
		Republican: 'https://en.wikipedia.org/wiki/History_of_the_Republican_Party_(United_States)',
		Green: 'https://en.wikipedia.org/wiki/Green_Party_of_the_United_States',
		Independent: 'https://en.wikipedia.org/wiki/Independent_politician'
	};
</script>

<div class="flex flex-col h-full gap-3">
	<div class="top-row flex gap-2 justify-between">
		<div class="border border-black rounded text-center flex flex-col grow">
			<span class="bg-black text-white font-extrabold px-4">Party</span>
			<a
				href={partyHomePage[candidate.party]}
				class="flex-col gap-2 pb-2 flex justify-between group"
			>
				<span class="px-2 py-1 font-light italic text-xs tracking-tighter bg-slate-200"
					>{[candidate.party]}
					<img
						src={link}
						alt="link"
						class="w-[12px] h-[12px] inline opacity-50 group-hover:opacity-100"
					/></span
				>
				<img src={partyImgUrl} alt={`${candidate.party} symbol`} class="m-auto w-16" />
			</a>
		</div>
		<div class="w-20 border border-black rounded text-center flex flex-col grow">
			<span class="bg-black text-white font-extrabold">Age</span>
			<span class="m-auto text-2xl font-light"
				>≈{new Date().getFullYear() - candidate.biography.birth_year}
			</span>
		</div>
		<div class="border border-black rounded text-center flex flex-col grow">
			<span class="bg-black text-white font-extrabold px-2">Birthplace</span>
			<a
				target="_blank"
				href={`https://www.google.com/maps?q=${candidate.biography.birth_place}`}
				class="text-xl h-full m-auto font-light flex items-center px-2 gap-2 group"
				><span class="inline-block">{candidate.biography.birth_place}</span>
				<img src={location} alt="q" class="group-hover:opacity-100 opacity-50 w-6 h-6" />
			</a>
		</div>
	</div>
	{#if candidate.quote !== 'N/A'}
		<div class="border border-black rounded text-center flex flex-col">
			<span class="bg-black text-white font-extrabold">Featured Quote</span>
			<div>
				<blockquote class="italic border-l-4 p-2">
					"{candidate.quote}"
				</blockquote>
			</div>
		</div>
	{/if}
</div>
