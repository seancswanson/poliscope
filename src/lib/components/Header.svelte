<script>
	import logo from '$lib/assets/logo.png';
	import hamburger from '$lib/assets/hamburger.png';
	import MediaQuery from './MediaQuery.svelte';
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
</script>

<header class="mb-5 border-b border-gray-400">
	<MediaQuery query="(min-width: 768px)" let:matches>
		{#if matches}
			<div class="inner max-w-[600px] mx-auto flex items-center justify-between py-2 px-4">
				<a href="/" class="logo flex items-center gap-2">
					<img src={logo} alt="Poliscope Logo" width="50" height="50" />
					<div class="text-xl font-bold">Poliscope</div>
				</a>
				<nav class="flex gap-2">
					{#each navItems as navItem (navItem.path)}
						<a class="text-lg px-2 font-medium" href={navItem.path}>{navItem.label}</a>
					{/each}
				</nav>
			</div>
		{/if}
	</MediaQuery>
	<MediaQuery query="(max-width: 767px)" let:matches>
		{#if matches}
			<div class="inner max-w-[600px] mx-auto flex items-center justify-between px-4">
				<a href="/" class="logo flex items-center gap-2 py-2">
					<img src={logo} alt="Poliscope Logo" width="50" height="50" />
					<div class="text-xl font-bold">Poliscope</div>
				</a>

				{#if navExpanded}
					<span on:click={toggleNav} class="text-4xl cursor-pointer">&times;</span>
				{/if}
				{#if !navExpanded}
					<img src={hamburger} alt="" class="cursor-pointer" on:click={toggleNav} />
				{/if}
			</div>
			{#if navExpanded}
				<nav
					class="flex flex-col absolute w-full bg-slate-50 top-[67px] py-4 z-50 font-thin text-center border-b border-gray-300"
				>
					{#each navItems as navItem (navItem.path)}
						<a class="text-lg py-2 font-medium hover:bg-slate-100" href={navItem.path}
							>{navItem.label}</a
						>
					{/each}
				</nav>
			{/if}
		{/if}
	</MediaQuery>
</header>
