import csv from 'csvtojson';
import axios from 'axios';
import fs from 'fs';

const archivoCSV = 'permisoDependencia.csv';

const URL = 'http://localhost:3000/permiso-dependencia/';

async function enviarDatos() {
  try {
    const datosJSON = await csv().fromFile(archivoCSV);

    
    for (const data of datosJSON) {

        data["id_padre"] = parseInt(data["id_padre"]);
        data["id_hijo"] = parseInt(data["id_hijo"]);
        data["createdBy"] = parseInt(data["createdBy"]);

        try {
            const respuesta = await axios.post(URL, data, {
              headers: { 'Content-Type': 'application/json' }
            });
            console.log('✅ Enviado:', data, '→', respuesta.data);
        } catch (error) {
            console.error('❌ Error con:', data, '→', error.response?.data || error.message);
        }
    }
  } catch (error) {
    console.error('❌ Error al enviar los datos:', error.message);
  }
}

enviarDatos();