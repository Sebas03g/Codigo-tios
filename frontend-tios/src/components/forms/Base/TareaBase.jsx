import DatePicker from 'react-datepicker';

export default function TareaBase({ formData, empleados, handleChange, handleSubmit, handleDateChange}){
    return (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-0 right-0 p-2 text-red-500"
                >
                    ✖ Cerrar
                </button>
                <h2 className="text-xl font-bold mb-4">Crear Tarea</h2>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
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
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Crear
                </button>
            </form>
        );
}