import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/interfaces/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule ,RouterLink , CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor(private _WishlistService:WishlistService, private _ToastrService:ToastrService , private _CartService:CartService , private _Renderer2:Renderer2){}
  
  products:Product[]=[];
  wishListData:string[]=[];

  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next:(response)=>{
        this.products=response.data;
        const newData = response.data.map((item:any)=>item._id);
        this.wishListData = newData;
      },
    })
  }

  removeFav(prodId:string | undefined):void{
    this._WishlistService.removeWishListItem(prodId).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message);
        this.wishListData=response.data;
        const newProductsData=this.products.filter((item:any)=>this.wishListData.includes(item._id));
        this.products=newProductsData;
      },

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
}
