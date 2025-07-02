import { CiMenuBurger } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import MenuComponent from "./menu";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getTokenData } from "../../services/getLocalStorageData";
import { extraData, getDataById } from "../../services/fetch/sentenciasFetch";
import UserComponent from "./usuario";

export default function HeaderComponent(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isUserOpen, setIsUserOpen] = useState(false);

    const [menu, setMenu] = useState(false);

    const categoriaValidas = ["Empleado", "Proveedor", "Cliente", "Posicion", "Ubicacion", "Tarea"];

    const [categorias, setCategorias] = useState([]);

    const [user, setUser] = useState();

    useEffect(() => {
      const validateMenu = async () => {
        try {
          const cat = getTokenData()?.categorias || [];
          setCategorias(cat);
          setMenu(categoriaValidas.some(categoria => cat.includes(categoria)));
        } catch (error) {
          console.log("Error al obtener las categorias: ", error);
        }
      };

      const getUserData = async () => {
        try {
          console.log(getTokenData()?.id)
          const usuario = await extraData("empleado", getTokenData()?.id, "posicion");
          setUser(usuario);
        } catch (error) {
          console.log("Error al obtener los usuarios: ", error);
        }
      };

      validateMenu();
      getUserData();
    }, []);


    return (
      <>
        <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md sticky top-0 z-50">
          <div className="flex items-center gap-3">
            {menu && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <CiMenuBurger className="text-2xl" />
              </button>
            )}
            <Link
              to="/home"
              onClick={() => setIsMenuOpen(false)}
            >
              <h1 className="text-xl font-bold text-gray-800">Hidrogass</h1>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsUserOpen(!isUserOpen)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <CiUser className="text-2xl text-gray-600" />
            </button>
          </div>
        </header>
        {isMenuOpen && (
          <AnimatePresence>
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
          </AnimatePresence>
        )}
        <MenuComponent
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          categorias={categorias}
        />
        <UserComponent
          isOpen={isUserOpen}
          usuario={user}
        />
      </>
      
  );
}