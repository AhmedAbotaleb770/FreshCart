"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[159],{159:(S,p,i)=>{i.r(p),i.d(p,{HomeComponent:()=>U});var a=i(6814),g=i(8129),m=i(756),d=i(1120),u=i(530),l=i(95),t=i(4769),h=i(0),x=i(9196),v=i(6286),C=i(2425);function T(o,n){1&o&&t._UZ(0,"img",9)}function f(o,n){1&o&&t._UZ(0,"img",10)}function O(o,n){1&o&&t._UZ(0,"img",11)}function A(o,n){if(1&o&&(t._UZ(0,"img",15),t.TgZ(1,"h6",16),t._uU(2),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH)("alt",e.name)("title",e.name),t.xp6(2),t.Oqu(e.name)}}function E(o,n){1&o&&(t.ynx(0),t.YNc(1,A,3,4,"ng-template",4),t.BQk())}function Z(o,n){if(1&o&&(t.TgZ(0,"section",12)(1,"h2",13),t._uU(2,"Shop Popular Categories"),t.qZA(),t.TgZ(3,"owl-carousel-o",3),t.YNc(4,E,2,0,"ng-container",14),t.qZA()()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("options",e.categoryOptions),t.xp6(1),t.Q6J("ngForOf",e.categories)}}const M=function(o){return["/productdetails",o]};function P(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",21)(1,"div",22)(2,"i",23),t.NdJ("click",function(){const c=t.CHM(e).$implicit,_=t.oxw(2);return t.KtG(_.addFav(c._id))}),t.qZA(),t.TgZ(3,"header",24),t._UZ(4,"img",25),t.TgZ(5,"h6",26),t._uU(6),t.qZA(),t.TgZ(7,"h6"),t._uU(8),t.ALo(9,"cuttext"),t.qZA(),t.TgZ(10,"div",27)(11,"span",28),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.TgZ(14,"span",29),t._UZ(15,"i",30),t._uU(16),t.qZA()()(),t.TgZ(17,"footer")(18,"button",31,32),t.NdJ("click",function(){const c=t.CHM(e).$implicit,_=t.MAs(19),y=t.oxw(2);return t.KtG(y.addProduct(c._id,_))}),t._uU(20," + Add To Cart"),t.qZA()()()()}if(2&o){const e=n.$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(14,M,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("title",e.title)("alt",e.title),t.xp6(2),t.Oqu(e.category.name),t.xp6(2),t.Oqu(t.xi3(9,8,e.title,3)),t.xp6(4),t.Oqu(t.xi3(13,11,e.price,"EGP ")),t.xp6(4),t.hij(" ",e.ratingsAverage," ")}}function D(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"section",12)(1,"h2",17),t._uU(2,"Popular Products"),t.qZA(),t.TgZ(3,"input",18),t.NdJ("ngModelChange",function(r){t.CHM(e);const c=t.oxw();return t.KtG(c.term=r)}),t.qZA(),t.TgZ(4,"div",19),t.YNc(5,P,21,16,"div",20),t.ALo(6,"slice"),t.ALo(7,"search"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.term),t.xp6(2),t.Q6J("ngForOf",t.Dn7(6,2,t.xi3(7,6,e.products,e.term),0,18))}}let U=(()=>{class o{constructor(e,s,r,c,_){this._ProductService=e,this._WishlistService=s,this._CartService=r,this._ToastrService=c,this._Renderer2=_,this.products=[],this.categories=[],this.term="",this.categoryOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,autoplay:!0,autoplayTimeout:3e3,autoplaySpeed:800,dots:!0,navSpeed:700,navText:["",""],responsive:{0:{items:2},400:{items:3},740:{items:4},940:{items:6}},nav:!1},this.mainSlideOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,autoplay:!0,autoplayTimeout:3e3,autoplaySpeed:1e3,dots:!0,navSpeed:700,navText:["",""],items:1,nav:!1}}ngOnInit(){this._ProductService.getProducts().subscribe({next:e=>{this.products=e.data}}),this._ProductService.getCategories().subscribe({next:e=>{this.categories=e.data}})}addFav(e){this._WishlistService.addToWishList(e).subscribe({next:s=>{this._ToastrService.success(s.message)}})}addProduct(e,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.addToCart(e).subscribe({next:r=>{this._ToastrService.success(r.message),this._Renderer2.removeAttribute(s,"disabled"),this._CartService.cartNumber.next(r.numOfCartItems)},error:r=>{this._Renderer2.removeAttribute(s,"disabled")}})}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(h.M),t.Y36(x.M),t.Y36(v.N),t.Y36(C._W),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:12,vars:3,consts:[[1,"pt-4"],[1,"row","g-0"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],["height","200","src","./assets/images/images/slide-1.jpeg","alt","slide1",1,"w-100"],["height","200","src","./assets/images/images/slide-2.jpeg","alt","slide2",1,"w-100"],["class","py-4",4,"ngIf"],["height","400","src","./assets/images/images/slider-image-1.jpeg","alt","slide1"],["height","400","src","./assets/images/images/slider-image-2.jpeg","alt","slide2"],["height","400","src","./assets/images/images/slider-image-3.jpeg","alt","slide3"],[1,"py-4"],[1,"my-3"],[4,"ngFor","ngForOf"],["height","300",3,"src","alt","title"],[1,"text-main","my-2"],[1,"my-3","text-center"],["type","text","placeholder","Search Product Name...",1,"form-control","w-50","mx-auto","mb-3",3,"ngModel","ngModelChange"],[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","h-100"],["title","Add To WishList",1,"fa-regular","fa-heart","heart","text-danger",3,"click"],["role","button",3,"routerLink"],[1,"w-100","mb-2",3,"src","title","alt"],[1,"text-main"],[1,"d-flex","align-items-center","justify-content-between"],[1,"h6"],[1,"text-muted"],[1,"fas","fa-star","rating-color"],[1,"main-btn","w-100",3,"click"],["btnAdd",""]],template:function(s,r){1&s&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"owl-carousel-o",3),t.YNc(4,T,1,0,"ng-template",4),t.YNc(5,f,1,0,"ng-template",4),t.YNc(6,O,1,0,"ng-template",4),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"img",6)(9,"img",7),t.qZA()()(),t.YNc(10,Z,5,2,"section",8),t.YNc(11,D,8,9,"section",8)),2&s&&(t.xp6(3),t.Q6J("options",r.mainSlideOptions),t.xp6(7),t.Q6J("ngIf",r.categories.length>0),t.xp6(1),t.Q6J("ngIf",r.products.length>0))},dependencies:[a.ez,a.sg,a.O5,a.OU,a.H9,g.r,m.bB,m.Fy,m.Mp,d.rH,u.C,l.u5,l.Fj,l.JJ,l.On]})}return o})()}}]);