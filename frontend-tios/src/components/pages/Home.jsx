import PageButton from "../forms/Button/PageButton";
import { Link } from 'react-router-dom';

export default function HomePage({ categorias, transaccion }){

    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="flex flex-wrap gap-6 justify-center">
                {categorias.includes("Inventario") && (
                    <Link
                        to="/inventario"
                    >
                    <PageButton
                        text="Inventario"
                    />
                    </Link>
                )}
                {categorias.includes("Obra") && (
                    <Link
                        to="/obras"
                    >
                    <PageButton
                        text="Obras"
                    />
                    </Link>
                )}
                {transaccion && (
                    <Link
                        to="/transacciones"
                    >
                    <PageButton
                        text="Transacciones"
                    />
                    </Link>
                )}
                {categorias.includes("Pedido") && (
                    <Link
                        to="/pedidos"
                    >
                    <PageButton
                        text="Pedidos"
                    />
                    </Link>
                )}
            </div>
        </div>

    );
}