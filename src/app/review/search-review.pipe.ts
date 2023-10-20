import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReview'
})
export class SearchReviewPipe implements PipeTransform {

  transform(rev: Request[], substr: string = ""): void {


    
  }

}
