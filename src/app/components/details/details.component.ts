import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule , CarouselModule ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute, private _WishlistService:WishlistService , private _ProductService:ProductService ,private _Renderer2:Renderer2 , private _CartService:CartService , private _ToastrService:ToastrService){}

  productId!:string|null;
  productDetails:any=null;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.productId= params.get('id')
      }
    })

    this._ProductService.getProductDetails(this.productId).subscribe({
      next:({data})=>{
        this.productDetails=data
      }
    })
  }

    addProduct(id:any , element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element , 'disabled' , 'true');
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message);
        this._Renderer2.removeAttribute(element , 'disabled');
        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element , 'disabled');
      }
    })
  }

  addFav(prodId:string|undefined):void{
    this._WishlistService.addToWishList(prodId).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message);
      },
    })
  }

  productDetailsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:2000,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }
}
