import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink , CuttextPipe , NgxPaginationModule ,SearchPipe , FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private _ProductService:ProductService, private _WishlistService:WishlistService , private _Renderer2:Renderer2, private _ToastrService:ToastrService ,  private _CartService:CartService){};
  products:Product[]=[];
  pageSize:number= 0;
  currentPage:number=1;
  total:number=0;
  term:string='';

  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next:(response)=>{
        this.products=response.data;
        this.pageSize=response.metadata.limit;
        this.currentPage=response.metadata.currentPage;
        this.total=response.results
      },
    });
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


  pageChanged(event:any):void{
    this._ProductService.getProducts(event).subscribe({
      next:(response)=>{
        this.products=response.data;
        this.pageSize=response.metadata.limit;
        this.currentPage=response.metadata.currentPage;
        this.total=response.results
      },
    });
  }
}
