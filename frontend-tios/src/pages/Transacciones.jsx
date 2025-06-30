import { getTokenData } from "../services/getLocalStorageData.js";
import TransactionPage from "../components/pages/Transacciones.jsx";

export default function TransaccionesPage(){

    const categorias = getTokenData()?.categorias || [];

    return(
        <TransactionPage
            categorias= {categorias}
        />
    );
}