import { getTokenData } from "../services/getLocalStorageData.js";
import TransactionPage from "../components/pages/Transacciones.jsx";

export default function Transacciones(){

    const categorias = getTokenData()?.categorias || [];

    return(
        <TransactionPage
            categorias= {categorias}
        />
    );
}