"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[932],{6666:(A,m,s)=>{s.r(m),s.d(m,{LoginComponent:()=>x});var g=s(6814),l=s(95),_=s(1120),o=s(4769),p=s(9410);function d(t,i){if(1&t&&(o.TgZ(0,"div",13),o._uU(1),o.qZA()),2&t){const r=o.oxw();o.xp6(1),o.hij(" ",r.errorMessage," ")}}function c(t,i){1&t&&(o.TgZ(0,"p"),o._uU(1,"Email Is Required"),o.qZA())}function f(t,i){1&t&&(o.TgZ(0,"p"),o._uU(1,"Invalid Email"),o.qZA())}function h(t,i){if(1&t&&(o.TgZ(0,"div",14),o.YNc(1,c,2,0,"p",15),o.YNc(2,f,2,0,"p",15),o.qZA()),2&t){const r=o.oxw();let n,e;o.xp6(1),o.Q6J("ngIf",null==(n=r.loginForm.get("email"))||null==n.errors?null:n.errors.required),o.xp6(1),o.Q6J("ngIf",null==(e=r.loginForm.get("email"))||null==e.errors?null:e.errors.email)}}function Z(t,i){1&t&&(o.TgZ(0,"p"),o._uU(1,"Password Is Required"),o.qZA())}function b(t,i){1&t&&(o.TgZ(0,"p"),o._uU(1,"Password Must Be At Least 6 Chars"),o.qZA())}function v(t,i){if(1&t&&(o.TgZ(0,"div",14),o.YNc(1,Z,2,0,"p",15),o.YNc(2,b,2,0,"p",15),o.qZA()),2&t){const r=o.oxw();let n,e;o.xp6(1),o.Q6J("ngIf",null==(n=r.loginForm.get("password"))||null==n.errors?null:n.errors.required),o.xp6(1),o.Q6J("ngIf",null==(e=r.loginForm.get("password"))||null==e.errors?null:e.errors.pattern)}}function T(t,i){if(1&t&&(o.TgZ(0,"button",16),o._uU(1,"Login"),o.qZA()),2&t){const r=o.oxw();o.Q6J("disabled",r.loginForm.invalid)}}function I(t,i){1&t&&(o.TgZ(0,"button",17),o._UZ(1,"i",18),o.qZA())}let x=(()=>{class t{constructor(r,n,e){this._AuthService=r,this._Router=n,this._FormBuilder=e,this.errorMessage="",this.loading=!1,this.loginForm=this._FormBuilder.group({email:["",[l.kI.required,l.kI.email]],password:["",[l.kI.required,l.kI.pattern(/^[A-Za-z0-9@#%$!&^_-]{6,}$/)]]})}handleForm(){const r=this.loginForm.value;this.loading=!0,!0===this.loginForm.valid&&this._AuthService.login(r).subscribe({next:n=>{"success"==n.message&&(localStorage.setItem("etoken",n.token),this._AuthService.decodeUser(),this._Router.navigate(["/home"])),this.loading=!1},error:n=>{this.errorMessage=n.error.message,this.loading=!1}})}static#o=this.\u0275fac=function(n){return new(n||t)(o.Y36(p.e),o.Y36(_.F0),o.Y36(l.qu))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],standalone:!0,features:[o.jDz],decls:19,vars:6,consts:[[1,"mx-auto","shadow","rounded","p-4","my-4","bg-main-light"],[1,"mb-3"],["class","alert alert-danger text-center w-50 mx-auto",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-item","my-2"],["for","email"],["formControlName","email","type","email","id","email","name","email",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","password"],["formControlName","password","type","password","id","password","name","password",1,"form-control"],["type","submit","class","btn main-btn d-block ms-auto",3,"disabled",4,"ngIf"],["type","button","class","btn btn-success d-block ms-auto",4,"ngIf"],["routerLink","/forgot","role","button",1,"h6","link-primary"],[1,"alert","alert-danger","text-center","w-50","mx-auto"],[1,"alert","alert-danger"],[4,"ngIf"],["type","submit",1,"btn","main-btn","d-block","ms-auto",3,"disabled"],["type","button",1,"btn","btn-success","d-block","ms-auto"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(n,e){if(1&n&&(o.TgZ(0,"section",0)(1,"h3",1),o._uU(2,"Login Now :"),o.qZA(),o.YNc(3,d,2,1,"div",2),o.TgZ(4,"form",3),o.NdJ("ngSubmit",function(){return e.handleForm()}),o.TgZ(5,"div",4)(6,"label",5),o._uU(7,"Email:"),o.qZA(),o._UZ(8,"input",6),o.YNc(9,h,3,2,"div",7),o.qZA(),o.TgZ(10,"div",4)(11,"label",8),o._uU(12,"Password:"),o.qZA(),o._UZ(13,"input",9),o.YNc(14,v,3,2,"div",7),o.qZA(),o.YNc(15,T,2,1,"button",10),o.YNc(16,I,2,0,"button",11),o.TgZ(17,"a",12),o._uU(18,"Forget Password?"),o.qZA()()()),2&n){let a,u;o.xp6(3),o.Q6J("ngIf",e.errorMessage),o.xp6(1),o.Q6J("formGroup",e.loginForm),o.xp6(5),o.Q6J("ngIf",(null==(a=e.loginForm.get("email"))?null:a.errors)&&(null==(a=e.loginForm.get("email"))?null:a.touched)),o.xp6(5),o.Q6J("ngIf",(null==(u=e.loginForm.get("password"))?null:u.errors)&&(null==(u=e.loginForm.get("password"))?null:u.touched)),o.xp6(1),o.Q6J("ngIf",!e.loading),o.xp6(1),o.Q6J("ngIf",e.loading)}},dependencies:[g.ez,g.O5,l.UX,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,_.rH]})}return t})()}}]);