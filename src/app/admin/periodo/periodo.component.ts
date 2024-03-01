import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { PeriodoService } from '@app/core/services/periodo.service';
import { Observable } from 'rxjs';
import { PeriodoResults } from '@app/core/models/periodo';

@Component({
  selector: 'app-periodo',
  standalone: true,
  imports: [
    CommonModule,
		FormsModule,
		TableModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		MultiSelectModule,
		DropdownModule,
		ProgressBarModule,
		ToastModule
    
  ],
  templateUrl: './periodo.component.html',
  styleUrl: './periodo.component.scss'
})
export class PeriodoComponent implements OnInit{
  customers1:any[] = [];
  representatives:any[] = [];
  statuses: any[] = [];

  @ViewChild('filter') filter!: ElementRef;

  public periodoList$!:Observable<PeriodoResults>;

  constructor(private periodoService:PeriodoService) { }
  
  
  ngOnInit():void{

    this.periodoList$ = this.periodoService.getPeriodosList();
    
    this.periodoList$.subscribe(result => {console.log(result,typeof(result))});




    this.customers1=[
      {name:'aaaaa',date:'11/11/2021',status:'unqualified',balance:'101',area:'adadasdasd'},
      {name:'bbbb',date:'11/11/2021',status:'qualified',balance:'101',area:'adadasdasd'},
      {name:'cccc',date:'11/11/2021',status:'new',balance:'101',area:'adadasdasd'},
      {name:'dddd',date:'11/11/2021',status:'negotiation',balance:'101',area:'adadasdasd'},
      {name:'eeee',date:'11/11/2021',status:'renewal',balance:'101',area:'adadasdasd'},
      {name:'ffff',date:'11/11/2021',status:'proposal',balance:'101',area:'adadasdasd'},
    ];


    this.statuses = [
        { label: 'Unqualified', value: 'unqualified' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'New', value: 'new' },
        { label: 'Negotiation', value: 'negotiation' },
        { label: 'Renewal', value: 'renewal' },
        { label: 'Proposal', value: 'proposal' }
    ];
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
