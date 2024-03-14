import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { ResolucionResults } from '../models/resolucion';
import { NivelAcademicoResults } from '../models/nivelacademico';
import { ModuloResults } from '../models/modulo';
import { ContenidoResults } from '../models/contenido';

@Injectable({
  providedIn: 'root'
})
export class ResolucionService {

  constructor(private http:HttpClient) { }

  getResolucionesList():Observable<ResolucionResults>{
    return this.http.get<ResolucionResults>(environment.urlApi+ 'catalogos-academico/resolucionesAll');
  }

  getNivelesAcademicosByResolucionMinisterial(idRes:number):Observable<NivelAcademicoResults>{
    return this.http.get<NivelAcademicoResults>(environment.urlApi+'catalogos-academico/arrayNivelesAcademicosByResolucionMinisterialId/'+idRes);
  }

  getmodulosByCurso(idCurso:number):Observable<ModuloResults>{
    return this.http.get<ModuloResults>(environment.urlApi+'catalogos-academico/modulosByCursoId/'+idCurso);
  }

  getcontenidosByModulo(idModulo:number):Observable<ContenidoResults>{
    return this.http.get<ContenidoResults>(environment.urlApi+'catalogos-academico/contenidosByModuloId/'+idModulo);
  }
}
