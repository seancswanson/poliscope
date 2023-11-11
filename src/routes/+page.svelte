<script>
	import Features from '../lib/components/Features.svelte';

	import HeroSection from '$lib/components/HeroSection.svelte';
	import triskele from '$lib/assets/triskele.png';
	import key from '$lib/assets/key.png';
	import data from '$lib/assets/data.png';
	import HowToUse from '$lib/components/HowToUse.svelte';
</script>

<section class="mb-8">
	<HeroSection />
</section>
<hr class="mb-8" />
<section class="mb-8">
	<Features />
</section>
<hr class="mb-8" />
<section>
	<HowToUse />
</section>
