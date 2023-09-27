<script lang="ts">
	import { onMount } from 'svelte';
	// Type definition for the exported prop
	export let query: string;

	// Type definitions for internal variables
	let mql: MediaQueryList;
	let mqlListener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null = null;
	let wasMounted: boolean = false;
	let matches: boolean = false;
	onMount(() => {
		wasMounted = true;
		return () => {
			removeActiveListener();
		};
	});

	$: {
		if (wasMounted) {
			removeActiveListener();
			addNewListener(query);
		}
	}

	function addNewListener(query: string) {
		mql = window.matchMedia(query);
		mqlListener = (v) => (matches = v.matches);
		mql.addListener(mqlListener);
		matches = mql.matches;
	}

	function removeActiveListener() {
		if (mql && mqlListener) {
			mql.removeListener(mqlListener);
		}
	}
</script>

<slot {matches} />
