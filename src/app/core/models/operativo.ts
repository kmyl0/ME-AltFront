import { IResponse } from "./response";

export interface Operativo {
    gestion:  number;
    periodo_id: number;
    descripcion_periodo: string;
    nivel_id: number;
    descripcion_nivel: string;
    area_id: number;
    descripcion_area: string;
    abreviacion_area: string;
    estado: boolean;
}
export interface OperativoResults extends IResponse{
    data:Operativo[];
}

