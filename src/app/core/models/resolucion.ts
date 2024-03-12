import { IResponse } from "./response";

export interface Resolucion {
    id: number,
    resolucion_ministerial: string,
    codigo: number,
    activo: boolean,
    fecha_registro: Date,
    fecha_modificacion: Date,
    fecha_resolucion: Date,
    descripcion: string
}
export interface ResolucionResults extends IResponse{
    data:Resolucion[];
}

