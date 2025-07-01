import PageButton from "../forms/Button/PageButton";
import { Link } from 'react-router-dom';

export default function TransactionPage({ categorias }){
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-wrap gap-6 items-center justify-center">
                {categorias.includes("Compra") && (
                    <Link
                        to="/compras"
                    >
                    <PageButton
                        text="Compras"
                    />
                    </Link>
                )}
                {categorias.includes("Venta") && (
                    <Link
                        to="/ventas"
                    >
                    <PageButton
                        text="Ventas"
                    />
                    </Link>
                )}
                {categorias.includes("Devolucion") && (
                    <Link
                        to="/devoluciones"
                    >
                    <PageButton
                        text="Devoluciones"
                    />
                    </Link>
                )}
            </div>
        </div>

    );
}