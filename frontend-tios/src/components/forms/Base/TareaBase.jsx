import DatePicker from 'react-datepicker';
import { IoClose } from "react-icons/io5";

export default function TareaBase({ 
    formData, empleados, handleChange, 
    handleSubmit, handleDateChange, setOpen,
    ubicaciones, obras
}){
    return (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Crear Tarea</h2>
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="text-red-500 text-xl hover:text-red-700"
                        >
                          <IoClose />
                        </button>
                </div>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="descripcion">Descripcion</label>
                    <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="text"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="fecha_final">Seleccionar Tiempo a completar</label><br/>
                    <DatePicker
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        selected={formData.fecha_final}
                        onChange={(date) => handleDateChange(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        name="fecha_final"
                    />
                </div>
                <div>
                    <label htmlFor="id_asignado">Seleciconar Empleado</label>
                    <select
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        name="id_asignado"
                        value={formData.id_asignado}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- Selecciona una Empleado --</option>
                        {empleados?.map?.((empleado) => (
                            <option key={empleado.id} value={empleado.id}>
                            {empleado.nombre}
                            </option>
                        ))}
    
                    </select>
                </div>
                <div>
                    <label htmlFor="id_ubicacion">Seleciconar Ubicacion</label>
                    <select
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        name="id_ubicacion"
                        value={formData.id_ubicacion}
                        onChange={handleChange}
                    >
                        <option value="">-- Selecciona una ubicacion --</option>
                        {ubicaciones?.map?.((ubicacion) => (
                            <option key={ubicacion.id} value={ubicacion.id}>
                            {ubicacion.nombre}
                            </option>
                        ))}
    
                    </select>
                </div>
                <div>
                    <label htmlFor="id_obra">Seleciconar Obra</label>
                    <select
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        name="id_obra"
                        value={formData.id_obra}
                        onChange={handleChange}
                    >
                        <option value="">-- Selecciona una obra --</option>
                        {obras?.map?.((obra) => (
                            <option key={obra.id} value={obra.id}>
                            {obra.nombre}
                            </option>
                        ))}
    
                    </select>
                </div>
                <button
                    type="submit"
                    className="block w-full max-w-xs mx-auto bg-blue-500 text-white p-3 rounded text-lg hover:bg-blue-600 transition"
                >
                    Crear
                </button>
            </form>
        );
}