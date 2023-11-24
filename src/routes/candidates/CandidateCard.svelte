<script lang="ts">
	import { getPartyAccentColorBorder } from '$lib/utils';

	export let imgUrl: string;
	export let candidate: any;
	const borderColor = getPartyAccentColorBorder(candidate.party);
</script>

<a
	href={`/${candidate.slug}`}
	class="bg-white hover:translate-y-[-4px] ease-in-out transition-transform flex flex-col justify-center items-center text-center cursor-pointer candidate p-4 border-[1.5px] border-black shadow-neo rounded relative"
>
	<div
		class={`corner-tag rounded-tr-[2px] absolute top-0 right-0 w-0 h-0 border-t-[0] border-t-transparent border-r-[45px] ${borderColor} border-b-[45px] border-b-transparent`}
	/>

	<div class="absolute top-1 text-sm font-bold right-2 text-white">
		{candidate.party[0]}
	</div>
	<img
		class="w-24 h-24 rounded-sm mb-2 border border-slate-200"
		src={imgUrl}
		alt={candidate.name}
	/>
	<h2 class="text-xl font-medium">{candidate.name}</h2>
	<p class="text-xs">{candidate.current_position}</p>
</a>
