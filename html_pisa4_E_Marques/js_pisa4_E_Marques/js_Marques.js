// Índice dinámico: Añade aquí los enlaces a tus capítulos creados
document.addEventListener("DOMContentLoaded", () => {
  const indice = document.getElementById("indice-dinamico");

  const capitulos = [
    {
      titulo:
        "1. Modelo de producción y consumo actual",
      archivo: "../html_pisa4_E_Marques/1_ra5_modelo_de_produccion_y_consumo_actual_Marques.html",
    },
    {
      titulo: "4. Ecodiseño y eficiencia en productos tecnológicos",
      archivo: "../html_pisa4_E_Marques/4_ra5_ecodiseno_y_eficiencia_en_productos tecnologicos_Marques.html",
    },
    {
      titulo: "7. Producción sostenible en la industria tecnológica",
      archivo:
        "../html_pisa4_E_Marques/7_ra5_produccion_sostenible_en_la_industria_tecnologica_Marques.html",
    },
    {
      titulo: "10. Identificación de grupos de interés",
      archivo:
        "../html_pisa4_E_Marques/10_ra5_identificacion_de_grupos_de_interes_Marques.html",
    },
  ];

  capitulos.forEach((capitulo) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `<a href="${capitulo.archivo}" target="_blank">${capitulo.titulo} </a>`;
    indice.appendChild(li);
  });
});
