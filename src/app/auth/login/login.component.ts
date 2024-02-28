import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutService } from '@app/core/services/app.layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  password!: string;
  username!: string;

  constructor(public layoutService: LayoutService, public router: Router) { }

  login() {
        
    if (this.username == "666666" && this.password == "123456") {
        let user = {
            username: this.username,
            password: this.password
        };
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigate(["dashboard"]);
    }else{
        console.log("asdasdasd");
    }
  }
}
