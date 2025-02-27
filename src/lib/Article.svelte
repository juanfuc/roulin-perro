<script>
	import { setContext } from 'svelte';

	// Crear un array de footnotes vacío
	let footnotes = [];
	setContext('article', { footnotes });
</script>

<article>
	<slot></slot>

	<!-- Mostrar notas al final del artículo -->
	{#if footnotes.length > 0}
		<section class="footnotes">
			<hr>
			<h3>Notas</h3>
			<ol>
				{#each footnotes as note, index}
					<li id="footnote-ref-{index + 1}">
						{@html note} <a href="#footnote-{index + 1}">↩</a>
					</li>
				{/each}
			</ol>
		</section>
	{/if}
</article>

<style>
	.footnotes {
		margin-top: 2em;
		font-size: 0.9em;
		color: #333;
	}

    .footnotes a {
		text-decoration: none;
	}
</style>
