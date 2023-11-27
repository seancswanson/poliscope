<script>
	import triskele from '$lib/assets/triskele.png';
	import key from '$lib/assets/key.png';
	import data from '$lib/assets/data.png';

	const features = [
		{
			title: 'Tri-Spectrum Analysis',
			imgSrc: triskele,
			description:
				'Poliscope anaylzes each candidate with and provides perspectives across the political spectrum.'
		},
		{
			title: 'Explore Key Issues',
			imgSrc: key,
			description: 'Stay informed about the key issues shaping the 2024 election.'
		},
		{
			title: 'Data Transparency',
			imgSrc: data,
			description: "Our data is open-sourced and the Poliscope's code repository is made public."
		}
	];
</script>

<div class="flex flex-col gap-4">
	<h3
		class="text-3xl shadow-neo bg-white border-[1.5px] border-black rounded w-fit mx-auto px-2 mb-4"
	>
		Features
	</h3>
	<div
		class="flex flex-col justify-around w-4/5 gap-4 mx-auto text-center cards-container sm:w-full sm:flex-row"
	>
		{#each features as { title, imgSrc, description }}
			<div class="flex flex-col bg-white border-[1.5px] border-black flex-1 rounded gap-2">
				<strong class="font-medium text-white bg-black">{title}</strong>
				<img src={imgSrc} alt="icon" class="w-16 pt-4 mx-auto" />
				<p class="px-2 pb-4">{description}</p>
			</div>
		{/each}
	</div>
</div>
