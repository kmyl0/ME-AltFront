import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperativoResults } from '@app/core/models/operativo';
import { OperativoService } from '@app/core/services/operativo.service';
import { Observable } from 'rxjs';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Table,TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-operativo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
		DropdownModule,
    
    ],
  templateUrl: './operativo.component.html',
  styleUrl: './operativo.component.scss',
})
export class OperativoComponent implements OnInit {

  public operativoList$!:Observable<OperativoResults>;
  operativos:any[] = [];
  @ViewChild('filter') filter!: ElementRef;
  gestiones = [
    { gestion: '2024', id: '2024' },
    { gestion: '2023', id: '2023' }
  ];
  gestion: any = null;
  constructor(private operativoService:OperativoService,private route: ActivatedRoute) { }
  ngOnInit():void{
  
   
    const id = Number(this.route.snapshot.paramMap.get('periodo_id'));
    
    this.operativoList$ = this.operativoService.getOperativoByPeriodoList(id);
    
    this.operativoList$.subscribe(result => {this.operativos = result.data});

  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter .nativeElement.value = '';
  }
}
