export function crearConnect(lista) {
  const connect = lista.map((elemento) => ({ id: parseInt(elemento) }));
  return { connect };
}

function normalizarTexto(texto = "") {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/gi, "")
    .trim();
}

function getValorProfundo(objeto, ruta) {
  return ruta.split(".").reduce((acc, key) => acc?.[key], objeto) || "";
}

export function buscarElementosPorTexto(lista, textoBusqueda, campo) {
  if (!textoBusqueda?.trim()) return lista;

  const palabras = normalizarTexto(textoBusqueda).split(/\s+/);

  return lista.filter(item => {
    const valor = campo.includes(".")
      ? getValorProfundo(item, campo)
      : item[campo];

    const texto = normalizarTexto(valor);
    return palabras.every(palabra => texto.includes(palabra));
  });
}

