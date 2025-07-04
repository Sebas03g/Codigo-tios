import DatePicker from 'react-datepicker';
import { IoClose } from "react-icons/io5";

export default function TareaBase({ formData, empleados, handleChange, handleSubmit, handleDateChange, setOpen}){
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
                    <label htmlFor="fecha">Seleccionar Tiempo a completar</label>
                    <DatePicker
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        selected={formData.fecha_final}
                        onChange={handleDateChange}
                        showTimeSelect
                        dateFormat="Pp"
                        name="fehca"
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
                        {empleados.map((empleado) => (
                            <option key={empleado.id} value={empleado.id}>
                            {empleado.nombre}
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