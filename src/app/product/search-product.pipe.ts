import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(prods: Product[], substr: string = ""): Product[] {
    if(substr === "") return prods;

    let selectedItems: Product[] = [];
    for (let p of prods) {
      if(p.name.toLowerCase().includes(substr.toLowerCase()) ||
      (p.partNbr != null && p.partNbr.toLowerCase().includes(substr.toLowerCase()))
      ) {
        selectedItems.push(p)
      }
    }
    return selectedItems;
  }

}
