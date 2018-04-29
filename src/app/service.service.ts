import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {
  private username: string;
  private clientid ='';
  private clientsecret='';

  constructor(private http:HttpClient) { 
  console.log("service is now ready");
  this.username = "claudianjeri";
}

getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username)
  //  .map(res =>res.json());
}
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos")

}
}
