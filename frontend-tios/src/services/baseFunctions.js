export function crearConnect(lista) {
  const connect = lista.map((elemento) => ({ id: parseInt(elemento) }));
  return { connect };
}

export function crearCodigo(lista, tipo) {
    let codeNumber = lista.length + 1;
    const prefijo = tipo === "Herramienta" ? ("HE") : ("H");
    let codigo = prefijo + codeNumber.toString().padStart(4, '0');

    console.log("CODIGO");
    console.log(codigo);

    while(lista.some(elemento => elemento.codigo == codigo)){
        codeNumber += 1;
        codigo = prefijo + codeNumber.toString().padStart(4, '0');
    }

    return codigo;
}