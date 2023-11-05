import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService , private _Router:Router , private _FormBuilder:FormBuilder){}

  errorMessage:string='';
  loading:boolean=false;

  registerForm:FormGroup =this._FormBuilder.group({
    name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^[A-Za-z0-9@#%$!&^_-]{6,}$/)]],
    rePassword:['',],
    phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]]
  },{validators:[this.confirmPassword]} as FormControlOptions);

  confirmPassword(group:FormGroup):void{
    const password = group.get('password');
    const rePassword = group.get('rePassword');
    if(rePassword?.value==''){
      rePassword?.setErrors({required:true});
    }
    else if(password?.value !=rePassword?.value){
      rePassword?.setErrors({mismatch:true});
    }
  }

  handleForm():void{
    const userData=this.registerForm.value;
    this.loading=true;
    if(this.registerForm.valid === true){
      this._AuthService.register(userData).subscribe({
        next:(response)=>{
          console.log(response);
          if(response.message == 'success'){
            this._Router.navigate(['/login'])
          }
          this.loading=false;
        },
        error:(err)=>{
          this.errorMessage=err.error.message
          console.log(err);
          this.loading=false;
        }
      })
    }
    
  }
}
