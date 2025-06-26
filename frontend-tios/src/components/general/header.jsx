import { CiMenuBurger } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import MenuComponent from "./menu";
import { useState } from "react";
import { getTokenData } from "../../services/getLocalStorageData";

export default function HeaderComponent(){

    const [isOpen, setIsOpen] = useState(false);
    const categorias = getTokenData()?.categorias || [];

    const [menu, setMenu] = useState(false);

    return(
        <>
            {menu && (
                <> 
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <CiMenuBurger />
                    </button>

                    <MenuComponent
                        isOpen={isOpen}
                    />
                </>
            )}
            
            <h1>Hidrogass</h1>
            <CiUser />
        </>
    );
}