<script>
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
	import hamburger from '$lib/assets/hamburger.png';
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
	<div class="inner max-w-[768px] mx-auto flex items-center justify-between py-2 px-4">
		<a href="/" class="logo flex items-center gap-2">
			<img src={logo} alt="Poliscope Logo" width="50" height="50" />
			<div id="app-name" class="text-2xl font-bold">Poliscope</div>
		</a>
		<nav class="navigation">
			{#each navItems as navItem (navItem.path)}
				<a
					class="text-lg px-2 transition-all {navItem.path === $page.url.pathname
						? 'border-b-2 border-slate-700'
						: 'hover:border-b-2 hover:border-slate-700'}"
					href={navItem.path}>{navItem.label}</a
				>
			{/each}
		</nav>
		<button
			on:click={toggleNav}
			class="hamburger"
			aria-label={navExpanded ? 'Close navigation menu' : 'Open navigation menu'}
		>
			<!-- Render hamburger icon or close icon based on navExpanded -->
			{@html navExpanded ? '×' : `<img src=${hamburger} alt="Open navigation menu" />`}
		</button>
	</div>
	{#if navExpanded}
		<nav
			class="shadow-sm flex flex-col absolute w-full bg-slate-50 top-[66px] text-center border-b-[1.5px] border-t-[1.5px] border-black"
		>
			{#each navItems as navItem (navItem.path)}
				<a
					class="text-lg py-3 {navItem.path === $page.url.pathname
						? 'bg-slate-200 font-bold'
						: ''} tracking-wide hover:bg-slate-100"
					href={navItem.path}>{navItem.label}</a
				>
			{/each}
		</nav>
	{/if}
</header>

<style>
	.navigation {
		display: none;
	}
	.hamburger {
		display: block;
	}
	@media (min-width: 768px) {
		.navigation {
			display: flex;
		}
		.hamburger {
			display: none;
		}
	}
</style>
