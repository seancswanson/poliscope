<script>
	let selectedStep = 'select';

	const steps = {
		select: {
			step: 1,
			title: 'Select a Candidate',
			description:
				'Navigate to our <a href="/candidates" class="text-blue-600 underline">candidates</a> page and choose who you want to know more about.'
		},
		read: {
			step: 2,
			title: 'Read the Analysis',
			description:
				"For each candidate, you'll find a detailed profile analyzed from three different political perspectives."
		},
		learn: {
			step: 3,
			title: 'Learn About Issues',
			description:
				'Head over to the <a href="/issues" class="text-blue-600 underline">issues</a> page to understand the core issues affecting this election.'
		},
		decide: {
			step: 4,
			title: 'Make An Informed Decision 🎉',
			description:
				"Armed with balanced and comprehensive insights, you're ready to make your voice heard in the 2024 election. "
		}
	};
</script>

<div class="flex flex-col gap-4">
	<h3
		class="text-2xl sm:text-3xl bg-white shadow-neo border-[1.5px] border-black rounded w-fit mx-auto px-2 mb-6"
	>
		How to Use Poliscope
	</h3>
	<div class="flex flex-col gap-4 mb-4 sm:grid sm:grid-cols-4">
		{#each Object.entries(steps) as [key, value], index}
			<button
				class:active={selectedStep === key}
				on:click={() => (selectedStep = key)}
				class="relative sm:py-0 px-2 border-[1.5px] text-sm rounded bg-white hover:bg-gray-100 shadow-neo border-black hover:translate-y-[-2px] transition-all"
			>
				{value.title}
				<span
					class="absolute left-[-6px] top-[-8px] bg-white border-black w-6 h-6 rounded-full border-[1.5px]"
					>{value.step}</span
				>
			</button>
		{/each}
	</div>
	<div class="px-4 border-l-[1.5px] border-black">
		<p class="font-semibold">{steps[selectedStep].title}</p>
		<p>{@html steps[selectedStep].description}</p>
	</div>
</div>

<style>
	.active {
		background-color: #f3f4f6;
		font-weight: bold;
	}
</style>
