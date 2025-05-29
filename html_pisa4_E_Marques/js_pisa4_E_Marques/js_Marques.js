document.addEventListener("DOMContentLoaded", () => {
  const indice = document.getElementById("indice-dinamico");

  if (!indice) {
    console.warn("No se encontró el elemento con id 'indice-dinamico'.");
    return;
  }

  const capitulos = [
    {
      titulo: "Modelo de producción y consumo actual",
      archivo: "../1_ra5_modelo_de_produccion_y_consumo_actual_Marques.html",
    },
    {
      titulo: "Ecodiseño y eficiencia en productos tecnológicos",
      archivo: "../4_ra5_ecodiseno_y_eficiencia_en_productos tecnologicos_Marques.html",
    },
    {
      titulo: "Producción sostenible en la industria tecnológica",
      archivo: "../7_ra5_produccion_sostenible_en_la_industria_tecnologica_Marques.html",
    },
    {
      titulo: "Identificación de grupos de interés",
      archivo: "../10_ra5_identificacion_de_grupos_de_interes_Marques.html",
    },
  ];

  capitulos.forEach((capitulo) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `<a href="${capitulo.archivo}" target="_blank">${capitulo.titulo}</a>`;
    indice.appendChild(li);
  });
});
