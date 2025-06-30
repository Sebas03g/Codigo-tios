import { getTokenData } from "../services/getLocalStorageData.js";
import HomePage from "../components/pages/Home";

export default function Home() {

  const categorias = getTokenData()?.categorias || [];
  const permisosTransaccion = ["Compra",  "Venta", "Devolucion"]
  const transaccion = permisosTransaccion.some(permiso => categorias.includes(permiso));

  return (
    <HomePage
      categorias = {categorias}
      transaccion = {transaccion}
    />
  );
}
