import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [cedula, setCedula] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        /*const respuesta = await fetch('',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cedula, password }),
        });*/

        //const datos = await respuesta.json();

        if(true){
            navigate('/home');
        }else{
            setError("Datos Invalidos de Cuenta")
        }
    }


    return (
        <form onSubmit={handleSubmit}  className="space-y-4 max-w-md mx-auto mt-10">
        <div>
            <p className="mt-1 text-sm text-red-600">{error}</p>
        </div>
        <div>
            <label className="block mb-1 font-medium">Cedula</label>
            <input
            type="text"
            value={cedula}
            placeholder='Cedula'
            onChange={(e) => setCedula(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
            />
        </div>

        <div>
            <label className="block mb-1 font-medium">Contraseña</label>
            <input
            type="password"
            value={password}
            placeholder='Contraseña'
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
            />
        </div>

        <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
            Enviar
        </button>
        </form>
    );

}