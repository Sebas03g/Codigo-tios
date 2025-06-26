import { CiMenuBurger } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import MenuComponent from "./menu";
import { useEffect, useState } from "react";
import { getTokenData } from "../../services/getLocalStorageData";

export default function HeaderComponent(){

    const [isOpen, setIsOpen] = useState(false);

    const [menu, setMenu] = useState(true);

    const categoriaValidas = ["Empleado", "Proveedor", "Cliente", "Posicion", "Ubicacion", "Tarea"];

    useEffect(() => {
        const validateMenu = async () => {
            try{
                const categorias = getTokenData()?.categorias || [];
                setMenu(categoriaValidas.some(categoria => categorias.includes(categoria)));
            } catch (error) {
                console.log("Error al obtener las categorias: ", error);
            }
        };
        validateMenu();
    }, []);

    return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        {menu && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <CiMenuBurger className="text-2xl" />
          </button>
        )}
        <h1 className="text-xl font-semibold text-gray-800">Hidrogass</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <CiUser className="text-2xl text-gray-600" />
        </button>
      </div>
    </header>
  );
}