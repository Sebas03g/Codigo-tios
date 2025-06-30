import PageButton from "../forms/Button/PageButton";
import { Link } from 'react-router-dom';

export default function TransactionPage({ categorias }){

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="flex flex-wrap gap-6 justify-center">
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