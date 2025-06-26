import csv from 'csvtojson';
import axios from 'axios';

const archivoCSV = 'empleados.csv';
const URL = 'http://localhost:3000/empleado/';

async function enviarDatos() {
    try {
        const dataJSON = await csv().fromFile(archivoCSV);

        for (const empleado of dataJSON) {
            const posicionId = parseInt(empleado.posicion);
            
            empleado.posicion = { connect: { id: posicionId } };
            
            // Convierte sueldo a número decimal si viene como string
            console.log(empleado.sueldo)

            empleado.sueldo = parseFloat(empleado.sueldo);

            empleado.createdBy = parseInt(empleado.createdBy)
            
            // Si es necesario, hashea la contraseña antes de enviarla
            // empleado.password = await hashPassword(empleado.password);
            
            try {
                const respuesta = await axios.post(URL, empleado, {
                headers: { 'Content-Type': 'application/json' }
                });
                console.log('✅ Enviado:', empleado, '→', respuesta.data);
            } catch (error) {
                console.error('❌ Error con:', empleado, '→', error.response?.data || error.message);
            }
        }


    } catch (error) {
        console.error('❌ Error al enviar los datos:', error.message);
    }
}

enviarDatos();
