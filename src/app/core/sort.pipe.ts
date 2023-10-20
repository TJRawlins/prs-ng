import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], column: string = "id", asc: boolean = true): any[] {
    // console.debug(arr)
    if(typeof arr === "undefined" || typeof arr === null) return arr;

    const compareFn = (a: any, b: any): number => {
      let x = null;
      let y = null;

      if(a[column] && b[column]) {
        x = a[column].toString().toLowerCase();
        y = b[column].toString().toLowerCase();
      }
      else {
        x = typeof a[column] === "number" || "object" ? a[column] : a[column].toString().toLowerCase();
        y = typeof b[column] === "number" || "object" ? b[column] : b[column].toString().toLowerCase();
      }
      if(x === y) return 0;
      if(asc) {
        return (x > y) ? 1: -1;
      }
      else {
        return (x > y) ? -1: 1;
      }
    }
    return arr.sort(compareFn);
  }

}
