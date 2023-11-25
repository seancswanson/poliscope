<script>
	import location from '$lib/assets/location.png';
	import link from '$lib/assets/link.png';

	export let candidate;

	const partyImgUrl = `/political-party-icons/${candidate.party.toLowerCase()}-icon.png`;
	const partyHomePage = {
		Democratic: 'https://en.wikipedia.org/wiki/History_of_the_Democratic_Party_(United_States)',
		Republican: 'https://en.wikipedia.org/wiki/History_of_the_Republican_Party_(United_States)',
		Green: 'https://en.wikipedia.org/wiki/Green_Party_of_the_United_States',
		Independent: 'https://en.wikipedia.org/wiki/Independent_politician',
		Libertarian: 'https://en.wikipedia.org/wiki/Libertarian_Party_(United_States)'
	};
</script>

<div class="flex flex-col h-full gap-3">
	<div class="flex justify-between top-row gap-2">
		<div class="flex flex-col text-center bg-white border border-black rounded grow">
			<span class="px-4 font-extrabold text-white bg-black">Party</span>
			<a
				href={partyHomePage[candidate.party]}
				class="flex flex-col justify-between pb-2 gap-2 group"
			>
				<span class="px-2 py-1 text-xs italic font-light tracking-tighter bg-slate-200"
					>{[candidate.party]}
					<img
						src={link}
						alt="link"
						class="w-[12px] h-[12px] inline opacity-50 group-hover:opacity-100"
					/></span
				>
				<img src={partyImgUrl} alt={`${candidate.party} symbol`} class="w-16 m-auto" />
			</a>
		</div>
		<div class="flex flex-col w-20 text-center bg-white border border-black rounded grow">
			<span class="font-extrabold text-white bg-black">Age</span>
			<span class="m-auto text-2xl font-light"
				>≈{new Date().getFullYear() - candidate.biography.birth_year}
			</span>
		</div>
		<div class="flex flex-col text-center bg-white border border-black rounded grow">
			<span class="px-2 font-extrabold text-white bg-black">Birthplace</span>
			<a
				target="_blank"
				href={`https://www.google.com/maps?q=${candidate.biography.birth_place}`}
				class="flex items-center h-full px-2 m-auto text-xl font-light gap-2 group"
				><span class="inline-block">{candidate.biography.birth_place}</span>
				<img src={location} alt="q" class="w-6 h-6 opacity-50 group-hover:opacity-100" />
			</a>
		</div>
	</div>
	{#if candidate.quote !== 'N/A'}
		<div class="flex flex-col text-center bg-white border border-black rounded">
			<span class="font-extrabold text-white bg-black">Featured Quote</span>
			<div>
				<blockquote class="p-2 italic font-light border-l-4">
					"{candidate.quote}"
				</blockquote>
			</div>
		</div>
	{/if}
</div>
