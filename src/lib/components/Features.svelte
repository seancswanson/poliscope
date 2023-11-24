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
	class="cards-container flex flex-col sm:w-full w-1/2 mx-auto sm:flex-row gap-4 text-center justify-around"
>
	<div class="flex flex-col bg-white border-[1.5px] border-black flex-1 rounded gap-2">
		<strong class="font-medium bg-black text-white">Tri-Spectrum Analysis</strong>
		<img src={triskele} alt="icon" class="w-16 mx-auto pt-4" />
		<p class="px-2 pb-4">
			Poliscope anaylzes each candidate with and provides perspectives across the political
			spectrum.
		</p>
	</div>
	<div class="flex flex-col bg-white border-[1.5px] border-black flex-1 rounded gap-2">
		<strong class="font-medium bg-black text-white">Explore Key Issues</strong>
		<img src={key} alt="icon" class="w-16 mx-auto pt-4" />
		<p class="px-2 pb-4">Stay informed about the key issues shaping the 2024 election.</p>
	</div>
	<div class="flex flex-col bg-white border-[1.5px] border-black flex-1 rounded gap-2">
		<strong class="font-medium bg-black text-white">Data Transparency</strong>
		<img src={data} alt="icon" class="w-16 mx-auto pt-4" />
		<p class="px-2 pb-4">
			Our data is open-sourced and the Poliscope's code repository is made public.
		</p>
	</div>
</div>
