<script>
	import HeroSection from '$lib/components/HeroSection.svelte';
	import Features from '$lib/components/Features.svelte';
	import HowToUse from '$lib/components/HowToUse.svelte';
</script>

<section class="mb-12">
	<HeroSection />
</section>
<hr class="mb-8" />
<section class="mb-8">
	<div id="learn" class="teaser flex text-xl flex-col gap-8 text-center pt-4 p-4 px-4">
		<p class="text-4xl font-extrabold">Listen... 👂</p>
		<p>We know that navigating the political landscape can be overwhelming.</p>
		<p class="font-bold">Poliscope simplifies the process for you.</p>
		<p>
			Our web app leverages OpenAI's ChatGPT, Ballotpedia, and open-sourced data to bring you
			unbiased, comprehensive profiles on each presidential candidate.
		</p>
	</div>
</section>
<hr class="mb-8" />
<section class="mb-8">
	<Features />
</section>
<hr class="mb-8" />
<section>
	<HowToUse />
</section>
