<script>
	// @ts-nocheck
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let showPopover = false;
	let selectedTab = '';

	import question from '$lib/assets/question.png';
	/** @type {import('./$types').PageData} */
	export let data;
	/**
	 * @type {{ name: string; slug: string; party: string; current_position: string; announcement_date: string; past_roles: { role: string; start_year: number; end_year: number; }[]; quote: string; key_legislation_or_accomplishments: string[]; running_mate_2024: string; key_policy_points: string[]; policy_perspectives: { left_leaning: string; centrist: string; right_leaning: string; }; biography: { birth_year: number; birth_place: string; education: string[]; }; social_media: { website: string; facebook: string; twitter: string; instagram: string; youtube: string; }; }}
	 */
	const defaultValue = {
		name: 'Loading',
		slug: 'Loading',
		party: 'Loading',
		current_position: 'Loading',
		announcement_date: 'Loading',
		past_roles: [{ role: 'Loading', start_year: 2023, end_year: 2023 }],
		quote: 'Loading',
		key_legislation_or_accomplishments: ['Loading'],
		running_mate_2024: 'Loading',
		key_policy_points: ['Loading'],
		policy_perspectives: { left_leaning: 'Loading', centrist: 'Loading', right_leaning: 'Loading' },
		biography: { birth_year: 2023, birth_place: 'Loading', education: ['Loading'] },
		social_media: {
			website: 'Loading',
			facebook: 'Loading',
			twitter: 'Loading',
			instagram: 'Loading',
			youtube: 'Loading'
		}
	};

	const { candidate = defaultValue } = data || {};
	const imgUrl = `/portraits/${candidate.slug}-square.webp`;
</script>

<a
	href="/candidates"
	id="back-btn"
	class="flex w-fit text-blue-500 hover:underline mb-4 shadow-neo bg-white border-2 border-black rounded"
	>← Back to candidates</a
>
<div class="container mx-auto p-6 bg-white shadow-neo border-black border-2 rounded">
	<!-- Header -->
	<header class="text-center mb-8">
		<h1 class="text-4xl font-extrabold">{candidate.name}</h1>
		<span class="text-lg">{candidate.current_position}</span>
	</header>

	<!-- Portrait -->
	<img
		class="w-1/4 h-1/4 rounded-full mb-6 mx-auto border-2 shadow-neo border-black"
		src={imgUrl}
		alt={candidate.name}
	/>

	<!-- Quick Facts -->
	<div class="flex justify-between items-center mb-6">
		<span><strong>Party:</strong> {candidate.party}</span>
		<span><strong>Announcement Date:</strong> {candidate.announcement_date}</span>
	</div>

	<!-- Quote -->
	<blockquote class="italic border-l-4 pl-4 mb-6">
		"{candidate.quote}"
	</blockquote>

	<section>
		<div id="analysis-wrapper" class="mb-6 border-black border-2 shadow-neo rounded pt-2">
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
						on:click={() => (selectedTab = 'left_leaning')}
						class={`${
							selectedTab === 'left_leaning' ? 'bg-pink-300 ' : ''
						} border-0 border-r-2 border-t-2 border-black px-4 py-2`}>Left Leaning</button
					>
					<button
						on:click={() => (selectedTab = 'centrist')}
						class={`${
							selectedTab === 'centrist' ? 'bg-pink-300 ' : ''
						} border-0 border-t-2 border-black border-r-2 px-4 py-2`}>Centrist</button
					>
					<button
						on:click={() => (selectedTab = 'right_leaning')}
						class={`${
							selectedTab === 'right_leaning' ? 'bg-pink-300 ' : ''
						} border-b-0 border-t-2 border-black px-4 py-2`}>Right Leaning</button
					>
				</div>
				<!-- Content Container -->
				<div class="bg-white py-4 px-6 rounded border-0 border-t-2 rounded-t-none border-black">
					{#if selectedTab === 'left_leaning'}
						<p>{candidate.policy_perspectives.left_leaning}</p>
					{:else if selectedTab === 'centrist'}
						<p>{candidate.policy_perspectives.centrist}</p>
					{:else if selectedTab === 'right_leaning'}
						<p>{candidate.policy_perspectives.right_leaning}</p>
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
				class="flex flex-col shadow-neo border-2 border-black gap-2 rounded py-4 px-6 relative overflow-scroll h-1/2 w-3/4 max-w-[500px] bg-white"
			>
				<p class="font-bold text-lg">How Were These Policy Perspectives Generated?</p>
				<p class="mb-4">
					These policy perspectives are a unique blend of data-driven insights and advanced language
					processing algorithms. We started by sourcing comprehensive data about each candidate from
					Ballotpedia, a trusted platform for political information.
				</p>

				<p class="mb-4">
					The data was then processed through ChatGPT, which was prompted to summarize how a voter
					from the candidate's party might view their policy stances. This resulted in a condensed,
					yet insightful, look at the candidate's policy perspectives that reflects the general
					sentiments of party-aligned voters.
				</p>

				<p class="mb-4">
					This approach allows us to present information that is both rich in detail and easy to
					digest, aimed at helping you make an informed decision in the elections.
				</p>
			</div>
		</div>
	{/if}
	<!-- Biography -->
	<section class="mb-6 border-black border-2 text-center rounded shadow-neo px-2 py-2">
		<h2 class="font-[600] text-2xl mb-3">Biography</h2>
		<ul class=" list-inside text-left mx-auto w-fit">
			<li>Birth Year: {candidate.biography.birth_year}</li>
			<li>Birth Place: {candidate.biography.birth_place}</li>
			<li>
				Education:
				<ul class=" list-inside text-left mx-2 w-fit">
					{#each candidate.biography.education as education}
						<li class="shadow-sm border-2 border-black px-2 mb-2">{education}</li>
					{/each}
				</ul>
			</li>
		</ul>
	</section>

	<!-- Past Roles -->
	<section class="mb-6 shadow-neo border-black border-2 text-center rounded py-2">
		<h2 class="font-[600] text-2xl mb-3">Past Roles</h2>
		<ul
			class=" list-inside text-left flex gap-4 text-center justify-evenly mx-auto flex-wrap w-fit"
		>
			{#each candidate.past_roles as role}
				<li class="shadow-sm basis-1/4 flex flex-col mb-2 gap-2">
					<span class=" border-2 border-black p-2 rounded">{role.role}</span>
					<span class="text-sm">{role.start_year} - {role.end_year}</span>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Key Policy Points -->
	<section class="mb-6 shadow-neo border-black border-2 text-center rounded px-2 py-2">
		<h2 class="font-[600] text-2xl mb-3">Key Policy Points</h2>
		<ul class="flex flex-col gap-4 list-inside text-left mx-auto w-fit">
			{#each candidate.key_policy_points as point}
				<li class="rounded shadow-sm border-2 border-black p-2 mb-2 font-bold">{point}</li>
			{/each}
		</ul>
	</section>

	<!-- Social Media Links -->
	<section
		class="mb-6 shadow-neo border-2 border-black rounded p-2 flex flex-col justify-center items-center"
	>
		<h2 class="font-[600] text-2xl mb-3">Connect with {candidate.name}</h2>
		<ul class="flex gap-4">
			{#each Object.entries(candidate.social_media) as [platform, link]}
				{#if link}
					{@const imgUrl = `/social/${platform}.png`}

					<li class="shadow-sm border-2 border-black px-2 mb-2">
						<a href={link} class="text-blue-500 hover:underline flex items-center gap-2">
							<img src={imgUrl} alt={`${platform} logo`} class="w-8 h-8" />
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</section>
</div>

<style>
	#back-btn,
	#anaysis-title {
	}
</style>
