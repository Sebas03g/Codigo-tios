import express from 'express';
import { verificarToken } from './middleware/authMiddleware.js';
import csurf from 'csurf';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { logRequest } from './middleware/loggerMiddleware.js';

import categoriaRoutes from './routes/CategoriaRoutes.js';
import compraRoutes from './routes/CompraRoutes.js';
import devolucionRoutes from './routes/DevolucionRoutes.js';
import diaRoutes from './routes/DiaRoutes.js';
import empleadoRoutes from './routes/EmpleadoRoutes.js';
import horarioRoutes from './routes/HorarioRoutes.js';
import inventarioRoutes from './routes/InventarioRoutes.js';
import mensajeRoutes from './routes/MensajeRoutes.js';
import obra_empleadosRoutes from './routes/obra_empleadosRoutes.js';
import obra_herramientasRoutes from './routes/obra_herramientasRoutes.js';
import obraRoutes from './routes/ObraRoutes.js';
import pedido_elementosRoutes from './routes/pedido_elementosRoutes.js';
import pedidoRoutes from './routes/PedidoRoutes.js';
import permisoRoutes from './routes/PermisoRoutes.js';
import personaRoutes from './routes/PersonaRoutes.js';
import posicionRoutes from './routes/PosicionRoutes.js';
import proforma_empleadosRoutes from './routes/proforma_empleadosRoutes.js';
import proforma_herramientasRoutes from './routes/proforma_herramientasRoutes.js';
import proforma_inventarioRoutes from './routes/proforma_inventarioRoutes.js';
import proformaRoutes from './routes/ProformaRoutes.js';
import transaccion_elementosRoutes from './routes/transaccion_elementosRoutes.js';
import transaccionRoutes from './routes/TransaccionRoutes.js';
import ubicacion_empleadoRoutes from './routes/ubicacion_empleadoRoutes.js';
import ubicacionRoutes from './routes/UbicacionRoutes.js';
import ventaRoutes from './routes/VentaRoutes.js';
import mailRoutes from './routes/MailRouter.js';
import updateLocationRoutes from './routes/UpdateLocationRouter.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares básicos
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(logRequest);

// CORS setup
app.use(cors({
  origin: ['http://localhost:5173', 'https://miapp.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
  credentials: true,
}));

// Middleware para debug de cada petición
app.use((req, res, next) => {
  console.log(`[DEBUG] ${req.method} ${req.originalUrl}`);
  next();
});

// Configurar CSRF protección solo para rutas que la necesitan
const csrfProtection = csurf({ cookie: true });

app.get('/csrf-token', csrfProtection, (req, res) => {
  res.status(200).json({ csrfToken: req.csrfToken() });
});

// Rutas que NO deben usar CSRF
const csrfExcludedRoutes = [
  { path: '/empleado/login', method: 'POST' },
];


// Middleware para controlar CSRF, solo se aplica a rutas que NO están en la lista excluida
app.use((req, res, next) => {
  const path = req.originalUrl.split('?')[0];
  const isExcluded = csrfExcludedRoutes.some(r => r.path === path && r.method === req.method);
  if (isExcluded) {
    console.log(`[DEBUG] CSRF excluded for ${req.method} ${path}`);
    return next();
  }
  csrfProtection(req, res, (err) => {
    if (err) {
      console.error(`[ERROR] CSRF error:`, err.code);
      return res.status(403).json({ mensaje: 'Error CSRF: acceso denegado' });
    }
    next();
  });
});

// Ruta para obtener token CSRF

// Registro de rutas
app.use('/empleado', empleadoRoutes); // login no usa verificarToken
// Rutas protegidas con token
app.use('/categoria', verificarToken, categoriaRoutes);
app.use('/compra', verificarToken, compraRoutes);
app.use('/devolucion', verificarToken, devolucionRoutes);
app.use('/dia', verificarToken, diaRoutes);
app.use('/horario', verificarToken, horarioRoutes);
app.use('/inventario', verificarToken, inventarioRoutes);
app.use('/mensaje', verificarToken, mensajeRoutes);
app.use('/obra_empleados', verificarToken, obra_empleadosRoutes);
app.use('/obra_herramientas', verificarToken, obra_herramientasRoutes);
app.use('/obra', verificarToken, obraRoutes);
app.use('/pedido_elementos', verificarToken, pedido_elementosRoutes);
app.use('/pedido', verificarToken, pedidoRoutes);
app.use('/permiso', verificarToken, permisoRoutes);
app.use('/persona', verificarToken, personaRoutes);
app.use('/posicion', verificarToken, posicionRoutes);
app.use('/proforma_empleados', verificarToken, proforma_empleadosRoutes);
app.use('/proforma_herramientas', verificarToken, proforma_herramientasRoutes);
app.use('/proforma_inventario', verificarToken, proforma_inventarioRoutes);
app.use('/proforma', verificarToken, proformaRoutes);
app.use('/transaccion_elementos', verificarToken, transaccion_elementosRoutes);
app.use('/transaccion', verificarToken, transaccionRoutes);
app.use('/ubicacion_empleado', verificarToken, ubicacion_empleadoRoutes);
app.use('/ubicacion', verificarToken, ubicacionRoutes);
app.use('/venta', verificarToken, ventaRoutes);
app.use('/mail', verificarToken, mailRoutes);
app.use('/update/location', verificarToken, updateLocationRoutes);

/*

app.use('/empleado', empleadoRoutes); // login no usa verificarToken
// Rutas protegidas con token
app.use('/categoria', categoriaRoutes);
app.use('/compra', compraRoutes);
app.use('/devolucion', devolucionRoutes);
app.use('/dia', diaRoutes);
app.use('/horario', horarioRoutes);
app.use('/inventario', inventarioRoutes);
app.use('/mensaje', mensajeRoutes);
app.use('/obra_empleados', obra_empleadosRoutes);
app.use('/obra_herramientas', obra_herramientasRoutes);
app.use('/obra', obraRoutes);
app.use('/pedido_elementos', pedido_elementosRoutes);
app.use('/pedido', pedidoRoutes);
app.use('/permiso', permisoRoutes);
app.use('/persona', personaRoutes);
app.use('/posicion', posicionRoutes);
app.use('/proforma_empleados', proforma_empleadosRoutes);
app.use('/proforma_herramientas', proforma_herramientasRoutes);
app.use('/proforma_inventario', proforma_inventarioRoutes);
app.use('/proforma', proformaRoutes);
app.use('/transaccion_elementos', transaccion_elementosRoutes);
app.use('/transaccion', transaccionRoutes);
app.use('/ubicacion_empleado', ubicacion_empleadoRoutes);
app.use('/ubicacion', ubicacionRoutes);
app.use('/venta', ventaRoutes);

*/

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

// Middleware para capturar errores generales (incluye errores de autorización)
app.use((err, req, res, next) => {
  console.error(`[ERROR] ${req.method} ${req.originalUrl}`, err);
  if (err.name === 'UnauthorizedError') {
    // Error de jwt token inválido o ausente
    return res.status(401).json({ mensaje: 'Token inválido o no proporcionado' });
  }
  if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json({ mensaje: 'Error CSRF: token inválido' });
  }
  res.status(500).json({ mensaje: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
