import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router, private _FormBuilder:FormBuilder){}

  errorMessage:string='';
  loading:boolean=false;

  loginForm:FormGroup =this._FormBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^[A-Za-z0-9@#%$!&^_-]{6,}$/)]]
  });


  handleForm():void{
    const userData=this.loginForm.value;
    this.loading=true;
    if(this.loginForm.valid === true){
      this._AuthService.login(userData).subscribe({
        next:(response)=>{
          if(response.message == 'success'){
            localStorage.setItem('etoken',response.token)
            this._AuthService.decodeUser();
            this._Router.navigate(['/home'])
          }
          this.loading=false;
        },
        error:(err)=>{
          this.errorMessage=err.error.message
          this.loading=false;
        }
      })
    }
    
  }
}
