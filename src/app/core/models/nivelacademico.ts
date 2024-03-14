import { CursoAcademico } from "./cursoacademico";
import { IResponse } from "./response";

export interface NivelAcademico {
    nivel_academico_codigo: number,
    niveles_academicos: string,
    carreras : CursoAcademico[]
}
export interface NivelAcademicoResults extends IResponse{
    data:NivelAcademico[];
}

