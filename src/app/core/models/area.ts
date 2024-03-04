import { IResponse } from "./response";

export interface Area {
    id: number;
    descripcion: string;
    abreviacion: string;
}
export interface AreaResults extends IResponse{
    data:Area[];
}
