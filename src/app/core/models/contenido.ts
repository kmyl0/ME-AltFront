import { IResponse } from "./response";

export interface Contenido {
    id: number,
    ctr_modulo_tipo_id: number,
    sigla_contenido: string,
    contenido: string,
    fecha_inicio: Date,
    fecha_fin: Date,
    esactivo: boolean
}
export interface ContenidoResults extends IResponse{
    data:Contenido[];
}