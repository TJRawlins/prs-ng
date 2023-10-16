import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolPipe implements PipeTransform {

  transform(bool: boolean, locale: string = "en"): any {
    if(locale === "en") return bool ? "Yes" : "No";
    if(locale === "fr") return bool ? "Qoi" : "Non";
  }
}
