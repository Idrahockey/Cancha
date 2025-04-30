
const gridContainer = document.querySelector(".grid-container");

const tipos = [
  { tipo: "oro", lotes: [5, 6, 18, 35, 43, 58, 77] },
  { tipo: "plata", lotes: [3, 17, 36, 45, 56, 79] },
  { tipo: "VENDIDO", lotes: [2, 15] },
  { tipo: "bronce", lotes: [] } // el resto
];

const formularioURL = "https://docs.google.com/forms/d/e/1FAIpQLSe1sC4v_U3xogOF67EFONDOK4TI_GspIIF64TxhgRku9WQm7g/viewform";

for (let i = 1; i <= 100; i++) {
  const div = document.createElement("div");
  div.classList.add("lote");

  const tipo = tipos.find(t => t.lotes.includes(i));
  const tipoNombre = tipo ? tipo.tipo.toLowerCase() : "bronce";

  div.classList.add(tipoNombre);
  const tipoTexto = tipoNombre === "vendido" ? "Vendido" : tipoNombre.charAt(0).toUpperCase() + tipoNombre.slice(1);
  div.setAttribute("data-tooltip", `Lote #${i} - ${tipoTexto}`);
  div.textContent = i;

  // Si está vendido, no se puede hacer clic, pero se muestra igual
  if (tipoNombre === "vendido") {
    div.onclick = null; // bloquea el click
    // No cambia color ni texto, mantiene apariencia original
  } else {
    div.addEventListener("click", () => {
      window.open(formularioURL, "_blank");
    });
  }

  gridContainer.appendChild(div);
}
