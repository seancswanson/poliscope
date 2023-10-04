<script>
	import logo from '$lib/assets/logo.png';
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
	let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((t % (1000 * 60)) / 1000);
</script>

<div class="countdown bg-slate-700 text-white">
	<div
		class="inner max-w-[600px] mx-auto flex items-center justify-center gap-2 py-1 px-4 uppercase font-['AuthenticSansCondensed'] tracking-wide"
	>
		<div class="text-xs">Countdown to Election Day:</div>
		<div class="text-xs">{days} days</div>
	</div>
</div>
<header class="shadow-sm mb-5 border-b border-b-gray-200 sticky top-0 bg-white z-50">
	<MediaQuery query="(min-width: 768px)" let:matches>
		{#if matches}
			<div class="inner max-w-[600px] mx-auto flex items-center justify-between py-2 px-4">
				<LogoAndName />
				<nav class="flex gap-2">
					{#each navItems as navItem (navItem.path)}
						<a
							class="text-lg px-2 font-['AuthenticSansCondensed'] tracking-wide"
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
					<span on:click={toggleNav} class="text-4xl cursor-pointer">&times;</span>
				{/if}
				{#if !navExpanded}
					<img src={hamburger} alt="" class="cursor-pointer" on:click={toggleNav} />
				{/if}
			</div>
			{#if navExpanded}
				<nav
					class="shadow-sm flex flex-col absolute w-full bg-slate-50 top-[66px] py-4 font-thin text-center border-b border-gray-300"
				>
					{#each navItems as navItem (navItem.path)}
						<a
							class="text-lg py-2 font-['AuthenticSansCondensed'] tracking-wide hover:bg-slate-100"
							href={navItem.path}>{navItem.label}</a
						>
					{/each}
				</nav>
			{/if}
		{/if}
	</MediaQuery>
</header>
