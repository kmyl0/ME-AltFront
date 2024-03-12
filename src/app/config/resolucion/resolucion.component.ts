import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResolucionService } from '@app/core/services/resolucion.service';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';

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
    InputTextModule
  ],
  templateUrl: './resolucion.component.html',
  styleUrl: './resolucion.component.scss'
})
export class ResolucionComponent implements OnInit{
  resoluciones:any[] = [];
  @ViewChild('filter') filter!: ElementRef;

  selectedRM: boolean = false;
  constructor(private resolucionService:ResolucionService) { }

  ngOnInit():void{

    this.resolucionService.getResolucionesList()
    .subscribe(result => {this.resoluciones= result.data});

  }

  selectRM(resolucionId:number){
    console.log(resolucionId);
    this.selectedRM = true;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
