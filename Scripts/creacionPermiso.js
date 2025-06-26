import axios from 'axios';

const URL = 'http://localhost:3000/permiso/';

async function crearPermisos(){
    try {
        const datosJSON = await csv().fromFile(archivoCSV);

        
        for (const elemento of datosJSON) {

            //elemento.venta = elemento.venta?.toLowerCase() === 'true';

            elemento.createdBy = 1;

            try {
                const respuesta = await axios.post(URL, elemento, {
                headers: { 'Content-Type': 'application/json' }
                });
                console.log('✅ Enviado:', elemento, '→', respuesta.data);
            } catch (error) {
                console.error('❌ Error con:', elemento, '→', error.response?.data || error.message);
            }
        }
    } catch (error) {
        console.error('❌ Error al enviar los datos:', error.message);
    }
}