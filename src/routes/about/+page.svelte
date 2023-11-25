<script>
	import about from '$lib/assets/issues.png';
	import buyMeACoffee from '$lib/assets/buymeacoffee.png';
</script>

<h1
	class="text-2xl sm:text-3xl mb-8 bg-white shadow-neo border-[1.5px] border-black rounded w-fit mx-auto px-2"
>
	About Poliscope
</h1>
<div class="flex flex-col gap-4">
	<img src={about} alt="" class="w-1/2 mx-auto sm:w-2/5" />
	<div class="flex flex-col text-center border border-black rounded shadow-neo grow">
		<h2 class="py-2 font-extrabold bg-white border-b rounded-t border-b-black">Purpose</h2>
		<span class="p-4 m-auto font-light bg-white rounded-b">
			To help voters make an informed decision in the 2024 election by consolidating public
			information about presidential candidates and using generative AI to present their policies
			from all sides.
		</span>
	</div>
	<div class="text-center border border-black rounded shadow-neo">
		<h2 class="py-2 font-extrabold bg-white border-b rounded-t border-b-black">Data Sources</h2>
		<div class="flex flex-col gap-4 p-4 font-light bg-white rounded-b">
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
	<div class="flex flex-col text-center border border-black rounded shadow-neo">
		<h2 class="py-2 font-extrabold bg-white border-b rounded-t border-b-black">
			Data Transparency & Contributing
		</h2>
		<div class="flex flex-col gap-4 p-4 bg-white rounded-b">
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
			<span class="flex flex-col m-auto font-light">
				<span>Want to show some ❤️?</span>
				<a href="https://www.buymeacoffee.com/seancswanson" class="mx-auto">
					Click or scan below to buy me a coffee 😁
					<img src={buyMeACoffee} alt="Buy Me a Coffee QR Code" class="w-40 mx-auto" />
				</a>
			</span>
		</div>
	</div>
</div>
