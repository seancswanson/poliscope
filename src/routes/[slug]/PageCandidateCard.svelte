<script>
	export let candidate;

	const borderColor = getPartyAccentColorBorder(candidate.party);

	const portraitImgUrl = `/portraits/${candidate.slug}-square.webp`;
</script>

<div
	class="flex-1 min-w-[245px] relative gap-2 flex flex-col text-center bg-white shadow-neo border-black border-[1.5px] rounded p-4"
>
	<h1 class="text-4xl font-extrabold">{candidate.name}</h1>
	<span class="text-lg">{candidate.current_position}</span>
	<!-- Portrait -->
	<img class="w-48 mx-auto border-[1.5px] border-black" src={portraitImgUrl} alt={candidate.name} />
	<div
		class={`corner-tag absolute rounded-tr-[2px] top-0 right-0 w-0 h-0 border-t-[0] border-t-transparent border-r-[50px] ${borderColor} border-b-[50px] border-b-transparent`}
	/>
	<div class="absolute top-1 font-bold right-2 text-white">
		{candidate.party[0]}
	</div>
</div>
