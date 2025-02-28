<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";
  
    // URLs de los CSV en Google Sheets
    const pathClima = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLlPx4wNTSYqqWO_bHzl_m1sGfLo4jJuAwx5F7OwWHsxRjJzvyUL1RFcIAv4eApAHA3J7DAueaK_uw/pub?output=csv";
    const pathPerros = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVBt_mVyXz3-Sfv1vzmST12wq27NK90CoJAYf3nC4Rcr50U4jDcqqrkHo4crkpYwou04WSIlzKMvJw/pub?output=csv";
  
    let dataClima = [];
    let dataPerros = [];
    let chartContainer;
    let infoContainer;
    let selectedLugar = "";
    let loading = true;
  
    // Ruta donde están almacenadas las imágenes
    const imgPath = "/assets/imgs/"; // Asegúrate de que este path es correcto
  
    // 🔹 Cargar datos de los CSV en Google Sheets
    onMount(async () => {
      try {
        const [climaResponse, perrosResponse] = await Promise.all([
          fetch(pathClima),
          fetch(pathPerros)
        ]);
  
        const [climaText, perrosText] = await Promise.all([
          climaResponse.text(),
          perrosResponse.text()
        ]);
  
        dataClima = d3.csvParse(climaText, d3.autoType);
        dataPerros = d3.csvParse(perrosText, d3.autoType);
  
        if (dataClima.length === 0 || dataPerros.length === 0) return;
  
        loading = false;
        generateChart();
      } catch (error) {
        console.error("Error cargando datos:", error);
        loading = false;
      }
    });
  
    function generateChart() {
      const width = 700;
      const height = 500;
      const margin = { top: 40, right: 30, bottom: 50, left: 60 };
  
      const svg = d3.select(chartContainer)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height]);
  
      // Crear escalas
      const xScale = d3.scaleBand()
        .domain(dataClima.map(d => d.Lugar))
        .range([margin.left, width - margin.right - 50])
        .padding(0.4);
  
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataClima, d => d["Altitud (msnm)"])])
        .nice()
        .range([height - margin.bottom, margin.top]);
  
      // Agregar ejes
      svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale));
  
      svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale));
  
      // Seleccionar un punto por defecto
      selectedLugar = dataClima[0].Lugar;
      updateCard(selectedLugar);
  
      // Puntos en la gráfica
      svg.selectAll("circle")
        .data(dataClima)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.Lugar) + xScale.bandwidth() / 2)
        .attr("cy", d => yScale(d["Altitud (msnm)"]))
        .attr("r", 6)
        .attr("fill", d => (d.Lugar === selectedLugar ? "orange" : "steelblue"))
        .style("cursor", "pointer")
        .on("mouseover", function(event, d) {
          d3.select(this).transition().duration(200).attr("r", 8);
        })
        .on("mouseout", function(event, d) {
          d3.select(this).transition().duration(200).attr("r", 6);
        })
        .on("click", function(event, d) {
          selectedLugar = d.Lugar;
          updateCard(selectedLugar);
  
          // Resaltar el punto seleccionado
          svg.selectAll("circle")
            .attr("fill", p => (p.Lugar === selectedLugar ? "orange" : "steelblue"));
        });
    }
  
    function updateCard(lugar) {
      const selectedData = dataClima.find(d => d.Lugar === lugar);
      if (!selectedData) return;
  
      const matchingImages = dataPerros.filter(p => p.lugar === lugar);
      const imageFileName = matchingImages.length > 0 ? matchingImages[0].src : null;
      const imageUrl = imageFileName ? `${imgPath}${imageFileName}` : null;
      const obra = matchingImages.length > 0 ? matchingImages[0].obras : "Sin imagen registrada";
      const autor = matchingImages.length > 0 ? matchingImages[0].autor : "";
      const fecha = matchingImages.length > 0 ? matchingImages[0].fecha : "";
      const fuente = matchingImages.length > 0 ? matchingImages[0].fuente : "";
  
      infoContainer.innerHTML = `
        <div>
          <strong>${selectedData.Lugar}</strong><br>
          Altitud: ${selectedData["Altitud (msnm)"]} msnm<br>
          Clima: ${selectedData.Clima}<br>
          <hr>
          <strong>Obra:</strong> ${obra} <br>
          <strong>Autor:</strong> ${autor} <br>
          <strong>Fecha:</strong> ${fecha} <br>
          <strong>Fuente:</strong> ${fuente} <br>
        </div>
      `;
  
      if (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.style.width = "100%";
        img.style.objectFit = "contain";
        img.style.marginTop = "10px";
        infoContainer.appendChild(img);
      }
    }
  </script>
  
  <style>
.container {
  display: flex;
  flex-direction: column; /* Apila el título y la visualización */
  align-items: center; /* Centra todo */
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  font-family:  'Inter', sans-serif;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08); 
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

h1 {
  text-align: center;
  color: #10375C;
}

.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  
}

.chart-container {
  width: 60%;
  min-width: 700px;
  display: flex;
  justify-content: center;
}

.info-container {
  width: 30%;
  min-width: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}


  </style>
  
  <div class="container">
    <h1>Altitudes de los perros de las acuarelas de Roulin</h1>
    <!-- Gráfico -->
    <div class="content">
        <!-- Gráfico -->
        <div bind:this={chartContainer} class="chart-container"></div>
    
        <!-- Tarjeta de información -->
        <div bind:this={infoContainer} class="info-container">
          {#if loading}
            <em>Cargando datos...</em>
          {:else}
            <em>Haz clic en un punto para ver los detalles</em>
          {/if}
        </div>
      </div>
    </div>
  