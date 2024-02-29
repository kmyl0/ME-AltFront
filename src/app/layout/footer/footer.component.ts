import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '@app/core/services/app.layout.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public layoutService: LayoutService, public router: Router) { }
}
