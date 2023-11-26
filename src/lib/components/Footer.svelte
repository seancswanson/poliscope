<script>
	import poliscopeLogo from '$lib/assets/logo.png';
	import swansongLogo from '$lib/assets/swansong-logo.png';
</script>

<footer class="px-4 py-8 mt-24 text-white bg-gray-800">
	<div
		class="container flex flex-col items-center justify-around gap-4 mx-auto sm:flex-row sm:items-start"
	>
		<!-- Logo and Name -->
		<div class="flex flex-col items-center gap-2 sm:items-start">
			<div class="flex gap-2">
				<img src={poliscopeLogo} alt="App Logo" class="inline-block w-12 h-12" />
				<div class="bg-gray-100 opacity-20 h-10 w-[1px]" />
				<img src={swansongLogo} alt="App Logo" class="inline-block w-12 h-12" />
			</div>
			<div class="flex flex-col text-xs text-center sm:text-left">
				<span>Poliscope was made with ♡</span>
				<a href="https://www.seancswanson.com" class="underline">by Sean Swanson</a>
			</div>
			<div class="flex flex-col text-xs text-center sm:text-left">
				<span>Questions? Issues? Updates?</span>
				<a href="/about" class="underline">visit the About page.</a>
			</div>
		</div>

		<!-- Navigation Links -->
		<div class="flex flex-col text-center sm:text-left">
			<span class="font-extrabold">Pages</span>
			<a href="/" class=" hover:text-gray-300">Home</a>
			<a href="candidates" class=" hover:text-gray-300">Candidates</a>
			<a href="issues" class=" hover:text-gray-300">Key Issues</a>
			<a href="about" class="hover:text-gray-300">About</a>
		</div>
	</div>
</footer>
