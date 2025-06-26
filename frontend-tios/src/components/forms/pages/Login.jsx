import { useNavigate } from 'react-router-dom';

export default function LoginPage({handleSubmit, handleChange, formData}){

    return (
        <form onSubmit={handleSubmit}  className="space-y-4 max-w-md mx-auto mt-10">
            <div>
                <label className="block mb-1 font-medium">Cedula</label>
                <input
                type="text"
                value={formData.cedula}
                placeholder='Cedula'
                name="cedula"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">Contraseña</label>
                <input
                type="password"
                value={formData.password}
                placeholder='Contraseña'
                name="password"
                onChange={handleChange}
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

