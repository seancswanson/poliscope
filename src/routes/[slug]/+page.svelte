<script>
	/** @type {import('./$types').PageData} */
	export let data;
	/**
	 * @type {{ name: string; slug: string; party: string; current_position: string; announcement_date: string; past_roles: { role: string; start_year: number; end_year: number; }[]; quote: string; key_legislation_or_accomplishments: string[]; running_mate_2020: string; key_policy_points: string[]; policy_perspectives: { leftleaning: string; centrist: string; rightleaning: string; left_leaning?: undefined; right_leaning?: undefined; }; biography: { birth_year: number; birth_place: string; education: string[]; }; social_media: { website: string; facebook: string; twitter: string; instagram: string; youtube: string; }; election_date?: undefined; } | { name: string; slug: string; party: string; current_position: string; election_date: string; announcement_date: string; past_roles: { role: string; start_year: number; end_year: number; }[]; quote: string; key_legislation_or_accomplishments: string[]; running_mate_2020: string; key_policy_points: string[]; policy_perspectives: { left_leaning: string; centrist: string; right_leaning: string; leftleaning?: undefined; rightleaning?: undefined; }; biography: { birth_year: number; birth_place: string; education: string[]; }; social_media: { website: string; facebook: string; twitter: string; instagram: string; youtube: string; }; } | undefined}
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
		running_mate_2020: 'Loading',
		key_policy_points: ['Loading'],
		policy_perspectives: { left_leaning: 'Loading', centrist: 'Loading', right_leaning: 'Loading' },
		biography: { birth_year: 2023, birth_place: 'Loading', education: ['Loading'] },
		social_media: {
			website: 'Loading',
			facebook: 'Loading',
			twitter: 'Loading',
			instagram: 'Loading',
			youtube: 'Loading'
		},
		election_date: 'Loading'
	};

	const { candidate = defaultValue } = data || {};
	const imgUrl = `/portraits/${candidate.slug}-square.webp`;
</script>

<div class="container mx-auto p-6">
	<!-- Header -->
	<header class="text-center mb-5">
		<h1 class="text-3xl font-bold">{candidate.name}</h1>
		<span class="text-lg">{candidate.current_position}</span>
	</header>

	<!-- Portrait -->
	<img class="w-1/4 h-1/4 rounded-full mb-2 mx-auto" src={imgUrl} alt={candidate.name} />

	<!-- Quick Facts -->
	<div class="flex justify-between items-center mb-5">
		<span>Party: {candidate.party}</span>
		<span>Announcement Date: {candidate.announcement_date}</span>
	</div>

	<!-- Quote -->
	<blockquote class="italic border-l-4 border-gray-300 pl-4 mb-5">
		"{candidate.quote}"
	</blockquote>

	<!-- Biography -->
	<section class="mb-5">
		<h2 class="text-2xl">Biography</h2>
		<ul>
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
	<section class="mb-5">
		<h2 class="text-2xl">Past Roles</h2>
		<ul>
			{#each candidate.past_roles as role}
				<li>{role.start_year} - {role.end_year}: {role.role}</li>
			{/each}
		</ul>
	</section>

	<!-- Key Policy Points -->
	<section class="mb-5">
		<h2 class="text-2xl">Key Policy Points</h2>
		<ul>
			{#each candidate.key_policy_points as point}
				<li>{point}</li>
			{/each}
		</ul>
	</section>

	<!-- Social Media Links -->
	<section class="mb-5">
		<h2 class="text-2xl">Connect</h2>
		<ul>
			{#each Object.entries(candidate.social_media) as [platform, link]}
				<li><a href={link}>{platform}</a></li>
			{/each}
		</ul>
	</section>

	<!-- Footer -->
	<footer>
		<p>Back to <a href="/">Home</a></p>
	</footer>
</div>
