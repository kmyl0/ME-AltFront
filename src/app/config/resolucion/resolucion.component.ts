import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AreaResults } from '@app/core/models/area';
import { CursoAcademico } from '@app/core/models/cursoacademico';
import { EspecialidadResults } from '@app/core/models/especialidad';
import { Modulo } from '@app/core/models/modulo';
import { NivelAcademicoResults } from '@app/core/models/nivelacademico';
import { ResolucionResults } from '@app/core/models/resolucion';
import { ResolucionService } from '@app/core/services/resolucion.service';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from "primeng/inputtextarea";
import { Observable, catchError, delay } from 'rxjs';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-resolucion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AccordionModule,
    TableModule,
    InputSwitchModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    CheckboxModule,
    InputTextareaModule
  ],
  templateUrl: './resolucion.component.html',
  styleUrl: './resolucion.component.scss'
})
export class ResolucionComponent implements OnInit{
  //resoluciones:any[] = [];
  resoluciones$!:Observable<ResolucionResults> ;
  public hasError: boolean = false;
  public areaList$!:Observable<AreaResults>;
  public especialidadList$!:Observable<EspecialidadResults>;
  areas:any[] =[];
  area: any = null;
  especialidades:any[] =[];
  especialidad: any = null;

  @ViewChild('filter') filter!: ElementRef;

  selectedRM: boolean = false;

  cursoAcademicoEspTitulo : string = "";
  moduloTitulo : string = "";
  
  nivelesEPA: any[] = [];
  nivelesESA: any[] = [];
  nivelesETA: any[] = [];
  modulos: any[] = [];
  contenidos: any[] = [];
  isExpanded: boolean = false;
  loading: boolean = false;
  expandedRows: expandedRows = {};

  valCheck: string[] = [];

  constructor(private resolucionService:ResolucionService) { 
  
  }

  ngOnInit():void{

    // this.resolucionService.getResolucionesList()
    // .subscribe(result => {
    //   this.resoluciones= result.data;
    // });
    this.resoluciones$ =  this.resolucionService.getResolucionesList()
  
   // this.loading = false;

  }

  selectRM(resolucionId:number){
    this.selectedRM = true;
    this.resolucionService.getNivelesAcademicosByResolucionMinisterial(resolucionId)
    .subscribe(result => { 
      this.nivelesEPA=result.data.filter((nivel) => (nivel.nivel_academico_codigo==100));
      this.nivelesESA=result.data.filter((nivel) => (nivel.nivel_academico_codigo==200));
      this.nivelesETA=result.data.filter((nivel) => (nivel.nivel_academico_codigo!=100 && nivel.nivel_academico_codigo!=200));
    });
  }
  verModulos(cursoAcademico:CursoAcademico){
    
    this.cursoAcademicoEspTitulo = cursoAcademico.especialidad_area+" - "+cursoAcademico.formacion_grado_estudio;
    this.selectedRM = true;
    this.resolucionService.getmodulosByCurso(cursoAcademico.curso_academico_id)
    .subscribe(result => { this.modulos=result.data;});
    //mostrar modal con los modulos del curso
  }
  verContenidosModulo(modulo:Modulo){
    this.moduloTitulo = modulo.modulo;
    this.resolucionService.getcontenidosByModulo(modulo.id)
    .subscribe(result => { this.contenidos=result.data;});
  
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
  expandAllETA() {
    
    if (!this.isExpanded) {
        this.nivelesETA.forEach(nivel => nivel && nivel.niveles_academicos ? this.expandedRows[nivel.niveles_academicos] = true : '');

    } else {
        this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
}
}
