import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from 'src/app/core/interfaces/category';
import { RouterLink } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { SearchbrandsPipe } from 'src/app/core/pipe/searchbrands.pipe';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, RouterLink , FormsModule , SearchbrandsPipe],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  constructor(private _ProductService:ProductService){}
  
  brandsData:Category[]=[];
  term:string='';

  ngOnInit(): void {
    this._ProductService.getBrands().subscribe({
      next:(response)=>{
        this.brandsData = response.data;
      },
    })
  }
}
