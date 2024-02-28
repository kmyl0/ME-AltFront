import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '@app/core/services/app.layout.service';
import { MenuComponent } from '../menu/menu.component';
import { DashboardComponent } from '@app/admin/dashboard/dashboard.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenuComponent,DashboardComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) { }
}
