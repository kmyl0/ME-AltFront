import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@app/core/services/app.layout.service';
import { MenuitemComponent } from '../menuitem/menuitem.component';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,MenuitemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  model: any[] = [];

  constructor(public layoutService: LayoutService,private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.model = [
          {
              label: 'Inicio',
              items: [
                  { label: 'Bienvenida', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
              ]
          },
          {
              label: 'Gestión',
              items: [
                  { label: 'Operativos', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                  { label: 'Reporte Modalidad', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                  { label: 'Seleccionar CEA', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                  { label: 'Habilitar SubCentro', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                  { label: 'Busqueda de Estudiante/Participante', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
                  { label: 'Historial de Inscripción', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                  { label: 'Impresión de Libretas', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                  { label: 'Reportes Educación Diversa', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                  { label: 'Reportes Educación Alternativa', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                  { label: 'Reportes Alternativa Seguimiento', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
              ]
          },
          {
              label: 'Bachiller de Excelencia',
              items: [
                  // { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                  // { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
              ]
          },
          {
              label: 'Tramites',
              items: [
                  // { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                  // { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
              ]
          },
      ];
  }
}
