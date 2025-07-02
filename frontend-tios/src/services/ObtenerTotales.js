export function obtenerTotalInventario({data}){
    let total = 0;

    for(const dato of data){
        const cantidad = parseInt(dato.horas) * ((1-parseFloat(dato.herramienta.descuento)) - parseFloat(dato.herramienta.precio))
        total = total + cantidad;
    }
    return total;
}

export function obtenerTotalHerramientas({data}){

}

export function obtenerTotalEmpleados({data}){

}