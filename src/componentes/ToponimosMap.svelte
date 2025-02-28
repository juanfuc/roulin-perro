<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";
  
    let map;
    let toponimos = [];
    let isClient = false; // Verifica si estamos en el cliente
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQdN1IsNXDGW-MQxhqEl3wKnXJquQUfjZEF1yqoI5kxPV_aJSM-4U8VpmAl8_n8nLHV6LFIOaS4Ac-1/pub?output=csv";
  
    onMount(async () => {
      isClient = true;
  
      if (typeof window !== "undefined") {
        // Cargar Leaflet dinámicamente solo en el cliente
        const L = await import("leaflet");
        import("leaflet/dist/leaflet.css");
  
        // Cargar datos desde el CSV
        const response = await fetch(csvUrl);
        const csvText = await response.text();
        toponimos = d3.csvParse(csvText, d3.autoType)
          .map(d => ({
            nombreOriginal: d["Nombre en el documento"],
            nombreActual: d["Nombre actual"],
            coordenadas: d.Coordenadas.split(",").map(Number),
            categoria: d["Categoría geográfica"],
            altitud: d["Altitud (msnm)"]
          }));
  
        // Crear el mapa solo si aún no existe
        if (!map) {
          map = L.map("map").setView([4.5709, -74.2973], 2); // Centro en Colombia
  
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(map);
        }
  
        // Agregar los marcadores de los toponimos
        toponimos.forEach(t => {
          L.marker(t.coordenadas)
            .addTo(map)
            .bindPopup(`<strong>${t.nombreOriginal} → ${t.nombreActual}</strong><br>
                        Categoría: ${t.categoria}<br>
                        Altitud: ${t.altitud} msnm`);
        });
      }
    });
  </script>
  
  <style>
    .map-container {
      display: flex;
      flex-direction: column;
      align-items: center; /* Centrar todo */
      text-align: center;
      gap: 10px;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      background-color: #fff;
      font-family:  'Inter', sans-serif;
        border-radius: 10px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08); 
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
  
  
    #map {
      width: 100%;
      height: 600px;
      border-radius: 10px;
    }
  </style>
  
  <!-- Contenedor principal con título -->
  <div class="map-container">
    <h1>Topónimos mencionados en el documento</h1>
  
    {#if isClient}
      <div id="map"></div>
    {:else}
      <p>Cargando mapa...</p>
    {/if}
  </div>
  