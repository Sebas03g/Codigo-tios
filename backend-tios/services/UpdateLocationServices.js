import repo from '../repository/EmpleadoRepository.js';
import repoLocations from '../repository/UbicacionRepository.js'
import repoMensaje from '../repository/MensajeRepository.js'
import distance from '@turf/distance';
import { point } from '@turf/helpers';

export default updateLocation = async (id, data) => {
  try {
    const empleado = await repo.findById(id);
    if (!empleado) throw new Error(`Empleado con ID ${id} no encontrado`);

    const ubicaciones = await repoLocations.allExtraData('punto');
    if (!Array.isArray(ubicaciones)) throw new Error('Error al obtener ubicaciones');

    let ubi;
    let estado = false;

    for (const ubicacion of ubicaciones) {
      const punto = ubicacion.punto;

      if (!punto?.lat || !punto?.lng) continue;

      const dist = distance(
        point([parseFloat(data.lng), parseFloat(data.lat)]),
        point([parseFloat(punto.lng), parseFloat(punto.lat)]),
        { units: 'meters' }
      );

      if (dist <= 200) {
        estado = true;
        ubi = ubicacion;
        break;
      }
    }

    if (estado !== data.estado) {
      const MensajeData = {
        texto: estado
          ? `El empleado ${empleado.nombre} a la ubicacion de trabajo ${ubi?.nombre || 'desconocida'}.`
          : `El empleado ${empleado.nombre} salio de su zona de trabajo.`,
        titulo: estado ? "Entrada ubicacion de trabajo" : "Salida ubicacion de trabajo",
      };

      await repoMensaje.create(MensajeData);

      const ubicaconEmpleadoData = {
        
      }

    }

    const fixedData = {
      latActual: parseFloat(data.lat),
      lngActual: parseFloat(data.lng),
    };

    await repo.update(id, fixedData);

  } catch (error) {
    console.error(`Error en updateLocation: ${error.message}`);
    throw error;
  }
};
