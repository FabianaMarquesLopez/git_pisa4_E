// Índice dinámico: Añade aquí los enlaces a tus capítulos creados
document.addEventListener("DOMContentLoaded", () => {
  const indice = document.getElementById("indice-dinamico");

  const capitulos = [
    {
      titulo:
        "Economía verde y circular aplicada a en nuestro sector productivo",
      archivo: "../html_pisa4_E_Lopez/2_ra5_economia_verde_circular_Lopez.html",
    },
    {
      titulo: "Estrategias sostenibles  en nuestro sector productivo",
      archivo: "../html_pisa4_E_Lopez/5_ra5_estrategias_sostenibles_Lopez.html",
    },
    {
      titulo: "Normativa ambiental aplicable nuestro sector productivo",
      archivo:
        "../html_pisa4_E_Lopez/8_ra5_normativa_ambiental_aplicable_Lopez.html",
    },
    {
      titulo: "Estrategias sostenibles en empresas TIC",
      archivo:
        "../html_pisa4_E_Lopez/11_ra5_analisis_aspectos_ASG_Lopez.html",
    },
  ];

  capitulos.forEach((capitulo) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `<a href="${capitulo.archivo}" target="_blank">${capitulo.titulo} </a>`;
    indice.appendChild(li);
  });
});
