import csv from 'csvtojson';
import axios from 'axios';

const archivoCSV = 'posiciones.csv';
const URL = 'http://localhost:3000/posicion/';

async function enviarDatos() {
    try {
        const dataJSON = await csv().fromFile(archivoCSV);

        for (const posicion of dataJSON){
            posicion.createdBy = 1;

            const permisos = posicion.permisos || '';
            const permisosIds = permisos.split('|')
                .map(id => parseInt(id.trim()))
                .filter(id => !isNaN(id));

            posicion.permisos = {
                connect: permisosIds.map(id => ({ id }))
            };

            try {
                const respuesta = await axios.post(URL, posicion, {
                    headers: { 'Content-Type': 'application/json' }
                });
                console.log('✅ Enviado:', posicion, '→', respuesta.data);
            } catch (error) {
                console.error('❌ Error con:', posicion, '→', error.response?.data || error.message);
            }
        }

    } catch (error) {
        console.error('❌ Error al enviar los datos:', error.message);
    }
}

enviarDatos();
