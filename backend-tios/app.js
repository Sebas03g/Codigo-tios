import express from 'express';
import bcrypt from 'bcrypt';
import { verificarToken } from './middleware/authMiddleware.js';
import csurf from 'csurf';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { logRequest } from './middlewares/loggerMiddleware.js';
import { router as categoriaRoutes } from './routes/CategoriaRoutes.js';
import { router as compraRoutes } from './routes/CompraRoutes.js';
import { router as devolucionRoutes } from './routes/DevolucionRoutes.js';
import { router as diaRoutes } from './routes/DiaRoutes.js';
import { router as empleadoRoutes } from './routes/EmpleadoRoutes.js';
import { router as horarioRoutes } from './routes/HorarioRoutes.js';
import { router as inventarioRoutes } from './routes/InventarioRoutes.js';
import { router as mensajeRoutes } from './routes/MensajeRoutes.js';
import { router as obra_empleadosRoutes } from './routes/obra_empleadosRoutes.js';
import { router as obra_herramientasRoutes } from './routes/obra_herramientasRoutes.js';
import { router as obraRoutes } from './routes/ObraRoutes.js';
import { router as pedido_elementosRoutes } from './routes/pedido_elementosRoutes.js';
import { router as pedidoRoutes } from './routes/PedidoRoutes.js';
import { router as permisoRoutes } from './routes/PermisoRoutes.js'; // Verifica si es el mismo archivo
import { router as personaRoutes } from './routes/PersonaRoutes.js';
import { router as posicionRoutes } from './routes/PosicionRoutes.js';
import { router as proforma_empleadosRoutes } from './routes/proforma_empleadosRoutes.js';
import { router as proforma_herramientasRoutes } from './routes/proforma_herramientasRoutes.js';
import { router as proforma_inventarioRoutes } from './routes/proforma_inventarioRoutes.js';
import { router as proformaRoutes } from './routes/ProformaRoutes.js';
import { router as transaccion_elementosRoutes } from './routes/transaccion_elementosRoutes.js';
import { router as transaccionRoutes } from './routes/TransaccionRoutes.js';
import { router as ubicacion_empleadoRoutes } from './routes/ubicacion_empleadoRoutes.js';
import { router as ubicacionRoutes } from './routes/UbicacionRoutes.js';
import { router as ventaRoutes } from './routes/VentaRoutes.js';

const PORT = process.env.PORT || 3000;
dotenv.config();

const app = express()
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(logRequest);

/*const csrfProtection = csurf({ cookie: true })
app.use(csrfProtection)*/

app.use(cors({
  origin: ['http://localhost:5173', 'https://miapp.com'], // varios orígenes
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
  credentials: true 
}));

app.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() })
})

app.get('/', (req, res) => res.send('API funcionando'));

app.get('/prueba', (req, res) => res.send('API funcionando'))

/*app.use('/categoria', verificarToken, categoriaRoutes);
app.use('/compra', verificarToken, compraRoutes);
app.use('/devolucion', verificarToken, devolucionRoutes);
app.use('/dia', verificarToken, diaRoutes);
app.use('/empleado', empleadoRoutes);
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
app.use('/venta', verificarToken, ventaRoutes);*/

app.use('/categoria/:usuario', categoriaRoutes);
app.use('/compra/:usuario', compraRoutes);
app.use('/devolucion/:usuario', devolucionRoutes);
app.use('/dia/:usuario', diaRoutes);
app.use('/empleado', empleadoRoutes);
app.use('/horario/:usuario', horarioRoutes);
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

app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;