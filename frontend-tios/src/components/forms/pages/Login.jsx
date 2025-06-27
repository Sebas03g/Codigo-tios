import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";


export default function LoginPage({ handleSubmit, handleChange, formData }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
      <div>
        <label className="block mb-1 font-medium">Cédula</label>
        <input
          type="text"
          value={formData.cedula}
          placeholder="Cédula"
          name="cedula"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Contraseña</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            placeholder="Contraseña"
            name="password"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-gray-500 hover:text-black"
          >
            {showPassword ? <LuEye /> : <LuEyeClosed />}
          </button>
        </div>
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
