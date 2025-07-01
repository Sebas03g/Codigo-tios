// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import AppHome from "../pages/AppHome.jsx"
import AppTasks from "../pages/AppTasks.jsx"
import Clientes from "../pages/Clientes.jsx";
import Empleados from "../pages/Empleados.jsx";
import Inventario from "../pages/Inventario.jsx";
import Obras from "../pages/Obras.jsx";
import Pedidos from "../pages/Pedidos.jsx";
import Posiciones from "../pages/Posiciones.jsx";
import Proveedores from "../pages/Proveedores.jsx";
import Tareas from "../pages/Tareas.jsx";
import Ubicaciones from "../pages/Ubicaciones.jsx";
import Compras from "../pages/Compras.jsx";
import Ventas from "../pages/Ventas.jsx";
import Devoluciones from "../pages/Devoluciones.jsx";
import Transacciones from "../pages/Transacciones.jsx";
import { getTokenData } from "../services/getLocalStorageData.js";
import PrivateRoute from "./PrivateRoutes.jsx";
import AppLayout from "../layouts/AppLayout.jsx";


export default function AppRoutes() {
  const categorias = getTokenData()?.categorias || [];

  const permisosTransaccion = ["Compra",  "Venta", "Devolucion"]

  const transaccion = permisosTransaccion.some(permiso => categorias.includes(permiso));

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

        {transaccion && (
          <Route path="/transacciones" element={<PrivateRoute><Transacciones /></PrivateRoute>} />
        )}
        {categorias.includes("Inventario") && (
          <Route path="/inventario" element={<PrivateRoute><Inventario /></PrivateRoute>} />
        )}
        {categorias.includes("Pedido") && (
          <Route path="/pedidos" element={<PrivateRoute><Pedidos /></PrivateRoute>} />
        )}
        {categorias.includes("Obra") && (
          <Route path="/obras" element={<PrivateRoute><Obras /></PrivateRoute>} />
        )}
        {categorias.includes("Cliente") && (
          <Route path="/clientes" element={<PrivateRoute><Clientes /></PrivateRoute>} />
        )}
        {categorias.includes("Empleado") && (
          <Route path="/empleados" element={<PrivateRoute><Empleados /></PrivateRoute>} />
        )}
        {categorias.includes("Posicion") && (
          <Route path="/posiciones" element={<PrivateRoute><Posiciones /></PrivateRoute>} />
        )}
        {categorias.includes("Proveedor") && (
          <Route path="/proveedores" element={<PrivateRoute><Proveedores /></PrivateRoute>} />
        )}
        {categorias.includes("Tarea") && (
          <Route path="/tareas" element={<PrivateRoute><Tareas /></PrivateRoute>} />
        )}
        {categorias.includes("Ubicacion") && (
          <Route path="/ubicaciones" element={<PrivateRoute><Ubicaciones /></PrivateRoute>} />
        )}
        {categorias.includes("Compra") && (
          <Route path="/compras" element={<PrivateRoute><Compras /></PrivateRoute>} />
        )}
        {categorias.includes("Venta") && (
          <Route path="/ventas" element={<PrivateRoute><Ventas /></PrivateRoute>} />
        )}
        {categorias.includes("Devolucion") && (
          <Route path="/devoluciones" element={<PrivateRoute><Devoluciones /></PrivateRoute>} />
        )}
      </Route>
    </Routes>
  );
}
