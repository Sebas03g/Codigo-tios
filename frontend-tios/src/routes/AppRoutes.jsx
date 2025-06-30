// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import AppHome from "../pages/AppHome.jsx"
import AppTasks from "../pages/AppTasks.jsx"
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
import PrivateRoute from "./PrivateRoutes.jsx";
import AppLayout from "../layouts/AppLayout.jsx";


export default function AppRoutes() {
  const categorias = getTokenData()?.categorias || [];

  return (
    <Routes>
      <Route path="/" element={<Login ruta="/home"/>} />
      <Route path="/app-login" element={<Login ruta="/app-home"/>}/>
      <Route element= {<AppLayout />}>
        <Route path="/app-home" element={<PrivateRoute><AppHome /></PrivateRoute>}/>
        <Route path="/app-tasks" element={<PrivateRoute><AppTasks /></PrivateRoute>}/>
      </Route>
      <Route element={<DefaultLayout />}>
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />

        {categorias.includes("Transaccion") && (
          <Route path="/transacciones" element={<PrivateRoute><TransaccionesPage /></PrivateRoute>} />
        )}
        {categorias.includes("Inventario") && (
          <Route path="/inventario" element={<PrivateRoute><InventarioPage /></PrivateRoute>} />
        )}
        {categorias.includes("Pedido") && (
          <Route path="/pedidos" element={<PrivateRoute><PedidosPage /></PrivateRoute>} />
        )}
        {categorias.includes("Obra") && (
          <Route path="/obras" element={<PrivateRoute><ObrasPage /></PrivateRoute>} />
        )}
        {categorias.includes("Cliente") && (
          <Route path="/clientes" element={<PrivateRoute><ClientesPage /></PrivateRoute>} />
        )}
        {categorias.includes("Empleado") && (
          <Route path="/empleados" element={<PrivateRoute><EmpleadosPage /></PrivateRoute>} />
        )}
        {categorias.includes("Posicion") && (
          <Route path="/posiciones" element={<PrivateRoute><PosicionesPage /></PrivateRoute>} />
        )}
        {categorias.includes("Proveedor") && (
          <Route path="/proveedores" element={<PrivateRoute><ProveedoresPage /></PrivateRoute>} />
        )}
        {categorias.includes("Tarea") && (
          <Route path="/tareas" element={<PrivateRoute><TareasPage /></PrivateRoute>} />
        )}
        {categorias.includes("Ubicacion") && (
          <Route path="/ubicaciones" element={<PrivateRoute><UbicacionesPage /></PrivateRoute>} />
        )}
      </Route>
    </Routes>
  );
}
