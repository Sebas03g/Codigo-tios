export default function UserComponent({ isOpen, usuario }) {
  const claseBase =
    "fixed top-16 right-4 w-64 bg-white shadow-xl rounded-md p-4 z-40 transform transition-transform duration-300 ease-in-out";

  const claseAnimacion = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <aside className={`${claseBase} ${claseAnimacion}`}>
      <div className="text-gray-800">
        {usuario ? (
          <>
            <p className="font-semibold text-lg">{usuario.nombre}</p>
            <p className="text-sm text-gray-500">{usuario.mail}</p>
            <p className="text-sm text-gray-500">{usuario.posicion.nombre}</p>
          </>
        ) : (
          <p className="text-sm text-gray-500">Cargando datos de usuario...</p>
        )}
      </div>
    </aside>
  );
}
