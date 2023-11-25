<script>
	import triskele from '$lib/assets/triskele.png';
	import key from '$lib/assets/key.png';
	import data from '$lib/assets/data.png';
</script>

<h3
	class="text-3xl shadow-neo bg-white border-[1.5px] border-black rounded w-fit mx-auto px-2 mb-4"
>
	Features
</h3>
<div
	class="flex flex-col justify-around w-4/5 mx-auto text-center cards-container sm:w-full sm:flex-row gap-4"
>
	<div class="flex flex-col bg-white border-[1.5px] border-black flex-1 rounded gap-2">
		<strong class="font-medium text-white bg-black">Tri-Spectrum Analysis</strong>
		<img src={triskele} alt="icon" class="w-16 pt-4 mx-auto" />
		<p class="px-2 pb-4">
			Poliscope anaylzes each candidate with and provides perspectives across the political
			spectrum.
		</p>
	</div>
	<div class="flex flex-col bg-white border-[1.5px] border-black flex-1 rounded gap-2">
		<strong class="font-medium text-white bg-black">Explore Key Issues</strong>
		<img src={key} alt="icon" class="w-16 pt-4 mx-auto" />
		<p class="px-2 pb-4">Stay informed about the key issues shaping the 2024 election.</p>
	</div>
	<div class="flex flex-col bg-white border-[1.5px] border-black flex-1 rounded gap-2">
		<strong class="font-medium text-white bg-black">Data Transparency</strong>
		<img src={data} alt="icon" class="w-16 pt-4 mx-auto" />
		<p class="px-2 pb-4">
			Our data is open-sourced and the Poliscope's code repository is made public.
		</p>
	</div>
</div>
