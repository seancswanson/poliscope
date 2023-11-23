<h1 class="text-3xl mb-8 shadow-neo border-[1.5px] border-black rounded w-fit mx-auto px-2">
	About Poliscope
</h1>
<div class="flex flex-col gap-4">
	<div class="border border-black shadow-neo rounded text-center flex flex-col grow">
		<h2 class="border-b-black border-b font-extrabold py-2">Purpose</h2>
		<span class="m-auto p-4 font-light">
			This web app was created with the intention of helping voters make informed decisions in the
			2024 election.
		</span>
	</div>
	<div class="border shadow-neo border-black rounded text-center">
		<h2 class="border-b-black border-b font-extrabold py-2">Data Sources</h2>
		<div class="flex flex-col gap-4 font-light p-4">
			<span class="m-auto">
				<strong>Candidate Quick Facts:</strong> The text from each candidate's Ballotpedia entry was
				fed into ChatGPT with specific instructions to summarize and parse the content as close to the
				original as possible and restructure it into a specified JSON schema that the front end displays.
			</span>
			<div class="line border-b-[1.5px]" />
			<span class="m-auto">
				<strong>Candidate Poliscope Analysis:</strong> The text from each candidate's Ballotpedia entry
				was fed into ChatGPT with specific instructions to summarize how voters who identify as left-leaning,
				centrist, and right-leaning might view the candidate's policy stances assuming they are a good-faith
				interlocutor.
			</span>
			<div class="line border-b-[1.5px]" />
			<span class="m-auto">
				<strong>Candidate Biography:</strong> The backend calls the Simple English Wikipedia API to fetch
				a short biography for each candidate.
			</span>
		</div>
	</div>
	<div class="border border-black shadow-neo rounded text-center flex flex-col">
		<h2 class="border-b-black border-b font-extrabold py-2">Data Transparency & Contributing</h2>
		<div class="flex flex-col gap-4 p-4">
			<span class="m-auto font-light">
				Do you have an idea for a feature or want to see more data? I'd love to hear from you!
			</span>
			<span class="m-auto font-light">
				You can view the data directly in the <a
					href="https://github.com/seancswanson/poliscope-sveltekit/"
					class="underline">GitHub</a
				> repository. If you see an issue with the data or would like to make a contribution, I encourage
				you to submit a GitHub Issue or create a Pull Request.
			</span>
		</div>
	</div>
</div>
