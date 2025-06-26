// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import ClientesPage from "../pages/Clientes.jsx";
import EmpleadosPage from "../pages/Empleados.jsx";
import InventarioPage from "../pages/Inventario.jsx";
import ObrasPage from "../pages/Obras.jsx";
import PedidosPage from "../pages/Pedidos.jsx";
import PosicionesPage from "../pages/Posiciones.jsx";
import ProveedoresPage from "../pages/Proveedores.jsx";
import TareasPage from "../pages/Tareas.jsx";
import UbicacionesPage from "../pages/Ubicaciones.jsx";
import TransaccionesPage from "../pages/Transacciones.jsx";
import { getTokenData } from "../services/getLocalStorageData.js";

export default function AppRoutes() {
  const categorias = getTokenData()?.categorias || [];

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />

        {categorias.includes("Transaccion") && (
          <Route path="/transacciones" element={<TransaccionesPage />} />
        )}
        {categorias.includes("Inventario") && (
          <Route path="/inventario" element={<InventarioPage />} />
        )}
        {categorias.includes("Pedido") && (
          <Route path="/pedidos" element={<PedidosPage />} />
        )}
        {categorias.includes("Obra") && (
          <Route path="/obras" element={<ObrasPage />} />
        )}
        {categorias.includes("Cliente") && (
          <Route path="/clientes" element={<ClientesPage />} />
        )}
        {categorias.includes("Empleado") && (
          <Route path="/empleados" element={<EmpleadosPage />} />
        )}
        {categorias.includes("Posicion") && (
          <Route path="/posiciones" element={<PosicionesPage />} />
        )}
        {categorias.includes("Proveedor") && (
          <Route path="/proveedores" element={<ProveedoresPage />} />
        )}
        {categorias.includes("Tarea") && (
          <Route path="/tareas" element={<TareasPage />} />
        )}
        {categorias.includes("Ubicacion") && (
          <Route path="/ubicaciones" element={<UbicacionesPage />} />
        )}
      </Route>
    </Routes>
  );
}
