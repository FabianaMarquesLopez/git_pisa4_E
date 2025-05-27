// Índice dinámico: Añade aquí los enlaces a tus capítulos creados
document.addEventListener("DOMContentLoaded", () => {
  const indice = document.getElementById("indice-dinamico");

  const capitulos = [
    {
      titulo: "3. Evaluación de impactos ambientales en nuestro sector productivo.",
      archivo: "../html_pisa4_E_Camacho/3_ra5_Impactos_Ambientales_Camacho.html",
    },
    {
      titulo: "6. Análisis del ciclo de vida de un producto tecnológico",
      archivo: "../html_pisa4_E_Camacho/6_ra5_Analisis_Ciclo_Camacho.html",
    },
    {
      titulo: "9. Plan de sostenibilidad en nuestro sector productivo",
      archivo: "../html_pisa4_E_Camacho/9_ra6_Plan_Sostenibilidad_Camacho.html",
    },
    {
      titulo: "12. Plan de actuación sobre los aspectos ASG",
      archivo: "../html_pisa4_E_Camacho/12_ra6_Plan_Asg_Camacho.html",
    },
  ];

  capitulos.forEach((capitulo) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `<a href="${capitulo.archivo}" target="_blank">${capitulo.titulo} </a>`;
    indice.appendChild(li);
  });
});