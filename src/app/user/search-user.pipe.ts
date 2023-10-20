import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], substr: string = ""): User[] {
    if(substr === "") return users;

    let selectedUsers: User[] = []
    for(let u of users) {
      if(u.email.toLowerCase().includes(substr.toLowerCase()) ||
      (u.firstname != null && u.firstname.toLowerCase().includes(substr.toLowerCase())) ||
      (u.lastname != null && u.lastname.toLowerCase().includes(substr.toLowerCase())) ||
      (u.username != null && u.username.toLowerCase().includes(substr.toLowerCase()))
      ) {
        selectedUsers.push(u);
      }
    }
    return selectedUsers;
  }
}
