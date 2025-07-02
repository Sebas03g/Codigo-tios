import { useEffect, useState } from "react";
import { getTokenData } from "../../services/getLocalStorageData";
import { FiMessageSquare } from "react-icons/fi";
import Mensajes from "./mensajes";

export default function FooterComponent() {

    const [isMessageOpen, setIsMessageOpen] = useState(false);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const validateMessages = async () => {
            try {
                const cat = getTokenData()?.categorias || [];
                console.log(cat);
                console.log(cat.includes("Mensaje"));
                setCategorias(cat);
            } catch (error) {
                console.log("Error al obtener las categorias: ", error);
            }
        }

        validateMessages();
    },[]);

    return (
        <footer className="relative mt-10">
            {categorias.includes("Mensaje") && (

                <button
                    className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                    onClick={() => setIsMessageOpen(!isMessageOpen)}
                >
                    <FiMessageSquare className="text-2xl" />
                </button>
            )}
            {isMessageOpen && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                    <Mensajes 
                        setIsMessageOpen={setIsMessageOpen}
                    />
                </div>
            )}

        </footer>
    );
}
