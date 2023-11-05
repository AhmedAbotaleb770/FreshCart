import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/interfaces/category';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-branddetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branddetails.component.html',
  styleUrls: ['./branddetails.component.scss']
})
export class BranddetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductService:ProductService){}

  brandId:string | null ='';
  brandDetails:Category={} as Category;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.brandId = params.get('id');
      }
    })
    this._ProductService.getBrandDetails(this.brandId).subscribe({
      next:(response)=>{
        console.log(response.data);
        this.brandDetails = response.data;
      },
    })
  }
}
