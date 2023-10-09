<script>
	// @ts-nocheck
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let showPopover = false;

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

<a href="/candidates" class="text-blue-500 hover:underline mb-2">← Back to candidates</a>
<div class="container mx-auto p-6 bg-white shadow-md rounded">
	<!-- Header -->
	<header class="text-center mb-8">
		<h1 class="text-4xl font-extrabold">{candidate.name}</h1>
		<span class="text-lg">{candidate.current_position}</span>
	</header>

	<!-- Portrait -->
	<img
		class="w-1/4 h-1/4 rounded-full mb-6 mx-auto border-4 shadow-sm border-gray-300"
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
		<div class="analysis-wrapper mb-6 border rounded px-4 py-2">
			<div class="analysis-header mb-4 text-center">
				<div class="analysis-title flex gap-2 items-center justify-center">
					<h2 class="font-[600] text-2xl">Poliscope Analysis</h2>
					<button on:click={() => (showPopover = !showPopover)}
						><img src={question} alt="q" class="w-4 h-4" /></button
					>
				</div>
				<h3>How Different Political Alignments Interpret the Candidate's Policy Stances</h3>
				<span class="text-xs italic"
					>Where on the political spectrum do you identify? <a
						class="text-blue-500 underline"
						href="https://www.pewresearch.org/politics/quiz/political-typology/"
						alt="Political Quiz">Take the quiz.</a
					></span
				>
			</div>
			<div>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
					<div class="bg-gray-100 p-4 rounded">
						<h3 class="font-[600] text-xl mb-3">Left Leaning</h3>
						<p>{candidate.policy_perspectives.left_leaning}</p>
					</div>
					<div class="bg-gray-100 p-4 rounded">
						<h3 class="font-[600] text-xl mb-3">Centrist</h3>
						<p>{candidate.policy_perspectives.centrist}</p>
					</div>
					<div class="bg-gray-100 p-4 rounded">
						<h3 class="font-[600] text-xl mb-3">Right Leaning</h3>
						<p>{candidate.policy_perspectives.right_leaning}</p>
					</div>
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
				class="flex flex-col gap-2 rounded py-2 px-4 relative overflow-scroll h-1/2 w-3/4 max-w-[500px] bg-white"
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
	<section class="mb-6">
		<h2 class="font-[600] text-2xl mb-3">Biography</h2>
		<ul class="list-disc list-inside">
			<li>Birth Year: {candidate.biography.birth_year}</li>
			<li>Birth Place: {candidate.biography.birth_place}</li>
			<li>
				Education:
				{#each candidate.biography.education as education}
					<span>{education}</span>
				{/each}
			</li>
		</ul>
	</section>

	<!-- Past Roles -->
	<section class="mb-6">
		<h2 class="font-[600] text-2xl mb-3">Past Roles</h2>
		<ul class="list-disc list-inside">
			{#each candidate.past_roles as role}
				<li>{role.start_year} - {role.end_year}: {role.role}</li>
			{/each}
		</ul>
	</section>

	<!-- Key Policy Points -->
	<section class="mb-6">
		<h2 class="font-[600] text-2xl mb-3">Key Policy Points</h2>
		<ul class="list-disc list-inside">
			{#each candidate.key_policy_points as point}
				<li>{point}</li>
			{/each}
		</ul>
	</section>

	<!-- Social Media Links -->
	<section class="mb-6">
		<h2 class="font-[600] text-2xl mb-3">Connect with {candidate.name}</h2>
		<ul class="flex gap-4">
			{#each Object.entries(candidate.social_media) as [platform, link]}
				{#if link}
					{@const imgUrl = `/social/${platform}.png`}

					<li>
						<a href={link} class="text-blue-500 hover:underline flex items-center gap-2">
							<img src={imgUrl} alt={`${platform} logo`} class="w-8 h-8" />
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</section>
</div>
