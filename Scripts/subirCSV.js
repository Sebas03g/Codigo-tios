import csv from 'csvtojson';
import axios from 'axios';
import fs from 'fs';

// Ruta al archivo CSV
//const archivoCSV = 'categoria.csv';
const archivoCSV = 'permisos.csv';

// URL a la que quieres hacer la petición
const URL = 'http://localhost:3000/permiso/';
//const URL = 'http://localhost:3000/categoria/';

async function enviarDatos() {
  try {
    const datosJSON = await csv().fromFile(archivoCSV);

    
    for (const categoria of datosJSON) {

        //categoria.venta = categoria.venta?.toLowerCase() === 'true';

        categoria.createdBy = 1;

        try {
            const respuesta = await axios.post(URL, categoria, {
            headers: { 'Content-Type': 'application/json' }
            });
            console.log('✅ Enviado:', categoria, '→', respuesta.data);
        } catch (error) {
            console.error('❌ Error con:', categoria, '→', error.response?.data || error.message);
        }
    }
  } catch (error) {
    console.error('❌ Error al enviar los datos:', error.message);
  }
}

enviarDatos();
