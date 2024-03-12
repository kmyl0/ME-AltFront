import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutService } from '@app/core/services/app.layout.service';
import { Router } from '@angular/router';
import { UserService } from '@app/core/services/user.service';
import { Observable } from 'rxjs';
import { UserResults } from '@app/core/models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
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
  public loginRes!:Observable<UserResults>;

  constructor(public layoutService: LayoutService, public router: Router,private userService:UserService) { }

  login() {
    
    if (this.username && this.password ) {
      this.userService.login(this.username,this.password)
      .subscribe(result => {
        console.log(result,result.statusCode);
        if(result.statusCode==200){
          localStorage.setItem('token',result.token);
          localStorage.setItem('roles',JSON.stringify(result.roles));
          localStorage.setItem('activeRol',JSON.stringify(result.roles[0]));
          localStorage.setItem('persona',result.persona);
          this.router.navigate(["admin/dashboard"]);
          console.log("Login success")
        }else{
          console.log("Login error")
        }
      });
    }else{
    }
  }
}