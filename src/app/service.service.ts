import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceService {
  private username: string;
  repos:any;

  constructor(private http:HttpClient) { 
}

getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username)
  //  .map(res =>res.json());
}
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos")

}
updateProfile(username:string){
  this.username = username;
}
}
