import PageButton from "../forms/Button/PageButton";
import { Link } from 'react-router-dom';

export default function HomePage({ categorias, transaccion }){

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-wrap gap-6 items-center justify-center">
                {categorias.includes("Inventario") && (
                    <Link
                        to="/categoria"
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

                {categorias.includes("Pago") && (
                    <Link
                        to="/pagos"
                    >
                    <PageButton
                        text="Pagos"
                    />
                    </Link>
                )}
            </div>
        </div>

    );
}