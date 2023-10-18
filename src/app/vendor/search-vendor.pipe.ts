import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'searchVendor'
})
export class SearchVendorPipe implements PipeTransform {

  transform(vends: Vendor[], substr: string = ""): Vendor[] {
    if(substr === "") return vends;

    let selectedVends: Vendor[] = []
    for(let v of vends) {
      if(v.code.toLowerCase().includes(substr.toLowerCase())) {
        selectedVends.push(v);
      }
    }
    return selectedVends;
  }
}