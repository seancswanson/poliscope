<script lang="ts">
	export let imgUrl: string;
	export let candidate: any;
	const borderColor =
		candidate.party === 'Democratic'
			? 'border-r-blue-400'
			: candidate.party === 'Republican'
			? 'border-r-red-400'
			: candidate.party === 'Green'
			? 'border-r-green-500'
			: 'border-r-gray-400';
</script>

<a
	href={`/${candidate.slug}`}
	class="bg-white hover:translate-y-[-4px] ease-in-out transition-transform flex flex-col justify-center items-center text-center cursor-pointer candidate p-4 border border-black shadow-neo rounded relative"
>
	<div
		class={`corner-tag rounded-tr-sm absolute top-0 right-0 w-0 h-0 border-t-[0] border-t-transparent border-r-[45px] ${borderColor} border-b-[45px] border-b-transparent`}
	/>

	<div class="absolute top-1 text-sm font-bold right-2 text-white font-['AuthenticSansCondensed']">
		{candidate.party[0]}
	</div>
	<img class="w-24 h-24 rounded-sm mb-2" src={imgUrl} alt={candidate.name} />
	<h2 class="text-xl font-medium">{candidate.name}</h2>
	<p class="text-xs">{candidate.current_position}</p>
</a>
