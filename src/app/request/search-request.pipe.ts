import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'searchRequest'
})
export class SearchRequestPipe implements PipeTransform {

  transform(reqs: Request[], substr: string = ""): Request[] {
    if(substr === "") return reqs;

    let selectedUsers: Request[] = [];
    for(let r of reqs) {
      if(r.status.toLowerCase().includes(substr.toLowerCase())) {
        selectedUsers.push(r);
      }
    }
    return selectedUsers;
  }

}
