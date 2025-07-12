import service from '../services/CategoriaServices';

export const CreateCode = async (tipo) => {
  const lista = await service.findAllFilter({ tipo });

  const prefijo = tipo === "Herramienta" ? "HE" : "H";
  
  const numeros = lista
    .map((item) => parseInt(item.codigo?.replace(prefijo, '')))
    .filter((n) => !isNaN(n));

  const maxNumero = numeros.length ? Math.max(...numeros) : 0;

  const nuevoCodigo = prefijo + (maxNumero + 1).toString().padStart(4, '0');

  return nuevoCodigo;
};
