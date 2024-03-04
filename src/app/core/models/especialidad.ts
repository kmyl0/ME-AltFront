import { IResponse } from "./response";

export interface Especialidad {
    id: number;
    descripcion: string;
}
export interface EspecialidadResults extends IResponse{
    data:Especialidad[];
}

