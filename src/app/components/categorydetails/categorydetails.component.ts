import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/interfaces/category';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-categorydetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.scss']
})
export class CategorydetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductService:ProductService){}

  categoryId:string | null ='';
  categoryDetails:Category={} as Category;
  categoriesProd:Category []=[]

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.categoryId = params.get('id');
      }
    })

    this._ProductService.getAllSubCategories(this.categoryId).subscribe({
      next:(response)=>{
        console.log('on subcat',response.data);
        this.categoriesProd = response.data
      }
    })

    this._ProductService.getCategoryDetails(this.categoryId).subscribe({
      next:(response)=>{
        this.categoryDetails=response.data;
      },
    })
  }
}
