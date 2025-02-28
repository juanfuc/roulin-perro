<script>
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import Article from '$lib/Article.svelte';
	import Footnote from '$lib/Footnote.svelte';
  import AventuraCarguero from "../componentes/AventuraCarguero.svelte";
  import Altitudes from "../componentes/Altitudes.svelte";
  import ToponimosMap from "../componentes/ToponimosMap.svelte";

  

  let htmlContent = "";
  let showFr1829 = false;
  let showFr1865 = false;

  onMount(async () => {
    const basePath = import.meta.env.MODE === "development" ? "" : "/roulin-perro"; 
    const response = await fetch(`${basePath}/salida.html`);
    htmlContent = await response.text();
  });

  let autor = "Juan Felipe Urueña Calderón";
  let footContent = `
    Esta es la edición digital de un frangmento acerca del perro escrito por François Désiré Roulin en un artículo sobre los cambios de los animales domésticos al llegar al Nuevo Mundo. La traducción al español fue publicada en 1849 por Joaquín Acosta, bajo el título: <i>Sobre las alteraciones que se descubren en los animales domésticos que se condujeron del antiguo al nuevo continente, por el doctor Roulin. El perro</i>, incluida en <i>Viajes científicos a los Andes ecuatoriales ó colección de memorias sobre física, química e historia natural de la Nueva Granada, Ecuador y Venezuela</i> presentada a la Academia de Ciencias de Francia <a href="https://www.biodiversitylibrary.org/item/235575#page/251/mode/1up" target="_blank">(<i>París: Lasserre, 1849</i>), 235–239</a>. 
    Hasta la fecha no se ha podido determinar con certeza cuál fue el texto francés utilizado por Acosta; sin embargo, su contenido difiere del artículo previo, más breve, de François Désiré Roulin, 
    <i>“Recherches sur quelques Changemens observés dans les animaux domestiques transportés de l’ancien dans el nuevo continent”</i>, 
    en Audouin, Jean Victor, Adolphe Brongniart, J.-B. Dumas, Hugues-Marie Feugueray, J. Tastu, C. Thuau, Thuau, et al., 
    <i>Annales des sciences naturelles</i>, vol. 16 <a href="https://www.biodiversitylibrary.org/page/6049047" target="_blank">(<i>París: Béchet Jeune, 1829</i>) 
    </a>, y se asemeja más al capítulo, posterior, <i>“Animaux domestiques. Changements observés dans les animaux domestiques transportés de l’ancien dans el nuevo continent”</i> de 
    <i>Histoire naturelle et souvenirs de voyage</i> <a href="https://gallica.bnf.fr/ark:/12148/bpt6k97741179" target="_blank">(<i>París: J. Hetzel, 1865</i>) 
    </a>. Esta edición digital, permite una lectura simultánea de la traducción de Acosta (es1849) con ambas versiones francesas (fr 1829 y fr1865). La revisión de la trasncripción en hoja de texto fue realizada por Guillermo Andrés Castillo Quintana.  La edición digital fue realizada por: <a href="https://juanfuc.vercel.app/" target="_blank">${autor}</a>. Esta consistió en la codificación simultánea de los tres textos con <a href="https://tei-c.org/" tatrget="_blank">TEI</a>, la conversión del archivo XML a HTML con XSLT y el uso del Framewok de desarrollo web <a href="https://svelte.dev/">SVELTE</a> para agregar interactividad. La visualización del Perro en las acuarelas de Roulin fue realizada con una adaptación que se hizo al software de literatura electrónica <a href="https://github.com/srsergiorodriguez/aventura" target="_blank">Aventura.js</a> para que pueda realizar narrativas iconográficas. El gráfico de las altitudes de las acuarelas de Roulin se hizo con <a href="https://d3js.org/" target="_blank">d3.js</a> y el mapa de los topónimos se hizo con <a href="https://leafletjs.com/" target="_blank">Leaflet.js</a>
  `;

</script>

<Article>
<header class="titulo">
  <h2>François Désiré Roulin</h2>
  <h1>Historia natural y recuerdos de viaje <br> Animales Domésticos <br> El perro <Footnote note={footContent}></Footnote></h1>
  <h6>Traducido por: Joaquín Acosta</h6>
  <h1>(1849)</h1>
</header>


<!-- Botones para alternar versiones -->

<div class="buttons-container">
<div class="controls">
  <button on:click={() => showFr1865 = !showFr1865}>
    {showFr1865 ? "Ocultar" : "Mostrar"} Versión fr1865
  </button>
  <button on:click={() => showFr1829 = !showFr1829}>
    {showFr1829 ? "Ocultar" : "Mostrar"} Versión fr1829
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

<AventuraCarguero
  
pathEscenas={"assets\\paneles\\perro.json"} 
escenaInicial={"start"}

/>

<br>

<Altitudes />

<br>

<ToponimosMap />

</Article>
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
