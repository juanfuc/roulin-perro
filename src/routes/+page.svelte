<script>
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  let htmlContent = "";
  let showFr1829 = false;
  let showFr1865 = false;

  onMount(async () => {
    const basePath = import.meta.env.MODE === "development" ? "" : "/roulin-perro"; 
    const response = await fetch(`${basePath}/salida.html`);
    htmlContent = await response.text();
  });
</script>

<header class="titulo">
  <h2>François Désiré Roulin</h2>
  <h1>Historia natural y recuerdos de viaje <br> Animales Domésticos <br> El perro</h1>
  <h6>Traducido por: Joaquín Acosta</h6>
  <h1>(1849)</h1>
</header>

<!-- Botones para alternar versiones -->

<div class="buttons-container">
<div class="controls">
  <button on:click={() => showFr1865 = !showFr1865}>
    {showFr1865 ? "Ocultar" : "Mostrar"} Versión 1865
  </button>
  <button on:click={() => showFr1829 = !showFr1829}>
    {showFr1829 ? "Ocultar" : "Mostrar"} Versión 1829
  </button>
</div>

<div class="downloads">
  <a href="https://www.biodiversitylibrary.org/page/6049047#page/22/mode/1up" target="_blank"><button>FR1829<Icon icon="material-symbols:download" width="24" height="24"/></button></a>
  <a href="https://www.biodiversitylibrary.org/item/235575#page/251/mode/1up" target="_blank"><button>ES1849<Icon icon="material-symbols:download" width="24" height="24"/></button></a>
  <a href="https://gallica.bnf.fr/ark:/12148/bpt6k97741179" target="_blank"><button>FR1865<Icon icon="material-symbols:download" width="24" height="24"/></button></a>
</div>

</div>


<!-- Contenido del HTML importado -->
<div class="content" class:show-1829={showFr1829} class:show-1865={showFr1865}>
  {@html htmlContent}
</div>

<style>
  :global(body) {
    font-family: Arial, sans-serif;
    background-color: #f5efe4;
  }

  :global(.section) {
    margin: 15px 25%;
  }

  :global(.paragraph_es1849) {
    color: black;
  }

  :global(.paragraph_fr1829) {
    color: #1AACAC;
    font-style: italic;
    display: none;
  }

  :global(.paragraph_fr1865) {
    color: #C70039;
    font-style: italic;
    display: none;
  }

  :global(.content.show-1829 .paragraph_fr1829) {
    display: block;
  }

  :global(.buttons-container) {
    display: block;
  }

  :global(.content.show-1865 .paragraph_fr1865) {
    display: block;
  }

  :global(.paragraph_es1849),
  :global(.paragraph_fr1829),
  :global(.paragraph_fr1865) {
    margin-bottom: 1em; /* Espacio entre párrafos */
    line-height: 1.5; /* Mejora la legibilidad */
  }
</style>
