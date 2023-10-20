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
      if(v.code.toLowerCase().includes(substr.toLowerCase()) || 
      (v.name != null && v.name.toLowerCase().includes(substr.toLowerCase())) ||
      (v.address != null && v.address.toLowerCase().includes(substr.toLowerCase())) || 
      (v.phone != null && v.phone.toLowerCase().includes(substr.toLowerCase()))
      ) {
        selectedVends.push(v);
      }
    }
    return selectedVends;
  }
}