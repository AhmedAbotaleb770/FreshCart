import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/interfaces/category';
import { RouterLink } from '@angular/router';
import { SearchbrandsPipe } from 'src/app/core/pipe/searchbrands.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,RouterLink,SearchbrandsPipe , FormsModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  constructor(private _ProductService:ProductService){}

  categoryData:Category[]=[];
  term:string='';

  ngOnInit(): void {
    this._ProductService.getCategories().subscribe({
      next:(response)=>{
        this.categoryData = response.data;
      },
    })
  }
}
