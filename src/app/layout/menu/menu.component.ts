import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@app/core/services/app.layout.service';
import { MenuitemComponent } from '../menuitem/menuitem.component';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,MenuitemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  model: any[] = [];
  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
      this.model = [
          {
              label: 'Inicio',
              items: [
                  { label: 'Bienvenida', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
              ],
          },
          {
              label: 'Administración',
              items: [
                  { label: 'Gestión/Periodo', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/periodo'] },
                  { label: 'Fechas Operativos', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/operativo/1'] },
                  { label: 'Materias (EPA-ESA)', icon: 'pi pi-fw pi-bookmark', routerLink: ['/admin/materia'] },
                  { label: 'Duración (Horas)', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/admin/duracion'] },
                  { label: 'Carreras (ETA-PERM)', icon: 'pi pi-fw pi-box', routerLink: ['/admin/carrera'] },
                ]
            },
            {
                label: 'Configuración',
                items: [
                  { label: 'R.M.', icon: 'pi pi-fw pi-table', routerLink: ['/config/resolucion'] },
                  { label: 'Planes de Estudio (ETA)', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                  { label: 'Registro Cursos (PERM)', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                  ]
          },
        //   {
        //       label: 'Tramites',
        //       items: [
        //           // { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
        //           // { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
        //       ]
        //   },
      ];
  }
}
