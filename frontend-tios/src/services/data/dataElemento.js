import { useState, useEffect } from "react";

export default function DataElemento({data, tipo}){

    const dataFormateada = {
        precio: parseFloat(data.precio),
        descuento: parseFloat(data.descuento),
        categoria: {connect: {"id":data.id_categoria}},
        ubicacion: {connect: {"id":data.id_ubicacion}},
        proveedor: {connect: {"id":data.id_proveedor}},
        ...(tipo === "herramienta" && { cantidad: formData.cantidad })
    }
}