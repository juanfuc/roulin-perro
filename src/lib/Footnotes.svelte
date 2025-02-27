<script>
	import { getContext } from 'svelte';
	
	let articleContext = getContext('article');
</script>

{#each articleContext.footnotes as note, i}
	<p>[{i+1}] {note}</p>
{/each}