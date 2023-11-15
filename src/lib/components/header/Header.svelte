<script>
	import { page } from '$app/stores';
	import hamburger from '$lib/assets/hamburger.png';
	import MediaQuery from '../MediaQuery.svelte';
	import LogoAndName from './LogoAndName.svelte';
	let navExpanded = false;
	function toggleNav() {
		navExpanded = !navExpanded;
	}
	const navItems = [
		{
			label: 'Candidates',
			path: '/candidates'
		},
		{
			label: "'24 Issues",
			path: '/issues'
		},
		{
			label: 'About',
			path: '/about'
		}
	];
	const endDate = new Date('November 5, 2024 00:00:00').getTime();
	let now = new Date().getTime();
	let t = endDate - now;
	let days = Math.floor(t / (1000 * 60 * 60 * 24));
</script>

<div class="countdown bg-slate-700 text-white">
	<div
		class="inner max-w-[600px] mx-auto flex items-center justify-center gap-2 py-1 px-4 uppercase tracking-wide"
	>
		<div class="text-xs">Countdown to Election Day:</div>
		<div class="text-xs">{days} days</div>
	</div>
</div>
<header class="border-[1.5px] border-l-0 border-r-0 border-black sticky top-0 bg-white z-50">
	<MediaQuery query="(min-width: 768px)" let:matches>
		{#if matches}
			<div class="inner max-w-[600px] mx-auto flex items-center justify-between py-2 px-4">
				<LogoAndName />
				<nav class="flex gap-2">
					{#each navItems as navItem (navItem.path)}
						<a
							class="text-lg px-2 transition-all {$page.url.pathname === navItem.path
								? 'border-b-2 border-slate-700'
								: 'hover:border-b-2 hover:border-slate-700'}"
							href={navItem.path}>{navItem.label}</a
						>
					{/each}
				</nav>
			</div>
		{/if}
	</MediaQuery>
	<MediaQuery query="(max-width: 767px)" let:matches>
		{#if matches}
			<div class="inner max-w-[600px] mx-auto flex items-center justify-between py-2 px-4">
				<LogoAndName />
				{#if navExpanded}
					<button
						on:click={toggleNav}
						on:keydown|preventDefault={(e) => e.key === 'Enter' && toggleNav()}
						aria-label="Close navigation menu"
					>
						<span class="text-4xl cursor-pointer" aria-hidden="true">&times;</span>
					</button>
				{/if}
				{#if !navExpanded}
					<button
						on:click={toggleNav}
						on:keydown|preventDefault={(e) => e.key === 'Enter' && toggleNav()}
						aria-label="Open navigation menu"
					>
						<img src={hamburger} alt="Open navigation menu" />
					</button>
				{/if}
			</div>
			{#if navExpanded}
				<nav
					class="shadow-sm flex flex-col absolute w-full bg-slate-50 top-[66px] text-center border-b-[1.5px] border-t-[1.5px] border-black"
				>
					{#each navItems as navItem (navItem.path)}
						<a
							class="text-lg py-3 {$page.url.pathname === navItem.path
								? 'bg-slate-200 font-bold'
								: ''}  tracking-wide hover:bg-slate-100"
							href={navItem.path}>{navItem.label}</a
						>
					{/each}
				</nav>
			{/if}
		{/if}
	</MediaQuery>
</header>
