<script>
	import { onMount } from 'svelte';

	import { fade, slide } from 'svelte/transition';
	let showPopover = false;
	let selectedTab = '';
	import about from '$lib/assets/about.png';
	import question from '$lib/assets/question.png';
	import location from '$lib/assets/location.png';
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);

	const candidate = data.candidate;
	const wikipediaPageData = data.wikipediaPageData;
	const borderColor =
		candidate.party === 'Democratic'
			? 'border-r-blue-400'
			: candidate.party === 'Republican'
			? 'border-r-red-400'
			: candidate.party === 'Green'
			? 'border-r-green-500'
			: 'border-r-gray-400';
	onMount(() => {
		const paragraphs = document.querySelectorAll('.wiki-content p');
		paragraphs.forEach((p, index) => {
			if (index < 3) {
				p.classList.add('mb-4');
			} else {
				p.classList.add('hidden');
			}
		});
	});
	const portraitImgUrl = `/portraits/${candidate.slug}-square.webp`;
	const partyImgUrl = `/political-party-icons/${candidate.party.toLowerCase()}-icon.png`;
</script>

{#if candidate.name}
	<a
		href="/candidates"
		id="back-btn"
		class="flex w-fit px-4 text-blue-500 hover:underline mb-4 shadow-neo bg-white border-[1.5px] border-black rounded"
		>← Back to candidates</a
	>
	<div class="mx-auto py-6">
		<div class="flex sm:gap-6 flex-col sm:flex-row mb-4 sm:mb-0">
			<div
				class="basis-[1/2] shrink-0 relative gap-2 flex flex-col text-center mb-4 bg-white shadow-neo border-black border-[1.5px] rounded p-4"
			>
				<h1 class="text-4xl font-extrabold">{candidate.name}</h1>
				<span class="text-lg">{candidate.current_position}</span>
				<!-- Portrait -->
				<img
					class="w-48 h-48 mx-auto border-[1.5px] border-slate-300"
					src={portraitImgUrl}
					alt={candidate.name}
				/>
				<div
					class={`corner-tag absolute top-0 right-0 w-0 h-0 border-t-[0] border-t-transparent border-r-[45px] ${borderColor} border-b-[45px] border-b-transparent`}
				/>
				<div
					class="absolute top-1 text-sm font-bold right-2 text-white font-['AuthenticSansCondensed']"
				>
					{candidate.party[0]}
				</div>
			</div>
			<div class="quick-facts">
				<!-- Quick Facts -->
				<div class="flex flex-col h-full gap-3">
					<div class="top-row flex gap-2 justify-around">
						<div class="border border-black rounded text-center flex flex-col">
							<span class="bg-black text-white font-extrabold">Party</span>
							<div>
								<img src={partyImgUrl} class="w-16 p-2" />
							</div>
						</div>
						<div class="w-20 border border-black rounded text-center flex flex-col">
							<span class="bg-black text-white font-extrabold">Age</span>
							<span class="m-auto text-xl font-light"
								>≈{new Date().getFullYear() - candidate.biography.birth_year}
							</span>
						</div>
						<div class="border border-black rounded text-center flex flex-col">
							<span class="bg-black text-white font-extrabold px-2">Birthplace</span>
							<a
								target="_blank"
								href={`https://www.google.com/maps?q=${candidate.biography.birth_place}`}
								class="text-xl h-full m-auto font-light flex items-center px-2 gap-2"
								><span class="inline-block">{candidate.biography.birth_place}</span>
								<img src={location} alt="q" class=" w-6 h-6" />
							</a>
						</div>
					</div>
					{#if candidate.quote !== 'N/A'}
						<div class="border border-black rounded text-center flex flex-col">
							<span class="bg-black text-white font-extrabold">Featured Quote</span>
							<div>
								<blockquote class="italic border-l-4 pl-2">
									"{candidate.quote}"
								</blockquote>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<section>
			<div id="analysis-wrapper" class="mb-6 border-black border-[1.5px] rounded pt-2">
				<div id="analysis-header" class="mb-4 text-center flex gap-3 flex-col">
					<div
						id="analysis-title"
						class="w-fit flex px-4 border border-black bg-white rounded gap-2 mx-auto shadow-neo items-center justify-center"
					>
						<h2 class="font-[600] text-2xl">Poliscope Analysis</h2>
						<button class="shrink-0" on:click={() => (showPopover = !showPopover)}
							><img src={question} alt="q" class="w-4 h-4" /></button
						>
					</div>
					<h3>How Different Political Alignments Interpret the Candidate's Policy Stances</h3>
					<span class="text-xs italic"
						>Where on the political spectrum do you identify? <a
							class="text-blue-500 underline font-semibold"
							href="https://www.pewresearch.org/politics/quiz/political-typology/"
							alt="Political Quiz">Take the quiz.</a
						></span
					>
				</div>
				<div>
					<div class="grid grid-rows-1 grid-cols-3">
						<button
							on:click={() => {
								selectedTab = 'left_leaning';
							}}
							class={`${
								selectedTab === 'left_leaning' ? 'bg-pink-300 ' : ''
							} border-0 border-r-2 border-t-2 border-black px-4 py-2`}>Left Leaning</button
						>
						<button
							on:click={() => {
								selectedTab = 'centrist';
							}}
							class={`${
								selectedTab === 'centrist' ? 'bg-pink-300 ' : ''
							} border-0 border-t-2 border-black border-r-2 px-4 py-2`}>Centrist</button
						>
						<button
							on:click={() => {
								selectedTab = 'right_leaning';
							}}
							class={`${
								selectedTab === 'right_leaning' ? 'bg-pink-300 ' : ''
							} border-b-0 border-t-2 border-black px-4 py-2`}>Right Leaning</button
						>
					</div>
					<!-- Content Container -->
					<div class="bg-white py-4 px-6 rounded border-0 border-t-2 rounded-t-none border-black">
						{#if selectedTab === 'left_leaning'}
							<p transition:slide>
								{candidate.policy_perspectives.left_leaning}
							</p>
						{:else if selectedTab === 'centrist'}
							<p transition:slide>
								{candidate.policy_perspectives.centrist}
							</p>
						{:else if selectedTab === 'right_leaning'}
							<p transition:slide>
								{candidate.policy_perspectives.right_leaning}
							</p>
						{:else}
							<img src={about} alt="illustration" />
						{/if}
					</div>
				</div>
			</div>
		</section>
		{#if showPopover}
			<div
				transition:fade
				class="fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] h-full w-full flex items-center justify-center"
				on:click={() => (showPopover = !showPopover)}
			>
				<!-- This div is your content box -->
				<div
					class="flex flex-col shadow-neo border-[1.5px] border-black gap-2 rounded py-4 px-6 relative overflow-scroll h-1/2 w-3/4 max-w-[500px] bg-white"
				>
					<p class="font-bold text-lg">How Were These Policy Perspectives Generated?</p>
					<p class="mb-4">
						These policy perspectives are a unique blend of data-driven insights and advanced
						language processing algorithms. We started by sourcing comprehensive data about each
						candidate from Ballotpedia, a trusted platform for political information.
					</p>

					<p class="mb-4">
						The data was then processed through ChatGPT, which was prompted to summarize how a voter
						from the candidate's party might view their policy stances. This resulted in a
						condensed, yet insightful, look at the candidate's policy perspectives that reflects the
						general sentiments of party-aligned voters.
					</p>

					<p class="mb-4">
						This approach allows us to present information that is both rich in detail and easy to
						digest, aimed at helping you make an informed decision in the elections.
					</p>
				</div>
			</div>
		{/if}

		<!-- Biography -->
		<section class="mb-6 text-center">
			<div class="border border-black rounded text-center flex flex-col">
				<h2 class="text-2xl bg-black text-white font-extrabold px-2">Who is {candidate.name}?</h2>
				<div class="wiki-content p-2">
					{@html wikipediaPageData}
				</div>
				<a
					href="https://simple.wikipedia.org/wiki/Main_Page"
					class="italic text-center text-xs mb-2">Info courtesy of Wikipedia</a
				>
			</div>
		</section>

		<!-- Social Media Links -->
		<section
			class="mb-6 shadow-neo border-[1.5px] border-black rounded p-2 flex flex-col justify-center items-center"
		>
			<h2 class="font-[600] text-2xl mb-3">Connect with {candidate.name}</h2>
			<ul class="flex gap-4">
				{#each Object.entries(candidate.social_media) as [platform, link]}
					{#if link}
						{@const portraitImgUrl = `/social/${platform}.png`}

						<li class="shadow-sm px-2 mb-2">
							<a href={link} class="text-blue-500 hover:underline flex items-center gap-2">
								<img src={portraitImgUrl} alt={`${platform} logo`} class="w-8 h-8" />
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		</section>
	</div>
{:else}
	<div>Loading...</div>
{/if}

<style lang="scss">
	#biography {
		background: pink;
		p {
			@apply mb-2;
			padding: 100px;
		}
	}
</style>
