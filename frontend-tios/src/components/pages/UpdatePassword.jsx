import { useState } from 'react';
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function UpdatePasswordPage({
  handleSubmit,
  newPassword,
  confirmedNewPassword,
  updateFormData
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Actualizar Contraseña</h2>

      {/* Nueva contraseña */}
      <div className="relative">
        <label className="block text-sm font-medium">Nueva contraseña</label>
        <input
          type={showPassword ? "text" : "password"}
          name="newPassword"
          value={newPassword || ""}
          onChange={updateFormData}
          className="w-full border rounded px-3 py-2 mt-1 pr-10"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-xl text-gray-500 hover:text-black"
        >
          {showPassword ? <LuEye /> : <LuEyeClosed />}
        </button>
      </div>

      {/* Confirmar contraseña */}
      <div className="relative">
        <label className="block text-sm font-medium">Confirmar nueva contraseña</label>
        <input
          type={showConfirmedPassword ? "text" : "password"}
          name="confirmedNewPassword"
          value={confirmedNewPassword || ""}
          onChange={updateFormData}
          className="w-full border rounded px-3 py-2 mt-1 pr-10"
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirmedPassword(!showConfirmedPassword)}
          className="absolute right-3 top-9 text-xl text-gray-500 hover:text-black"
        >
          {showConfirmedPassword ? <LuEye /> : <LuEyeClosed />}
        </button>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
      >
        Guardar
      </button>
    </form>
  );
}
