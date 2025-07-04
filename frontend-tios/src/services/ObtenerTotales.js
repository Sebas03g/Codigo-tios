export function obtenerTotalInventario({procesos}){
    let total = 0;

    for(const data of procesos.inventario){
        for(const dato of data){
            const cantidad = parseInt(dato.cantidad) * ((1-parseFloat(dato.descuento)) - parseFloat(dato.precio))
            total = total + cantidad;
        }
    }
    
    return total;
}

export function obtenerTotalHerramientas({procesos}){
    let total = 0;

    for(const data of procesos.herramientas){
        for(const dato of data){
            const cantidad = parseInt(dato.horas) * ((1-parseFloat(dato.descuento)) - parseFloat(dato.precio))
            total = total + cantidad;
        }
    }
        
    return total;
}

export function obtenerTotalEmpleados({procesos}){
    let total = 0;

    for(const data of procesos.empleados){
        for(const dato of data){
            const cantidad = parseInt(dato.horas) *  parseFloat(dato.sueldo)
            total = total + cantidad;
        }
    }

    
    return total;
}