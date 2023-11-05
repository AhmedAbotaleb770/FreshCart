import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient: HttpClient) { }
  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';

  addToWishList(prodId:string|undefined):Observable<any>{
    return this._HttpClient.post(this.baseUrl+`wishlist`,{productId: prodId});
  }

  getWishList():Observable<any>{
    return this._HttpClient.get(this.baseUrl + `wishlist`);
  }

  removeWishListItem(prodId:string|undefined):Observable<any>{
    return this._HttpClient.delete(this.baseUrl + `wishlist/${prodId}`);
  }
}
