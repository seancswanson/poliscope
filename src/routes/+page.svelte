<script>
	import HeroSection from '$lib/components/HeroSection.svelte';
	import Features from '$lib/components/Features.svelte';
	import HowToUse from '$lib/components/HowToUse.svelte';
</script>

<section class="mb-12">
	<HeroSection />
</section>
<div class="border-b border-gray-300 mb-8" />
<section class="mb-8">
	<div id="learn" class="teaser flex text-xl flex-col gap-8 text-center pt-4 p-4 px-4">
		<p class="text-4xl font-extrabold">Listen... 👂</p>
		<p>We know that navigating the political landscape can be overwhelming.</p>
		<p class="font-bold">Poliscope simplifies the process for you.</p>
		<p>
			Our web app leverages OpenAI's ChatGPT, Ballotpedia, and open-sourced data to bring you
			comprehensive profiles on each presidential candidate in as much of an unbiased manner as
			possible.
		</p>
	</div>
</section>
<div class="border-b border-gray-300 mb-8" />
<section class="mb-8">
	<Features />
</section>
<div class="border-b border-gray-300 mb-8" />
<section>
	<HowToUse />
</section>
