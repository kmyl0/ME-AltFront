import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarreraResults } from '@app/core/models/carrera';
import { CarreraService } from '@app/core/services/carrera.service';
import { Table,TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Observable } from 'rxjs';
import { InputTextareaModule } from "primeng/inputtextarea";

import { DropdownModule } from 'primeng/dropdown';
import { AreaResults } from '@app/core/models/area';
import { AreaService } from '@app/core/services/area.service';
import { EspecialidadResults } from '@app/core/models/especialidad';
import { EspecialidadService } from '@app/core/services/especialidad.service';

@Component({
  selector: 'app-carreras',
  standalone: true,
  imports: [TableModule,
    InputTextModule,
		ButtonModule,
    DialogModule,
    InputTextareaModule,
    DropdownModule
  ],

  templateUrl: './carreras.component.html',
  styleUrl: './carreras.component.scss'
})
export class CarrerasComponent {
//variables
  carreras:any[] = [];
  areas:any[] =[];
  area: any = null;
  especialidades:any[] =[];
  especialidad: any = null;
  public carreraList$!:Observable<CarreraResults>;
  public areaList$!:Observable<AreaResults>;
  public especialidadList$!:Observable<EspecialidadResults>;
  @ViewChild('filter') filter!: ElementRef;

  constructor(private carreraService:CarreraService, private areaService:AreaService,private especialidadService:EspecialidadService) { }
  
  ngOnInit():void{
    this.carreraList$ = this.carreraService.getCarreraList();
    this.carreraList$.subscribe(result => {this.carreras= result.data});
    
    //esto se deberia llevar a una funcion para cargar el momento de mostrar el modal
    this.areaList$ = this.areaService.getAreaList();
    this.areaList$.subscribe(result => {this.areas= result.data});
    this.especialidadList$ = this.especialidadService.getEspecialidadList();
    this.especialidadList$.subscribe(result => {this.especialidades= result.data});
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
