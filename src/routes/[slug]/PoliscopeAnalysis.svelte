<script>
	export let candidate;
	import { fade, slide } from 'svelte/transition';
	let showPopover = false;
	let selectedTab = '';
	import about from '$lib/assets/about.png';
	import question from '$lib/assets/question.png';
	import link from '$lib/assets/link.png';
</script>

<div id="analysis-wrapper" class="border-black border-[1.5px] rounded shadow-neo bg-white">
	<div id="analysis-header" class="mb-4 text-center flex gap-3 flex-col">
		<div
			id="analysis-title"
			class="flex p-2 analysis-gradient border-b-[1.5px] border-0 border-black gap-2 mx-auto w-full items-center justify-center"
		>
			<h2 class="font-bold text-2xl shrink-0">Poliscope Analysis</h2>
			<button
				class="shrink-0"
				on:click={() => (showPopover = !showPopover)}
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						showPopover = !showPopover;
					}
				}}
				on:keypress={(e) => {
					if (e.key === 'Enter') {
						showPopover = !showPopover;
					}
				}}
				aria-expanded={showPopover}
				aria-controls="popover-content"><img src={question} alt="q" class="w-4 h-4" /></button
			>
		</div>
		Where on the political spectrum do you identify? Take one of these quizzes.
		<div class="flex justify-center gap-4">
			<a
				class="text-xs italic flex group"
				href="https://www.pewresearch.org/politics/quiz/political-typology/"
				alt="Political Quiz"
			>
				Shorter, less comprehensive<span class="underline font-semibold text-blue-600">
					<img
						src={link}
						alt="link"
						class="w-4 h-4 ml-1 inline opacity-50 group-hover:opacity-100"
					/></span
				>
			</a>
			<a
				class="text-xs italic flex group"
				href="https://www.isidewith.com/political-quiz"
				alt="Political Quiz"
			>
				Longer, more comprehensive<span class="underline font-semibold text-blue-600">
					<img
						src={link}
						alt="link"
						class="w-4 h-4 ml-1 inline opacity-50 group-hover:opacity-100"
					/></span
				>
			</a>
		</div>
	</div>
	<div>
		<div class="grid grid-rows-1 grid-cols-3">
			<button
				on:click={() => {
					selectedTab = 'left_leaning';
				}}
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						selectedTab = 'left_leaning';
					}
				}}
				on:keypress={(e) => {
					if (e.key === 'Enter') {
						selectedTab = 'left_leaning';
					}
				}}
				class={`${
					selectedTab === 'left_leaning' ? 'bg-blue-300 ' : ''
				} border-0 border-r-[1.5px] border-t-[1.5px] border-black px-4 py-2`}>Left Leaning</button
			>
			<button
				on:click={() => {
					selectedTab = 'centrist';
				}}
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						selectedTab = 'centrist';
					}
				}}
				on:keypress={(e) => {
					if (e.key === 'Enter') {
						selectedTab = 'centrist';
					}
				}}
				class={`${
					selectedTab === 'centrist' ? 'bg-slate-200 ' : ''
				} border-0 border-t-[1.5px] border-black border-r-[1.5px] px-4 py-2`}>Centrist</button
			>
			<button
				on:click={() => {
					selectedTab = 'right_leaning';
				}}
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						selectedTab = 'right_leaning';
					}
				}}
				on:keypress={(e) => {
					if (e.key === 'Enter') {
						selectedTab = 'right_leaning';
					}
				}}
				class={`${
					selectedTab === 'right_leaning' ? 'bg-red-300 ' : ''
				} border-b-0 border-t-[1.5px] border-black px-4 py-2`}>Right Leaning</button
			>
		</div>
		<!-- Content Container -->
		<div
			class="bg-white py-4 px-6 rounded border-0 border-t-[1.5px] rounded-t-none border-black font-light"
		>
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
{#if showPopover}
	<div
		transition:fade
		class="fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] h-full w-full flex items-center justify-center"
		on:click={() => (showPopover = !showPopover)}
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				showPopover = !showPopover;
			}
		}}
		on:keypress={(e) => {
			if (e.key === 'Enter') {
				showPopover = !showPopover;
			}
		}}
		role="button"
	>
		<!-- This div is your content box -->
		<div
			class="flex flex-col shadow-neo border-[1.5px] border-black gap-2 rounded py-4 px-6 relative overflow-scroll h-1/2 w-3/4 max-w-[500px] bg-white"
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

<style lang="scss">
	.analysis-gradient {
		background: rgb(63, 94, 251);
		background: linear-gradient(
			29deg,
			rgba(63, 94, 251, 1) 0%,
			rgba(134, 145, 202, 1) 10%,
			rgba(255, 255, 255, 1) 30%,
			rgba(255, 255, 255, 1) 70%,
			rgba(210, 137, 137, 1) 90%,
			rgba(252, 70, 107, 1) 100%
		);
	}
</style>
