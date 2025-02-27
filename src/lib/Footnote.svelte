<script>
	import { getContext } from 'svelte';

	export let note;

	// Obtener el contexto 'article'
	let articleContext = getContext('article');

	// Asignar un ID a la nota y agregarla al array
	let id = articleContext.footnotes.length + 1;
	articleContext.footnotes.push(note);
</script>

<sup id="footnote-{id}" class="footnote">
	<a href="#footnote-ref-{id}">[{id}]</a>
</sup>
