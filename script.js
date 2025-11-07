// script.js
document.getElementById("mostrar").addEventListener("click", function() {
  const resultados = [
    { categoria: "Donantes potenciales", porcentaje: "65%" },
    { categoria: "Interés en voluntariado", porcentaje: "40%" },
    { categoria: "Preferencia por donaciones en línea", porcentaje: "75%" }
  ];

  let tabla = "<table border='1' cellpadding='10'><tr><th>Categoría</th><th>Porcentaje</th></tr>";
  resultados.forEach(r => {
    tabla += `<tr><td>${r.categoria}</td><td>${r.porcentaje}</td></tr>`;
  });
  tabla += "</table>";

  document.getElementById("tabla-resultados").innerHTML = tabla;
});
