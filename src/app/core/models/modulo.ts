import { IResponse } from "./response";

export interface Modulo {
    id: number,
    modulo: string,
    obs: string,
    area_saberes_tipo_id: number,
    codigo: number,
    sigla: string,
    oficial: number,
    contenido: string,
    esvigente: boolean,
    curso_academico_id: number
}
export interface ModuloResults extends IResponse{
    data:Modulo[];
}

