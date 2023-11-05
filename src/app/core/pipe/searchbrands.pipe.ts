import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../interfaces/category';

@Pipe({
  name: 'searchbrands',
  standalone: true
})
export class SearchbrandsPipe implements PipeTransform {

  transform(brandsData:Category[] , term:string): Category[] {
    return brandsData.filter((item)=>item.name.toLowerCase().includes(term.toLowerCase()) );
  }

}
