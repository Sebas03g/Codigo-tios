export function obtenerTotalInventario({data}){
    let total = 0;

    for(const dato of data){
        const cantidad = parseInt(dato.cantidad) * ((1-parseFloat(dato.descuento)) - parseFloat(dato.precio))
        total = total + cantidad;
    }
    return total;
}

export function obtenerTotalHerramientas({data}){
    let total = 0;

    for(const dato of data){
        const cantidad = parseInt(dato.horas) * ((1-parseFloat(dato.descuento)) - parseFloat(dato.precio))
        total = total + cantidad;
    }
    return total;
}

export function obtenerTotalEmpleados({data}){
    let total = 0;

    for(const dato of data){
        const cantidad = parseInt(dato.horas) *  parseFloat(dato.sueldo)
        total = total + cantidad;
    }
    return total;
}