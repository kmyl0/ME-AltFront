import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '@app/core/services/app.layout.service';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  persona:any;
  constructor(public layoutService: LayoutService,public router: Router) { 
    this.persona = localStorage.getItem('persona');
  }
  logOut(){
    localStorage.clear()
    this.router.navigate(["/"]);
  }
}
