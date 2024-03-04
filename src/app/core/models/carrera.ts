import { IResponse } from "./response";

export interface Carrera {
    descripcion_area: string;
    area_carrera_tipo: string;
    denominacion: string
}
export interface CarreraResults extends IResponse{
    data:Carrera[];
}

