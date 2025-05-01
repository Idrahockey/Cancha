
const gridContainer = document.querySelector(".grid-container");

const tipos = [
  { tipo: "oro", lotes: [21, 30, 31, 35, 36, 40, 41, 46, 50, 51, 55, 56, 60, 61, 65, 66, 70, 71, 80] },
  { tipo: "plata", lotes: [11, 12, 19, 20, 22, 24, 25, 26, 27, 29, 32, 34, 37, 39, 42, 44, 47, 49, 52, 54, 57, 59, 62, 64, 67, 69, 72, 74, 75, 76, 77, 79, 81, 82, 89] },
  { tipo: "bronce", lotes: [] },
  {
    tipo: "VENDIDO",
    lotes: [
    { id: 45, nombre: "Flia García Muñoz" },
    47 // muestra: Lote #47 - Vendido
  ]
  }
];

const formularios = {
  oro: "https://docs.google.com/forms/d/e/1FAIpQLScRmENLAu41MhncIdHOMX92PM2LPGr3GQnAYIxbGZ-brwSe0Q/viewform?usp=header",
  plata: "https://docs.google.com/forms/d/e/1FAIpQLSdGf1unBfYyUxAoG5k2CkwcJd9H5fUeMeJzDeHzhUt4wy9TWQ/viewform?usp=header",
  bronce: "https://docs.google.com/forms/d/e/1FAIpQLSdP28-uyuWlXRsR2P2C1aHWvdzdgWRL8W3vj1xX3CP6RSLcnQ/viewform?usp=header"
};

for (let i = 1; i <= 100; i++) {
  const div = document.createElement("div");
  div.classList.add("lote");

  let tipo = tipos.find(t => {
    if (t.tipo === "VENDIDO") return t.lotes.some(l => typeof l === 'object' ? l.id === i : l === i);
    return t.lotes.includes(i);
  });

  const tipoNombre = tipo ? tipo.tipo.toLowerCase() : "bronce";
  div.classList.add(tipoNombre);

  let tipoTexto;
  if (tipoNombre === "vendido") {
    const vendido = tipo.lotes.find(l => typeof l === 'object' ? l.id === i : l === i);
    const nombre = vendido && typeof vendido === 'object' ? vendido.nombre : '';
    tipoTexto = `Vendido${nombre ? ' ' + nombre : ''}`;
  } else {
    tipoTexto = tipoNombre.charAt(0).toUpperCase() + tipoNombre.slice(1);
  }

  div.setAttribute("data-tooltip", `Lote #${i} - ${tipoTexto}`);
  div.textContent = i;

  if (tipoNombre === "vendido") {
    div.onclick = null;
  } else {
    div.addEventListener("click", () => {
      window.open(formularios[tipoNombre], "_blank");
    });
  }

  gridContainer.appendChild(div);
}
