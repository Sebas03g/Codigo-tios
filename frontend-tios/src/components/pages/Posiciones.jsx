import TablaPosicion from "../Tables/TablaPosicion";

export default function PosicionesPage({data, onSeleccionar}){
    return(
        <>
            <TablaPosicion
                datos={data}
                onSeleccionar = {onSeleccionar}
            />
        </>
    );
}