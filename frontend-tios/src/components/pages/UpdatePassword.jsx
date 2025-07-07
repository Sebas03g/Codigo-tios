export default function UpdatePasswordPage({
    handleSubmit,
    newPassword,
    confirmedNewPassword,
    updateFormData
}){
    return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Actualizar Contraseña</h2>
      <div>
        <label className="block text-sm font-medium">Nueva contraseña</label>
        <input
          type="newPassword"
          value={newPassword}
          onChange={updateFormData}
          className="w-full border rounded px-3 py-2 mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Confirmar nueva contraseña</label>
        <input
          type="confirmedNewPassword"
          value={confirmedNewPassword}
          onChange={updateFormData}
          className="w-full border rounded px-3 py-2 mt-1"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Guardar
      </button>
    </form>
  );
}