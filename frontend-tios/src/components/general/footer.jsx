import { useEffect, useState } from "react";
import { getTokenData } from "../../services/getLocalStorageData";
import { FiMessageSquare } from "react-icons/fi";

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
                onClick={() => console.log("Abrir mensajes")}
            >
                <FiMessageSquare className="text-2xl" />
            </button>
        )}
        </footer>
    );
}
